import React from 'react'
import { shallow } from 'enzyme'
import App from 'app'

const app = shallow(<App />)

  it('App renders properly', () => {
    expect(app).toMatchSnapshot()
  })
