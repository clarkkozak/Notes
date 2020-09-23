import configureStore from './store/configureStore'

const store = configureStore()

// store.dispatch() // must dispatch a plain object
store.dispatch((dispatch, getState) => {
  dispatch({ type: 'bugsReceived', bugs: [1, 2, 3]})
}) // cannot dispatch functions

