import React from 'react'
import { shallow } from 'enzyme'
import App from './app'


describe('App', () => {
  const app = shallow(<App />)
  // console.log(app.debug())

  it('Renders Properly', () => {
    expect(app).toMatchSnapshot()
  })

  it('contains a connected `Wallet` component', () => {
  // `Wallet` doesn't exist because it's the connected HOC componet being rendered
   expect(app.find('Connect(Wallet)').exists()).toBe(true)
  })
})