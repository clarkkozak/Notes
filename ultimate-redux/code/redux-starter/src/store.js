import { createStore } from 'redux';
import reducer from './reducer';

// createStore is a higher order function,
// it takes a fucntion as an argument
const store = createStore(reducer);

export default store;
