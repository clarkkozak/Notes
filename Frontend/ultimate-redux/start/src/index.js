import configureStore from './store/configureStore'
import { addBug, assignBug, loadBugs, resolveBug } from './store/bugs'


const store = configureStore()

store.dispatch(loadBugs())

// setTimeout(() => { store.dispatch(resolveBug(2)) }, 1000)

setTimeout(() => { store.dispatch(assignBug(1, 2)) }, 1000)