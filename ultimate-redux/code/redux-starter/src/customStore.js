// we add the reducer so we access it in dispatch
import reducer from './reducer'

function createStore(reducer) {
  let state; // store internal state of the store. this cannot be modified and must stay private.

  // In OOP, this function is called a method; A GETTER method
  function getState() {
    return state
  }

  // 
  function dispatch(action) {
    // Call the reducer to get the new state
    state = reducer(state, action)
  }
  
  return {
    getState,
    dispatch
  }
}

// Don't forget to include it here; so that it is called with the reducer
export default createStore(reducer);