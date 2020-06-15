function createStore() {
  let state; // store internal state of the store. this cannot be modified and must stay private.

  // In OOP, this function is called a method
  // A GETTER method
  function getState() {
    return state
  }
  return {
    getState
  }
}

export default createStore();