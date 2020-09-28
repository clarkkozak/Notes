// @ts-nocheck
import { createSelector, createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"
import axios from 'axios'
import moment from 'moment'

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
      state.list.push(action.payload)
    },
    bugsReceived: (state, action) => {
      state.list = action.payload
      state.loading = false
      state.lastFetch = Date.now() // timestamp is serializable 
    },
    bugsRequested: (state) => {
      state.loading = true
    },
    bugsRequestFailed: (state) => {
      state.loading = false
    },
    bugResolved: (state, action) => {
      const index = state.list.findIndex(bug => bug.id === action.payload.id)
      state.list[index].resolved = true
    },
    assignedBugToUser(state, action) {
      const { id: bugId, userId } = action.payload
      const index = state.list.findIndex(bug => bug.id === bugId)
      state.list[index].userId = userId
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

const { bugAdded, bugResolved, bugsReceived, bugsRequested, bugsRequestFailed, assignedBugToUser } = bugSlice.actions

// Action Creators

const url = '/bugs' // this should be in a config file

export const loadBugs = () => (dispatch, getState) => {
  const { lastFetch } = getState().entities.bugs

  const diffInMinutes = moment().diff(moment(lastFetch), 'minutes')
  console
  if (diffInMinutes < 10) return; // Store the number value in a config file

  dispatch(apiCallBegan({
    url,
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type, 
    onError: bugsRequestFailed.type,
  }))
      
}

export const addBug = bug => apiCallBegan({
  url, 
  method: 'post',
  data: bug,
  onSuccess: bugAdded.type,
})

// Another implementation that passes the test
// export const addBug = bug => async dispatch => {
//   try {
//     const res = await axios.request({
//       baseURL: 'http://localhost:9001/api',
//       url: '/bugs',
//       data: bug,
//       method: 'post',
//     })
//     dispatch(bugAdded(res.data))
//   } catch (err) {
//     dispatch({ type: 'error'})
//   }
// }

// Another implantation of addBug
// Behavior works, although test failed.
// export const addBug = bug => {
//   try {
//     const res = await axios.post(url, bug)
//     dispatch(bugAdded(bug))
//   } catch (err) {
//     dispatch({ type: 'error'})
//   }
// }

export const resolveBug = bugId => apiCallBegan({
  url: `${url}/${bugId}`, 
  method: 'patch',
  data: {
    resolved: true
  },
  onSuccess: bugResolved.type,
})

export const assignBug = (bugId, userId) => apiCallBegan({
  url: `${url}/${bugId}`, 
  method: 'patch',
  data: {
    userId
  },
  onSuccess: assignedBugToUser.type,
})

export default bugSlice.reducer