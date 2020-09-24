import axios from 'axios'
import * as actions from '../api'

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
  if (action.type !== actions.apiCallBegan.type) {
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

      // General
      dispatch(actions.apiCallSuccess(res.data))
      // Specific 
      if (onSuccess) dispatch({ type: onSuccess, payload: res.data})
    } catch (err) {
      // General
      dispatch(actions.apiCallFailed(err))
      // Specific
     if (onError) dispatch({ type: onError, payload: err})
    }
      
  }
}

export default api