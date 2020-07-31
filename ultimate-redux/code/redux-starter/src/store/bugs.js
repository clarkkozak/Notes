import { createAction } from "@reduxjs/toolkit"

export const bugAdded = createAction('bugAdded')
export const bugRemoved = createAction('bugRemoved')
export const bugUpdated = createAction('bugUpdated')
export const bugResolved = createAction('bugResolved')

let lastId = 0;

// we can use switch and case too
export default function reducer(state = [], action) {
  switch (action.type) {
    case bugAdded.type:
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
    case bugRemoved.type:
      return state.filter((bug) => bug.id !== action.payload.id);
    case bugResolved.type:
      // my solution
      // const  newState = state.map((bug) => {
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