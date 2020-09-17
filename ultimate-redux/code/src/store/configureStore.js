import { configureStore } from '@reduxjs/toolkit';
import reducer from './bugs';

// createStore is a higher order function,
// it takes a function as an argument
export default function () {
  return configureStore({
    reducer
  })
}