import React from 'react'
import { mount } from 'enzyme'
import { Loot } from './loot'

describe('Loot', () => {
  const mockFetchBitcoin = jest.fn()
  let props = {
    balance: 10,
    bitcoin: { bpi: { USD: { rate: '1,000' } } },
    fetchBitcoin: mockFetchBitcoin
  }

  const loot = mount(<Loot {...props} />)

  it('Renders Properly', () => {
    expect(loot).toMatchSnapshot()
  })

  describe('when mounted', () => {

    it('dispatches the `fetchBitcoin() method it receives from props', () => {
      expect(mockFetchBitcoin).toHaveBeenCalled()
    })
  })

  // describe('when there are valid bitcoin props', () => {
  //   it('displays the correct bitcoin value', () => {
  //     expect(loot.find('h3').text()).toEqual('Bitcoin Balance: 0.01')
  //   })
  // })
  
  
})