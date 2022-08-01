import {getModalItemsReducer as reducer, initialState} from './modal'
import * as types from '../constants/modal'
import {TModalAction} from '../actions/modal'

describe('Modal reducer', () => {
    it('should return the initial state', () => {
        expect(
          reducer(initialState, {} as TModalAction)).toEqual(initialState)
    })
    it('should handle OPEN_MODAL', () => {
        expect(
          reducer(initialState, 
          {
            type: types.OPEN_MODAL,
          }))
          .toEqual({
            ...initialState,
            orderModal: true
        })
    })
})