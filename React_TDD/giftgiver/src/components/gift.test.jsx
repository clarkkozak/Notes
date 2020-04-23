import React from 'react'
import { shallow } from 'enzyme'
import Gift from './gift'


describe('Gift', () => {
  const gift = shallow(<Gift />)
  
  it('Renders Properly', () => {
    expect(gift).toMatchSnapshot()
  })

  it('intializes a person and a present in `state`', () => {
    expect(gift.state()).toEqual({ person: '', present: ''})
  })

  describe('when typing into the person input', () => {
    const person = 'Uncle'
    
    beforeEach(() => {
      // learn .simulate('change)
      gift.find('.input-person').simulate('change', { target: { value: person }})
    })

    it('updates the person in `state`', () => {
      expect(gift.state().person).toEqual(person)
    })
  })
})