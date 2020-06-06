import store from './store';
import * as actions from './action';

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
// const unsubscribe = store.subscribe(() => {
//   console.log('store changed!', store.getState());
// });

store.dispatch(actions.bugAdded('Description'));

// we will not get notified by the .subscribe.
// This allows us to interact with UI
// unsubscribe();

// store.dispatch(actions.bugAdded('Two'));

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

store.dispatch(actions.bugResolved(1));

console.log({ store: store.getState() });
