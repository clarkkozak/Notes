// This structure mutates the book object
// let book = { title: "Harry Potter" }

// function publish(book) {
//   book.isPublished = true
// }

// publish(book)

// console.log(book)


import { Map } from 'immutable'

// We need to learn a whole new API
// if we want to work with the JS object, we need to use `.toJS()` on the Map data structure
let book = Map({ title: 'Harry Potter' }), 

function publish(book) {
  return book.set('isPublished', true)
}

publish(book)

console.log(book.toJS())