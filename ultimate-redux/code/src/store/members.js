import { createSelector, createSlice } from '@reduxjs/toolkit'


let id = 0

const memberSlice = createSlice({
  name: 'members',
  initialState: [],
  reducers: {
    memberAdded(state, action) {
      state.push({
        name: action.payload.name,
        bugs: []
      })
    },
    assignedBugToMember(state, action) {
      const { id, bug } = action.payload
      state[id].bugs.push(bug)
    }
  }
})

export const getBugsFromMember = (state, memberName) => {
  const membersBugsId = state.entities.members.filter(member => memberName === member.name)[0].bugs
  return membersBugsId.map(memberBugId => state.entities.bugs[memberBugId])
}

export const { memberAdded, assignedBugToMember } = memberSlice.actions
export default memberSlice.reducer