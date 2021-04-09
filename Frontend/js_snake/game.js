import { SNAKE_SPEED, render as renderSnake, update as updateSnake  } from "./snake.js";
let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  
  
  console.log('render')
  lastRenderTime = currentTime
  
  update()  
  render()
}

function update() {
  updateSnake()
}

function render() {
  renderSnake(gameBoard)
}

window.requestAnimationFrame(main)