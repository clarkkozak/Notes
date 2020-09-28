import { isEven } from './math'

describe('isEven', () => {
  
  it('returns true if given an even number', () => { 
  // System under test or function under test (SUT)
  const res = isEven(2)
  expect(res) // assertion
    .toBe(true) // a matcher
  })

  it('returns false if given an old number', () => { 
    // System under test or function under test (SUT)
    const res = isEven(1)
    expect(res).toBe(false) // a matcher
  })

})

