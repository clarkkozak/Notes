import { createSelector, createSlice } from "@reduxjs/toolkit"

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
    },
    assignedBugToUser(state, action) {
      const { bugId, userId } = action.payload
      const index = state.findIndex(bug => bug.id === bugId)
      state[index].userId = userId
    }
  }
})


// Selector
// export const getUnResolvedBugs = state => 
//   state.entities.bugs.filter(bug => !bug.resolved);


// Memoization
// get unresolved bugs from cache
export const getUnResolvedBugs = createSelector(
  state => state.entities.bugs, // gives it the state,
  state => state.entities.projects, // we can give it more selectors. this way we can keep track of projects too
  (bugs, projects) => bugs.filter(bug => !bug.resolved) // result function
)

// This function returns a selector function
export const getBugsByUser = userId => createSelector(
  state => state.entities.bugs,
  bugs => bugs.filter(bug => bug.userId === userId)
)

export const { bugAdded, bugResolved, assignedBugToUser } = bugSlice.actions
export default bugSlice.reducer