import { getInputDirection } from "./input.js"

export const SNAKE_SPEED = 8

const snakeBody = [ 
  {x: 11, y: 11}, // the center of the board
]

let newSegments = 0;

export function update() {
  addSegments()
  const inputDireciton = getInputDirection()
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }
  
  snakeBody[0].x += inputDireciton.x
  snakeBody[0].y += inputDireciton.y
}

export function render(gameBoard) {
  for (const segment of snakeBody) {
    const snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake')
    gameBoard.appendChild(snakeElement)
  }
}

export function expandSnake(amount) {
  newSegments += amount
}

export function onSnake(position) {
  return snakeBody.some(segment => { // Array.some: if any are true, return true 
    return equalPositions(segment, position)
  })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments() {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) // duplicate the last position
  }

  newSegments = 0;
}