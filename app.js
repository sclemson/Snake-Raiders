const grid = document.querySelector(".grid");
const scoreSpan = document.getElementById("score");
const livesSpan = document.getElementById("lives");
const win = document.querySelector('.winScreen')
const gameOver = document.querySelector('.gameOver')
let indyIndex = 217;
let direction = 1;
let goingRight = true;
let score = 0;
let lives = 3;
let whipIndex = indyIndex;
const start = document.querySelector('#start');
const playAgain = document.querySelector('#playAgain');
const playAgainTwo = document.querySelector('#playAgainTwo');
let whippedSnakes = [];
let snakeId;

for (let i = 0; i < 225; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

const gridBoxes = Array.from(document.querySelectorAll(".grid div"));

const snakes = [
    1, 3, 5, 7, 9, 11, 13, 17, 19, 21, 23, 25, 27, 31, 33, 35, 37, 39, 41, 43
]

function placeSnakes() {
  for (let i = 0; i < snakes.length; i++) {
    if (!whippedSnakes.includes(i)) {
      gridBoxes[snakes[i]].classList.add("snake");
    }
  }
}
placeSnakes();

function removeSnakes() {
    for (let i = 0; i < snakes.length; i++) {
      gridBoxes[snakes[i]].classList.remove("snake");
    }
  }

gridBoxes[indyIndex].classList.add("indy");

function moveSnakes() {

    const leftEdge = snakes[0] % 15 === 0
    const rightEdge = snakes[snakes.length - 1] % 15 === 14
    removeSnakes()

    if (rightEdge && goingRight) {
        for (let i = 0; i < snakes.length; i++) {
          snakes[i] += 15 
          direction = -1
          goingRight = false
        }
      }

    if(leftEdge && !goingRight) {
        for (let i = 0; i < snakes.length; i++) {
          snakes[i] += 15 
          direction = 1
          goingRight = true
        }
      }

    for (let i = 0; i < snakes.length; i++) {
      snakes[i] += direction;
    }
    if (snakes[snakes.length - 1] > 209) {
        gameOver.style.display = 'flex'
        grid.style.display = 'none'
        const endAudio = document.querySelector('#lose')
        endAudio.play()
    }
    placeSnakes();
  }

function startGame() {

  const startAudio = document.querySelector('#snakesAudio')
  startAudio.play()

  placeSnakes();

  gridBoxes[indyIndex].classList.add("indy");

  function moveIndy(e) {
    gridBoxes[indyIndex].classList.remove("indy");
    switch (e.key) {
      case "ArrowLeft":
        if (indyIndex >= 211 && indyIndex <= 224) indyIndex -= 1;
        break;
      case "ArrowRight":
        if (indyIndex >= 210 && indyIndex <= 223) indyIndex += 1;
        break;
    }
    gridBoxes[indyIndex].classList.add("indy");
  }
  document.addEventListener("keydown", moveIndy);

//   function moveSnakes() {

//     const leftEdge = snakes[0] % 15 === 0
//     const rightEdge = snakes[snakes.length - 1] % 15 === 14
//     removeSnakes()

//     if (rightEdge && goingRight) {
//         for (let i = 0; i < snakes.length; i++) {
//           snakes[i] += 15 
//           direction = -1
//           goingRight = false
//         }
//       }

//     if(leftEdge && !goingRight) {
//         for (let i = 0; i < snakes.length; i++) {
//           snakes[i] += 15 
//           direction = 1
//           goingRight = true
//         }
//       }

//     for (let i = 0; i < snakes.length; i++) {
//       snakes[i] += direction;
//     }
//     if (snakes[snakes.length - 1] > 209) {
//         gameOver.style.display = 'flex'
//         grid.style.display = 'none'
//         const endAudio = document.querySelector('#lose')
//         endAudio.play()
//     }
//     placeSnakes();
//   }
//   setInterval(moveSnakes, 1000);

let snakeId = setInterval(moveSnakes, 1000);

  function handleKeydown(e) {
      console.log(e.key)
      if (e.key === 'z') {
          attack()
      }
  }

  function attack() {
    let whipId = setInterval(moveWhip, 100);
    let whipIndex = indyIndex;
    snakeAttack();

    function moveWhip() {
      gridBoxes[whipIndex].classList.remove("whip");
      whipIndex -= 15;
      if (whipIndex < 0) {
          clearInterval(whipId)
          return
      }
      gridBoxes[whipIndex].classList.add("whip");
      if (gridBoxes[whipIndex].classList.contains("snake")) {
        gridBoxes[whipIndex].classList.remove("whip");
        gridBoxes[whipIndex].classList.remove("snake");
        gridBoxes[whipIndex].classList.add("whipped");

        setTimeout(() => gridBoxes[whipIndex].classList.remove("whipped"), 1000);
        clearInterval(whipId);

        const whipSnake = snakes.indexOf(whipIndex);

        whippedSnakes.push(whipSnake);
        console.log("pushed into a new array", whipSnake);
        score += 10;
      }
      let newScore = score;
      scoreSpan.innerHTML = ` ${newScore}`;
      if (newScore === 200) {
        win.style.display = 'flex'
        grid.style.display = 'none'
        const winAudio = document.querySelector('#win')
        winAudio.play()
        clearInterval(snakeId)
      }
    }
  }
  document.addEventListener("keydown", handleKeydown);

  function snakeAttack() {
    if (Math.random() > 0.7) {
        return
    }
    let randomSnakeIndex = snakes[Math.floor(Math.random() * snakes.length)];
    let venomIndex = randomSnakeIndex;
    let venomId = setInterval(moveVenom, 100);
    
    function moveVenom() {
        gridBoxes[venomIndex].classList.remove("venom");
        venomIndex += 15;
        if (venomIndex > 224) {
            clearInterval(venomId)
            return
        }
      gridBoxes[venomIndex].classList.add("venom");
      if (gridBoxes[venomIndex].classList.contains("indy")) {
        gridBoxes[venomIndex].classList.remove("venom");
        gridBoxes[venomIndex].classList.remove("indy");
        gridBoxes[whipIndex].classList.add("death");

        setTimeout(() => gridBoxes[venomIndex].classList.remove("death"), 300);
        clearInterval(venomId);
        lives --
        let newLives = lives;
        livesSpan.innerHTML = ` ${newLives}`;
        if (newLives === 0) {
            gameOver.style.display = 'flex'
            grid.style.display = 'none'
            const endAudio = document.querySelector('#lose')
            endAudio.play()
        }
      }

    }
  }
}

function reload () {
    location.reload();
}

start.addEventListener("click", startGame);
playAgain.addEventListener("click", reload);
playAgainTwo.addEventListener("click", reload);


