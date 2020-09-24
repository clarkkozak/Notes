import { createSlice } from '@reduxjs/toolkit'

let lastId = 0;

const projectSlice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    projectAdded: (state, action) => {
      state.push({
        name: action.payload.name,
        id: lastId++
      })
    },
    projectRemoved: (state, action) => {
      return state.filter((project) => project.id !== action.payload.id);
    }
  }
})

export const { projectAdded, projectRemoved } = projectSlice.actions
export default projectSlice.reducer