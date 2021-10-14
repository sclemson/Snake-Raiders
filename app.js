const grid = document.querySelector('.grid')
const scoreSpan = document.getElementById('score')
const livesSpan = document.getElementById('lives')
// const level = document.querySelector('.level')
let indyIndex = 217
let score = 0
let lives = 3
let whipIndex = indyIndex
const start = document.querySelector('button')
let whippedSnakes = []

for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const gridBoxes = Array.from(document.querySelectorAll('.grid div'))

const snakes = [
    2,3,4,5,6,7,8,9,10,11,12,13,
    31,32,33,34,35,36,37,38,39,40,41,42,
    62,63,64,65,66,67,68,69,70,71,72,73
]

function placeSnakes() {
    for (let i = 0; i < snakes.length; i++) {
        if (!whippedSnakes.includes(i)) {
        gridBoxes[snakes[i]].classList.add('snake')
        }
    }
}
placeSnakes()

gridBoxes[indyIndex].classList.add('indy')

function startGame() {

// const startAudio = document.querySelector('audio')
// startAudio.play()

function placeSnakes() {
    for (let i = 0; i < snakes.length; i++) {
      if(!whippedSnakes.includes(i)){
        gridBoxes[snakes[i]].classList.add('snake')
      }
       
    }
}
placeSnakes()

// old function
// function placeSnakes() {
//     for (let i = 0; i < snakes.length; i++) {
//         if (!whippedSnakes.includes(i)) {
//         gridBoxes[snakes[i]].classList.add('snake')
//         }
//     }
// }
// placeSnakes()

function removeSnakes() {
    for (let i = 0; i < snakes.length; i++) {
        gridBoxes[snakes[i]].classList.remove('snake')
    }
}   

gridBoxes[indyIndex].classList.add('indy')

function moveIndy (e) {
    gridBoxes[indyIndex].classList.remove('indy')
    switch(e.key) {
        case 'ArrowLeft':
            if (indyIndex >= 211 && indyIndex <= 224) indyIndex -=1
            break
        case 'ArrowRight':
            if (indyIndex >= 210 && indyIndex <= 223) indyIndex +=1
            break
    }
    gridBoxes[indyIndex].classList.add('indy')
}
document.addEventListener('keydown', moveIndy)

function moveSnakes () {
    snakes[0] % 15 === 0
    snakes[snakes.length - 1] % 15 === 14
    removeSnakes()

    for (let i = 0; i < snakes.length; i++) {
        snakes[i] +=1
    }
    placeSnakes()
}
setInterval(moveSnakes, 500)

// function whip(e) {
//     console.log(e.key)
//     if (e.key === 'z') {
//         let whipIndex = indyIndex
//         whipIndex -= 15
//         gridBoxes[whipIndex].classList.add('whip')
//     }
// }

function attack (e) {
    let whipId
    let whipIndex = indyIndex
    
    function moveWhip(){
      gridBoxes[whipIndex].classList.remove("whip")
      whipIndex -= 15
      gridBoxes[whipIndex].classList.add("whip")
      if(gridBoxes[whipIndex].classList.contains("snake")){
        gridBoxes[whipIndex].classList.remove("whip")
        gridBoxes[whipIndex].classList.remove("snake")
        gridBoxes[whipIndex].classList.add("whipped")
  
        setTimeout(()=> gridBoxes[whipIndex].classList.remove('whipped'),300)
        clearInterval(whipId)

        const whipSnake = snakes.indexOf(whipIndex)
        
        whippedSnakes.push(whipSnake)
        console.log('pushed into a new array',whipSnake)
        score += 10
      }
      let newScore = score
      scoreSpan.innerHTML = ` ${newScore}`
      if (newScore === 360) {
        // alert("I am an alert box!");
        // level.classList.remove('hidden');
    }
    }
    if( e.key === 'z' ){
      whipId =setInterval(moveWhip, 100)
    }
  }
  document.addEventListener('keydown',attack)
 
// old attack functions
  // document.addEventListener('keydown', whip)
// let index
// const attack = setInterval(() => {
//     gridBoxes.map(box => {
//         if (box.classList.contains('whip')) {
//             index = gridBoxes.indexOf(box)
//             console.log(index)
//             if (box.classList.contains('snake')) {
//                 gridBoxes[index].classList.remove('whip')
//                 gridBoxes[index].classList.remove('snake')
//                 gridBoxes[index].classList.add('blankSq')
//                 setTimeout(() => gridBoxes[index].classList.remove('blankSq'), 300)
//                 clearInterval('whip')    
//                 // whippedSnakes = snakes.indexOf('index')
//                 // whippedSnakes.push(whippedSnakes)
//                 whippedSnakes.push(snakes.indexOf(index))
//                 }
//                 score += 10
//                 let newScore = score
//                 scoreSpan.innerHTML = ` ${newScore}`
//             } else if (index < 14) {
//                 gridBoxes[index].classList.remove('whip')
//             } else {
//             gridBoxes[index - 15].classList.add('whip')
//             gridBoxes[index].classList.remove('whip')
//             }
//         }
//         // let newScore = score
//         // scoreSpan.innerHTML = ` ${newScore}`
// )}, 100)


// function whip(e) {
//     // if ('keydown' === z) {
//     function moveWhip() {
//         let whipIndex = indyIndex
//         console.log(whipIndex)
//         gridBoxes[whipIndex].classList.remove('whip')
//         whipIndex -= 15
//         gridBoxes[whipIndex].classList.add('whip')
//     }
//     switch(e.key) {
//         case 'z':
//         setInterval(moveWhip, 50)
//     }
// } 

// function whip() {
//     let whipIndex = indyIndex;
//     function moveWhip() {
//         gridBoxes[whipIndex].classList.remove("whip")
//         whipIndex -= 15
//         if (whipIndex < 0) {
//             clearInterval(whipId)
//         }
//         gridBoxes[whipIndex].classList.add("whip")
//     }
//     let whipId = setInterval(moveWhip, 100);
//     }
//     document.addEventListener('keydown', whip(e) {
//         if (e.key === 32) {
//             whip()
//         }

// 

}

start.addEventListener("click", startGame)

