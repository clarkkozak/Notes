import React from 'react'
import { shallow } from 'enzyme'
import App from './app'

describe('App', () => {
  const app = shallow(<App />)

  it('renders properly', () => {
    expect(app).toMatchSnapshot()
  })
  
  it('Initalizing `state` with an empty list of `gifts`', () => {
    // We can access state using enzyme .state() function
    expect(app.state().gifts).toEqual([])
  })
  
  describe('when clicking the `add gift` button', () => {
    const id = 1 

    // Before each do this
    beforeEach(() => {
      app.find('.btn-add').simulate('click')
    })

    // After each test do this
    // Doing this prevents test polution
    afterEach(() => {
      app.setState({ gifts: [] })
    })

    it('adds a new gift to `state`', () => {
     expect(app.state().gifts).toEqual([{ id }])
    })

    it('adds a new gift to the render list', () => {    
      expect(app.find('.gift-list').children().length).toEqual(1)
    })

    it('creates a Gift component', () => {
      expect(app.find('Gift').exists()).toBe(true)
    })
    describe('and the user wants to remove the added gift', () => {
      
      beforeEach(() => {
        // .instance exposes functions on the component
        app.instance().removeGift(id)
      })

      it('removes the gift from `state`', () => {
        expect(app.state().gifts).toEqual([])
      })
    })

  })
})