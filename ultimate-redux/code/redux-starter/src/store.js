import { createStore } from 'redux';
import reducer from './reducer';

// createStore is a higher order function,
// it takes a function as an argument
const store = createStore(
  reducer,
   // @ts-ignore
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );


// console.log(store)

export default store;
