export const SNAKE_SPEED = 2
const snakeBody = [ 
  {x: 11, y: 11} // the center of the board
]

export function update() {
 console.log('update') 
}

export function render(gameBoard) {
  for (const segament of snakeBody) {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segament.x
    snakeElement.style.gridColumnStart = segament.y
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  }

}