import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducers'

// createStore is a higher order function,
export default function () {
// it takes a function as an argument
  return configureStore({
    reducer
  })
}