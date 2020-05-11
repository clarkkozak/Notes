import rootReducer from './index'

describe('', () => {
  it('intializes the default state', () => {
    expect(rootReducer({}, {})).toEqual({
      balance: 0,
      bitcoin: {}
    })
  })
})