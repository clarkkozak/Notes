// import store from './store';

// store.state = 1 // we are directly mutating the store. 
// console.log(store.state) // we don't want to be able to do this 

// import * as actions from './action';

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

// store.dispatch(actions.bugAdded('Description'));

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

// store.dispatch(actions.bugResolved(1));

// console.log({ store: store.getState() });


// Section 4 Lesson 4
// import store from './customStore'
// import * as actions from './action'
// store.dispatch(actions.bugAdded("Bug 1"))
// store.dispatch(actions.bugAdded("Bug 2"))
// console.log(store.getState()) 
/* Out put
[
  {
    "id": 1,
    "description": "Bug 1",
    "resolved": false
  }
]
*/

// Section 4 Lesson 5
// import store from './customStore'

// Section 5 Lesson 2
import store from './store'
import * as actions from './action'

store.subscribe(() => {
  console.log(' the store was updated')
})

store.dispatch(actions.bugAdded("Bug 1"))

console.log(store.getState())



