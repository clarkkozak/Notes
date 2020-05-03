import balanceReducer from './balance'
import balanceReducer2 from './balance' 
import * as constants from '../actions/constants'
import { withdraw } from '../actions/balance';

describe('balanceReducer', () => {

  const balance = 10;
  describe('when intializing', () => {
    it('sets balance', () => {
    
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance }))
        .toEqual(balance)
    })
  
    describe('then re-intializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance)
      })
    })
  })

  it('deposits into the balance', () =>{
    const deposit = 10 
    const initalState =  5

    expect(balanceReducer(initalState, { type: constants.DEPOSIT, deposit }))
      .toEqual(initalState + deposit)
  })

  it('withdraws from the balance', () => {
    const withdarw = 1
    const initalState = 5

    expect(balanceReducer(initalState, { type: constants.WITHDRAW, withdarw }))
      .toEqual(initalState - withdraw)
  })

})