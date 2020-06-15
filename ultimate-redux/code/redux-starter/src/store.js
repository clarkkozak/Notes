import { createStore } from 'redux';
import reducer from './reducer';

// createStore is a higher order function,
// it takes a function as an argument
const store = createStore(reducer);


// console.log(store)

export default store;
