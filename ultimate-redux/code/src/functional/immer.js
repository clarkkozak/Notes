// This structure mutates the book object
// let book = { title: "Harry Potter" }

// function publish(book) {
//   book.isPublished = true
// }

// publish(book)

// console.log(book)

import { produce } from 'immer'

let book = { title: "Harry Potter" }

function publish(book) {
  // the draftBook is a copy of our intial state, `book`, and then modifies it
  // not using the spread object, we don't need to worry about `shallow copies`
  produce(book, draftBook => {
    draftBook.isPublished = true
  })
}

let updated = publish(book)

console.log({updated, book})
