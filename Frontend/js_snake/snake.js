export const SNAKE_SPEED = 2
const snakeBody = [ 
  {x: 10, y: 11}, // the center of the board
  {x: 11, y: 11}, // the center of the board
  {x: 12, y: 11} // the center of the board
]

export function update() {
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }
  
  snakeBody[0].x += 0
  snakeBody[0].y += 1
}

export function render(gameBoard) {
  for (const segament of snakeBody) {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segament.y
    snakeElement.style.gridColumnStart = segament.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  }

}