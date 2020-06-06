// we assumed it was an []

let lastId = 0;

// // state = [] will be our intial state
// function reducer(state = [], action) {
//   if (action.type === 'bugAdded') {
//     return [
//       ...state, // use immutablity library later
//       {
//         // In reducers, have the payload to have the
//         // minimum amount of data
//         // We can implement buisness logic in the reducer
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
    case 'bugAdded':
      return [
        ...state, // use immutablity library later
        {
          // In reducers, have the payload to have the
          // minimum amount of data
          // We can implement buisness logic in the reducer
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];
    case 'bugRemoved':
      return state.filter((bug) => bug.id !== action.payload.id);
    default:
      return state;
  }
}
