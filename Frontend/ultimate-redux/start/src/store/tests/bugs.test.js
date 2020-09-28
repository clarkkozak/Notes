import { addBug, bugAdded } from '../bugs'
import { apiCallBegan } from '../api'

describe('BugSlice', () => {
  describe('actionCreator', () => {
    test('addBug', () => {
      const bug = { description: 'a'}
      const res = addBug(bug)
      const expected = {
        type: apiCallBegan.type,
        payload: {
          url: '/bugs',
          method: 'post',
          data: bug,
          onSuccess: bugAdded.type
        }
      }
      expect(res).toEqual(expected)
    })
    
  })
  
})
