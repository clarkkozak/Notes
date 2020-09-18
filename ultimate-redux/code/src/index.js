import configureStore from './store/configureStore'
import { bugAdded, bugResolved, getUnResolvedBugs } from './store/bugs'
import * as projectActions from './store/projects'
import { memberAdded, assignedBugToMember, getBugsFromMember } from './store/members'

const store = configureStore()

store.subscribe(() => {
  console.log('the store was updated')
})

store.dispatch(projectActions.projectAdded({ name: "project 1"}))
store.dispatch(projectActions.projectAdded({ name: "project 2"}))
store.dispatch(projectActions.projectRemoved({id: 0}))
store.dispatch(bugAdded({ description: "bug 1"}))
store.dispatch(bugAdded({ description: "bug 2"}))
store.dispatch(bugAdded({ description: "bug 3"}))
store.dispatch(bugResolved({id: 1}))
store.dispatch(memberAdded({ name: 'clarkkozak'}))
store.dispatch(memberAdded({ name: 'juxley'}))
store.dispatch(assignedBugToMember({ id: 0, bug: 0 }))
store.dispatch(assignedBugToMember({ id: 0, bug: 1 }))
store.dispatch(assignedBugToMember({ id: 1, bug: 2 }))

const bugsFromClark = getBugsFromMember(store.getState(), 'clarkkozak')
console.log(bugsFromClark)

const x = getUnResolvedBugs(store.getState())
const y = getUnResolvedBugs(store.getState())
console.log(x === y)

// console.log(store.getState())
