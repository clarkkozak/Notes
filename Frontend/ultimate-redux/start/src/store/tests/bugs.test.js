import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { addBug } from '../bugs'
import configureStore from '../configureStore'


describe('BugSlice', () => {
  describe('actionCreator', () => {
    test('handle addBug command', async () => {
      const store = configureStore()
      const bug = { description: 'a'}
      const savedBug = { ...bug, id: 1}
      
      const fakeAxios = new MockAdapter(axios)
      fakeAxios.onPost('/bugs').reply(200, savedBug)

      await store.dispatch(addBug(bug)) // addBug is an async operator
      expect(store.getState().entities.bugs.list).toContainEqual(savedBug)
    })
    
  })
  
})
