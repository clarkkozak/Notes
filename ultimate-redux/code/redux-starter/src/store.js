import { createStore } from 'redux';
import reducer from './reducer';
import { devToolsEnhancer } from 'redux-devtools-extension'

// createStore is a higher order function,
// it takes a function as an argument
const store = createStore(
  reducer,
   // @ts-ignore
   devToolsEnhancer({ trace: true })
  );


// console.log(store)

export default store;
