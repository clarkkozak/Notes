import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { addBug, getUnResolvedBugs, resolveBug, loadBugs  } from '../bugs'
import configureStore from '../configureStore'


describe('BugSlice', () => {
  // These variables will always be used
  let fakeAxios
  let store;
  const url = '/bugs'

  beforeEach(() => {
    fakeAxios = new MockAdapter(axios)
    store = configureStore()
  })

  // We use functions to create a new object in memory 
  // This way we do not pollute other test 
  const bugSlice = () => store.getState().entities.bugs
  const createBugList = () => ({
    entities: {
      bugs: {
        list: []
      }
    }
  })

  describe('actionCreator', () => {
    describe('addBug', () => {
      test('add the bug to the store if it is saved to the server', async () => {
        const bug = { description: 'a'}
        const savedBug = { ...bug, id: 1}
        fakeAxios.onPost(url).reply(200, savedBug)
        
        await store.dispatch(addBug(bug)) // addBug is an async operator
        
        expect(bugSlice().list).toContainEqual(savedBug)
      })
      
      test('does not add the bug to the store if it is not saved to the server', async () => {
        const bug = { description: 'a'}
        fakeAxios.onPost(url).reply(500)
        
        await store.dispatch(addBug(bug)) // addBug is an async operator
        
        expect(bugSlice().list).toHaveLength(0)
      })
    })

    describe('loadBugs', () => {
      test.todo('get bugs from server and save them to the store')
      
      test.todo('no 2nd api call if call is made within 10 minutes')

      test.todo('does not update the store if the api call fails')
      
    })
    
    describe('resolveBug', () => {
      test('updates the bug in the store if it is updated on the server', async () => {
        /// Arrange
        fakeAxios.onPost(`/bugs`).reply(200, { id: 1 })
        fakeAxios.onPatch(`/bugs/1`).reply(200, { id: 1, resolved: true })
        
        // Act
        await store.dispatch(addBug({ /* nothing */}))
        await store.dispatch(resolveBug(1))

        // Assert
        expect(bugSlice().list[0].resolved).toBe(true)
      })

      test.todo('does not update the bug in the store if it is not updated on the server')
      
    })
  })

      describe('Selectors', () => {
      
      describe('getUnResovledBugs', () => {
        test('gets undefined bugs from the store', () => {
          // Assign
          const mockStore = createBugList()
          mockStore.entities.bugs.list = [
            { resolved: true },
            { resolved: false },
            { resolved: false },
          ]
        
        // Act
        const unResolvedBug = getUnResolvedBugs(mockStore)
        
        // Assert
        expect(unResolvedBug).toHaveLength(2)
        
      })
    })
  })
  
})
