const person = { name: 'John' }
Object.assign({}, person, { name: 'Bob', age: 30 })
console.log(person)

// using the spread operator `...` can be more concise
const updated = { ...person, name: 'Bob' }

// Both methods can have trouble with shallow copying
const person2 = {
  name: 'John',
  address: {
    country: 'USA',
    city: 'San Francisco'
  } 
}

const updated2 = { ...person2, name: 'Bob' }
updated2.address.city = 'New York'
console.log(person2) // output: {name: "John", address: { city: "New York", country: "USA"} }
// the address updates still, and we don't want that.
// The address object is the same object in memory. the `spread` operator takes a "shallow copy" of `person2`. It applies to `updated2` as well

const updated3 = {
  ...person2,
  address: {
    ...person.address,
    city: "New York"
  },
  name: "Bob"
}

// This starts to be verbose, which is why developers made libraries to simplify this.
