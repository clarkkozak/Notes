import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 8

const snakeBody = [ 
  {x: 11, y: 11}, // the center of the board
]

export function update() {
  const inputDireciton = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }
  
  snakeBody[0].x += inputDireciton.x
  snakeBody[0].y += inputDireciton.y
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