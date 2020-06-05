const numbers = [1, 2, 3]

// adding
const addToStart = [4, ...numbers] // [4, 1, 2, 3]

const insertBefore2 = [
  ...numbers.slice(0, numbers.indexOf(2)),
  4,
  ...numbers.slice(numbers.indexOf(2))
] // [1, 4, 2, 3]

console.log({addToStart, insertBefore2})

// Removing
const removed2 = numbers.filter(n => n !== 2) // [1, 3

console.log({ removed2 })

// Updated
const update2with20 = numbers.map(n => (n === 2 ? 20 : n))

console.log({ update2with20 })