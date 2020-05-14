import React from 'react'
import { shallow } from 'enzyme'
import Gift from './gift'


describe('Gift', () => {
  const id = 1  
  const mockRemove = jest.fn()

  const props = {
    gift: { id },
    removeGift: mockRemove
  
  }
  const gift = shallow(<Gift {...props} />)
  
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

  describe('when typing into the gift input', () => {
    const present = 'Cake'

    beforeEach(() => {
      gift.find('.input-present').simulate('change', { target: { value: present } })
    })

    it('updates the gift in `state`', () => {
      expect(gift.state().present).toEqual(present)
    })
  })

  describe('when clicking the `remove gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click')
    })

    it('calls the `removeGift` callback', () => {
      expect(mockRemove).toHaveBeenCalledWith(id)
    })
  })
})