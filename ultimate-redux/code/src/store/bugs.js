import { createAction, createReducer, createSlice } from "@reduxjs/toolkit"

let lastId = 0;
const bugSlice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    // This function calls `createAction` and `createReducer`
    bugAdded: (state, action) => {
      state.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      })
    },
    bugResolved: (state, action) => {
      const index = state.findIndex(bug => bug.id ===action.payload.id)
      state[index].resolved = true
    }
  }
})

console.log(bugSlice)

export const { bugAdded, bugResolved } = bugSlice.actions
export default bugSlice.reducer


// export const bugAdded = createAction('bugAdded')
// export const bugRemoved = createAction('bugRemoved')
// export const bugUpdated = createAction('bugUpdated')
// export const bugResolved = createAction('bugResolved')


// export default createReducer([], {
//   // key : value
//   // actions: function(event => event handler)
//   [bugAdded.type]: (state, action) => {
//     state.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     })
//   },
//   [bugResolved.type]: (state, action) => {
//     const index = state.findIndex(bug => bug.id ===action.payload.id)
//     state[index].resolved = true
//   }
// })