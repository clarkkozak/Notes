import { SNAKE_SPEED, render as renderSnake, update as updateSnake  } from "./snake.js";
import { render as renderFood, update as updateFood} from "./food.js";
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

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
}

function render() {
  gameBoard.innerHTML = ''
  renderSnake(gameBoard)
  renderFood(gameBoard)
}
