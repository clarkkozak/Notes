import { createAction, createReducer } from "@reduxjs/toolkit"

export const bugAdded = createAction('bugAdded')
export const bugRemoved = createAction('bugRemoved')
export const bugUpdated = createAction('bugUpdated')
export const bugResolved = createAction('bugResolved')

let lastId = 0;

export default createReducer([], {
  // key : value
  // actions: function(event => event handler)
  [bugAdded.type]: (state, action) => {
    state.push({
      id: ++lastId,
      description: action.payload.description,
      resolved: false,
    })
  },
  [bugResolved.type]: (state, action) => {
    const index = state.findIndex(bug => bug.id ===action.payload.id)
    state[index].resolved = true
  }
})