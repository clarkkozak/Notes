import React from 'react'
import { shallow } from 'enzyme'
import { Wallet } from './wallet'

describe('Wallet', () => {
  const props = { balance: 20 } 
  const wallet = shallow(<Wallet {...props} />)
  it('Renders Properly', () => {
    expect(wallet).toMatchSnapshot()
  })

  it('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual('Wallet balance: 20')
  })

  it('creates an input to deposit or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true)
  })

  describe('when a user types into the wallet input', () => {
    const userBalance = '25'

    beforeEach(() => {
      wallet.find('.input-wallet').simulate('change', { target: { value: userBalance }})
    })

    it('updates the local wallet balance in `state` and coverts it to a number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
    })

  })
  

})