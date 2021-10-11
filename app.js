const grid = document.querySelector('.grid')

for (let i = 0; i < 225; i++) {
    const square = document.createElement('div')
    grid.appendChild(square)
}

const gridBoxes = Array.from(document.querySelectorAll('.grid div'))

const snakes = [
    2,3,4,5,6,7,8,9,10,11,12,13,
    31,32,33,34,35,36,37,38,39,40,41,42,
    62, 63,64,65,66,67,68,69,70,71,72,73
]

function place() {
    for (let i = 0; i < snakes.length; i++) {
        gridBoxes[snakes[i]].classList.add('snake')
    }
}
place()

gridBoxes[217].classList.add('indy')