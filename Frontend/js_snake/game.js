import { SNAKE_SPEED, render as renderSnake, update as updateSnake, snakeIntersection, getSnakeHead  } from "./snake.js";
import { render as renderFood, update as updateFood} from "./food.js";
import { outsideGrid } from "./grid.js";
let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')
let gameOver = false


function main(currentTime) {
  if (gameOver) {
    if(confirm('You lost! Press okay to Play Again!')) {
      window.location = '/' 
    }
    return;
  }
  
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
  checkDeath()
}

function render() {
  gameBoard.innerHTML = ''
  renderSnake(gameBoard)
  renderFood(gameBoard)
}


function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}