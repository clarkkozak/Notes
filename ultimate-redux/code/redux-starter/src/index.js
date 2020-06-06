import store from './store';

// console.log(store);

/*
{dispatch: ƒ, subscribe: ƒ, getState: ƒ, replaceReducer: ƒ, Symbol(observable): ƒ}
dispatch: ƒ dispatch(action)
getState: ƒ getState()
replaceReducer: ƒ replaceReducer(nextReducer)
subscribe: ƒ subscribe(listener)
Symbol(observable): ƒ observable()
*/

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'bug1',
  },
});

store.dispatch({
  type: 'bugAdded',
  payload: {
    description: 'bug2',
  },
});

store.dispatch({
  type: 'bugRemoved',
  payload: {
    id: 1,
  },
});

console.log(store.getState());
