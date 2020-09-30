import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { addBug } from '../bugs'
import configureStore from '../configureStore'


describe('BugSlice', () => {
  // These variables will always be used
  let fakeAxios
  let store;

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios)
    store = configureStore()
  })

  const bugSlice = () => store.getState().entities.bugs

  describe('actionCreator', () => {
    test('add the bug to the store if it is saved to the server', async () => {
      const bug = { description: 'a'}
      const savedBug = { ...bug, id: 1}
      fakeAxios.onPost('/bugs').reply(200, savedBug)

      await store.dispatch(addBug(bug)) // addBug is an async operator

      expect(bugSlice().list).toContainEqual(savedBug)
    })

    test('does not add the bug to the store if it is not saved to the server', async () => {
      const bug = { description: 'a'}
      fakeAxios.onPost('/bugs').reply(500)

      await store.dispatch(addBug(bug)) // addBug is an async operator

      expect(bugSlice().list).toHaveLength(0)
    })
    
  })
  
})
