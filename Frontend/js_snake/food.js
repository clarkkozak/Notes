import { onSnake, expandSnake } from "./snake.js"
let food = { x: 10, y: 1} // Zero is technically outside the grid
const EXPANSION_RATE = 1

export function update() {
  if (onSnake(food)) {
    console.log('tes')
    expandSnake(EXPANSION_RATE) 
    food = { x: 20, y: 10} // this will be random
  }

}

export function render(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}