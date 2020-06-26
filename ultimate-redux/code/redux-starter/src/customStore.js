// we add the reducer so we access it in dispatch
import reducer from './reducer'

function createStore(reducer) {
  let state; // store internal state of the store. this cannot be modified and must stay private.
  const listeners = []

  // In OOP, this function is called a method; A GETTER method
  function getState() {
    return state
  }

  // A function to allow for state to be change without directly mutating the store
  function dispatch(action) {
    // Call the reducer to get the new state
    state = reducer(state, action)

    // Call listeners after state gets changed
    listeners.forEach(listener => listener())
  }

  // A function that allows other components to be notified when the store gets updated
  function subscribe(listener) {
    // we don't call it right away; .subscribe can have multiple elements that it's working on
     listeners.push(listener)
     
  }


  
  return {
    getState,
    dispatch,
    subscribe
  }
}

// Don't forget to include reducer here; so that it is called with the reducer
export default createStore(reducer);