// 3 parameters
// Action = what was dispatched
// Next = reference to next middleware function
// store = not actually the store. Object the looks like the store
const logger = param => store => next => action => {
  // console.log("param:", param)
  // console.log("store:", store) //
  // store: 
  // {
  //   dispatch: function dispatch()​
  //   getState: function f()​
    
  //  }
  // console.log("next:", next)
  // We don't have other middleware, so it's the 

  console.log("action:", action)
  // {
  // "type": "users/userAdded",
  // "payload": {
  //   "name": "clarkkozak"
  // }

  return next(action) // If we don't call this WITH the action, it won't go into our reducer or next middleware
}

export default logger

// Currying
// N => 1 each function should have a single parameter

// Why curry this function?