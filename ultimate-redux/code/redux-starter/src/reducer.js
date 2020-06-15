// we assumed it was an []
import * as actions from './types';
let lastId = 0;

// // state = [] will be our initial state
// function reducer(state = [], action) {
//   if (action.type === 'bugAdded') {
//     return [
//       ...state, // use immutability library later
//       {
//         // In reducers, have the payload to have the
//         // minimum amount of data
//         // We can implement business logic in the reducer
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: false,
//       },
//     ];
//   } else if (action.type === 'bugRemoved') {
//     return state.filter((bug) => bug.id !== action.payload.id);
//   }

//   // If action doesn't exist, return state.
//   return state
// }

// we can use switch and case too
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state, // use immutability library later
        {
          // In reducers, have the payload to have the
          // minimum amount of data
          // We can implement business logic in the reducer
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);
    case actions.BUG_RESOLVED:
      // my solution
      // const newState = state.map((bug) => {
      //   if (bug.id === action.payload.id) {
      //     return {
      //       ...bug,
      //       resolved: true,
      //     };
      //   } else {
      //     return bug;
      //   }
      // });

      // return [...newState];

      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );
    default:
      return state;
  }
}
