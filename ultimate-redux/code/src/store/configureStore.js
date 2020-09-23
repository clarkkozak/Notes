import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducers'
import logger from './middleware/logger'
// import func from './middleware/func'

// createStore is a higher order function,
export default function () {
// it takes a function as an argument
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger('console'),
      // func
    ]
  })
}