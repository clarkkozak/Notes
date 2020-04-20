import React from 'react'
import { shallow } from 'enzyme'
import App from './app'

const app = shallow(<App />)

it('App renders properly', () => {
  expect(app).toMatchSnapshot()
})

it('Initalizing `state` with an empty list of `gifts`', () => {
  // We can access state using enzyme .state() function
  expect(app.state().gifts).toEqual([])
})

it('adds a new gift to `state` when clicking the `add gift` button', () => {
  // we can search to make sure certain nodes exist by using .find()
  // we can simulate user event by using .simulate()
  app.find('.btn-add').simulate('click')

  expect(app.state().gifts).toEqual([{ id: 1 }])

})

it('adds a new gift to the render list when clicking the `add gift` button', () => {
  app.find('.btn-add').simulate('click')

  // Test polution!!!
  expect(app.find('.gift-list').children().length).toEqual(2)
})