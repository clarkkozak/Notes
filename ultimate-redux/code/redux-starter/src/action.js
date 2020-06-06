import * as types from './types';

// export function bugAdded(description) {
//   return {
//     type: types.BUG_ADDED,
//     payload: {
//       description,
//     },
//   };
// };

// Now with an arrow func
export const bugAdded = (description) => {
  return {
    type: types.BUG_ADDED,
    payload: {
      description,
    },
  };
};

export const bugResolved = (id) => {
  return {
    type: types.BUG_RESOLVED,
    payload: {
      id,
    },
  };
};
