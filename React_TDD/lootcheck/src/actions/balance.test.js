import * as constants from './constants'
import * as actions from './balance'

it('creates an action to set the balance', () => {
  const balance = 0

  const expectedAction = { type: constants.SET_BALANCE,  balance}

  expect(actions.setBalance(balance)).toEqual(expectedAction)
})

it('creates an action to despoit into the balance', () => {
  const deposit = 10

  const expectedAction = { type: constants.DEPOSIT, deposit } 

  expect(actions.deposit(deposit)).toEqual(expectedAction)
})

it('creates an action to withdraw from the balance', () => {
  const withdraw = 5

  const expectAction = { type: constants.WITHDRAW, withdraw }

  expect(actions.withdraw(withdraw)).toEqual(expectAction)
})