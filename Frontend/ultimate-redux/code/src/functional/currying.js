// Take a function that has n arguments, and making it have only one argument

function add(a , b) {
  return a + b
}

// add(5, 3)
// arguments separated by commas

function add(a) {
  return function(b) {
    return a + b
  }
}
// add(5)(5)
// arguments separated by parenthesis

// parameters separated by =>
const add2 = a => b => a + b 

// add2(5)(5)
//arguments separated by parenthesis