import configureStore from './store/configureStore'
import { bugAdded, bugResolved, getBugsByUser, assignedBugToUser } from './store/bugs'
import * as projectActions from './store/projects'
import { userAdded } from './store/users'

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
store.dispatch(userAdded({ name: 'clarkkozak'}))
store.dispatch(userAdded({ name: 'juxley'}))
store.dispatch(assignedBugToUser({ userId: 1, bugId: 1 }))
store.dispatch(assignedBugToUser({ userId: 1, bugId: 2 }))
store.dispatch(assignedBugToUser({ userId: 2, bugId: 3 }))

const bugsFromFirstUser = getBugsByUser(1)(store.getState())

console.log(bugsFromFirstUser)

// console.log(store.getState())
