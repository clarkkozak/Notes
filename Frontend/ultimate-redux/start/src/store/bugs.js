import { createSelector, createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api";

let lastId = 0;
const bugSlice = createSlice({
  name: 'bugs',
  initialState: {
    list: [],
    loading: false, // UI component,
    lastFetch: null, // used for caching
  },
  reducers: {
    // This function calls `createAction` and `createReducer`
    bugAdded: (state, action) => {
      state.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      })
    },
    bugsReceived: (state, action) => {
      state.list = action.payload
      state.loading = false
    },
    bugsRequested: (state) => {
      state.loading = true
    },
    bugsRequestFailed: (state) => {
      state.loading = false
    },
    bugResolved: (state, action) => {
      const index = state.list.findIndex(bug => bug.id ===action.payload.id)
      state[index].resolved = true
    },
    assignedBugToUser(state, action) {
      const { bugId, userId } = action.payload
      const index = state.list.findIndex(bug => bug.id === bugId)
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
  state => state.entities.bugs.list, // gives it the state,
  state => state.entities.projects, // we can give it more selectors. this way we can keep track of projects too
  (bugs, projects) => bugs.filter(bug => !bug.resolved) // result function
)

// This function returns a selector function
export const getBugsByUser = userId => createSelector(
  state => state.entities.bugs.list,
  bugs => bugs.filter(bug => bug.userId === userId)
)

// Action Creators
const url = '/bugs'
export const loadBugs = () => apiCallBegan({
  url,
  onStart: bugsRequested.type,
  onSuccess: bugsReceived.type, 
  onError: bugsRequestFailed.type,
});

export const { bugAdded, bugResolved, bugsReceived, bugsRequested, bugsRequestFailed, assignedBugToUser } = bugSlice.actions
export default bugSlice.reducer