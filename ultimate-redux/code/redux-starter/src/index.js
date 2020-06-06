import store from './store';
import * as actions from './types';

// console.log(store);

/*
{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
dispatch: ƒ dispatch(action)
getState: ƒ getState()
replaceReducer: ƒ replaceReducer(nextReducer)
subscribe: ƒ subscribe(listener)
Symbol(observable): ƒ observable()
*/

// returns an unsubscribe function
const unsubscribe = store.subscribe(() => {
  console.log('store changed!', store.getState());
});

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'bug1',
  },
});

unsubscribe();
// we will not get notified by the .subscribe.
// This allows us to interact with UI

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: 'bug2',
  },
});

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());
