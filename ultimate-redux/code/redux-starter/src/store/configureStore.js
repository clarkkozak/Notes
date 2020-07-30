import { createStore } from 'redux';
import reducer from './bugs';
import { devToolsEnhancer } from 'redux-devtools-extension'

// createStore is a higher order function,
// it takes a function as an argument
export default function configureStore() {
  const store = createStore(
    reducer,
    devToolsEnhancer({ trace: true })
  );
  return store
}