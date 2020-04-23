import { max_number } from './index'

describe('max_nubmer', () => {
  describe('given an empty array', () => {
    it('returns 0', () => {
      expect(max_number([])).toEqual(0)
    })
  })

  describe('given an array of numbers', () => {
    expect(max_number([3, 2, 1])).toEqual(3)
  })
})
