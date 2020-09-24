import axios from 'axios'
/*
const action = {
  type: 'apiCallBegan',
  payload: {
    url: '/api',
    method: 'GET',
    data: '',
    // what action should be dispatched if this is successful
    onSuccess: 'apiReceived',  // String -> Serializable. a func is not
    // what action should be dispatched if this is error
    onError: 'apiRequestFailed' // String -> Serializable. a func is not
  }
}
*/

const api = ({ dispatch }) => next => async action => {
  if (action.type !== 'apiCallBegan') {
    return next(action)
  } else {
    const { url, method, data, onSuccess, onError } = action.payload

    next(action) // If this is not called, then the initial action, `apiCallBegan`, will be swallowed

    try {
      const res = await axios.request({
        baseURL: 'http://localhost:9001/api', // use an environment variable here 
        url,
        method,
        data
      })

      dispatch({ type: onSuccess, payload: res.data})
    } catch (err) {
      dispatch({ type: onError, payload: err})
    }
      
  }
}

export default api