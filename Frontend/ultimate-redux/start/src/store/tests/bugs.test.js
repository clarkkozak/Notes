import { addBug } from '../bugs'
import configureStore from '../configureStore'

describe('BugSlice', () => {
  describe('actionCreator', () => {
    test('handle addBug command', async () => {
      const store = configureStore()
      const bug = { description: 'a'}
      await store.dispatch(addBug(bug)) // addBug is an async operator
      expect(store.getState().entities.bugs.list).toHaveLength(1)
    })
    
  })
  
})
