import reducer from './reducer'

export default class MyStore {
  constructor() {
    this.state = []
  }

  getState() {
    return this.state
  }


  dispatch({ type = '', payload = ''} = {}) {
    if (type === '') return 'Need type'

    const newState = reducer(this.state, { type, payload })

    this.state = newState
  }

  subscribe(callback) {
    callback()
  }
  
}