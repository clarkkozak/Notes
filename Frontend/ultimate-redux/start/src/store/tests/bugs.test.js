import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { addBug, getUnResolvedBugs, resolveBug, loadBugs  } from '../bugs'
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
    describe('addBug', () => {
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

    describe('loadBugs', () => {
      test('get bugs from server and save them to the store')
      
      test('no 2nd api call if call is made within 10 minutes')

      test('does not update the store if the api call fails')
      
    })
    
    describe('resolveBug', () => {
      test('updates the bug in the store if it is updated on the server')

      test('does not update the bug in the store if it is not updated on the server')
      
    })

    describe('getUnResovledBugs', () => {
      test('gets undefined bugs from the store')
    })
    
    
      

    
  })
  
})
