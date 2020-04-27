import React from 'react'
import { shallow } from 'enzyme'
import App from './app'


describe('App', () => {
  const app = shallow(<App />)
  
  it('Renders Properly', () => {
    expect(app).toMatchSnapshot()
  })
})