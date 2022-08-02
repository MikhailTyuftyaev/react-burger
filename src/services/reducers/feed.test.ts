import {feedReducer as reducer, initialState} from './feed'
import * as types from '../constants/feed'
import {TWSOrdersFeedActions} from '../actions/feed'

const wsMessage = {
  "orders": [
    {
      '_id': '62e95a3b42d34a001c27ec71',
      'ingredients': [
        '60d3b41abdacab0026a733c6',
        '60d3b41abdacab0026a733cb',
        '60d3b41abdacab0026a733cf',
        '60d3b41abdacab0026a733c8',
        '60d3b41abdacab0026a733c9',
        '60d3b41abdacab0026a733cd',
        '60d3b41abdacab0026a733c6'
      ],
      'status': 'done',
      'name': 'Бессмертный space краторный био-марсианский антарианский люминесцентный бургер',
      'createdAt': '2022-08-02T17:09:15.357Z',
      'updatedAt': '2022-08-02T17:09:15.644Z',
      'number': '21985',
      'total': 400
    },
    {
      '_id': '62e9476042d34a001c27ec5e',
      'ingredients': [
        '60d3b41abdacab0026a733c7',
        '60d3b41abdacab0026a733cd'
      ],
      'status': 'done',
      'name': 'Space флюоресцентный бургер',
      'createdAt': '2022-08-02T15:48:48.986Z',
      'updatedAt': '2022-08-02T15:48:49.250Z',
      'number': '21984',
      'total': 400
    },
    {
      '_id': '62e944ea42d34a001c27ec5b',
      'ingredients': [
        '60d3b41abdacab0026a733c7',
        '60d3b41abdacab0026a733cd'
      ],
      'status': 'done',
      'name': 'Space флюоресцентный бургер',
      'createdAt': '2022-08-02T15:38:18.952Z',
      'updatedAt': '2022-08-02T15:38:19.248Z',
      'number': '21983',
      'total': 400
    },
  ],
  'total': 21898,
  'totalToday': 28
}


describe('Feed reducer', () => {
    it('should return the initial state', () => {
        expect(
          reducer(initialState, {} as TWSOrdersFeedActions)).toEqual(initialState)
    })
    it('should handle WS_FEED_CONNECTION_START', () => {
        expect(
          reducer(initialState, {
            type: types.WS_FEED_CONNECTION_START,
            payload: "www.google.com"
          }))
          .toEqual({
            ...initialState,
        })
    })
    it('should handle WS_FEED_CONNECTION_SUCCESS', () => {
        expect(
          reducer(initialState, {
            type: types.WS_FEED_CONNECTION_SUCCESS
          }))
          .toEqual({
            ...initialState,
            isOpen: true,
            error: null,
        })
    })
    it('should handle WS_FEED_CONNECTION_ERROR', () => {
        const event = new Event('error')
        expect(
          reducer(initialState, {
            type: types.WS_FEED_CONNECTION_ERROR,
            payload: event 
          }))
          .toEqual({
            ...initialState,
            error: event
        })
    })
    it('should handle WS_FEED_CONNECTION_CLOSED', () => {
      expect(
        reducer(initialState, {
          type: types.WS_FEED_CONNECTION_CLOSED
        }))
        .toEqual({
          ...initialState,
          isOpen: false,
      })
    })
    it('should handle WS_FEED_GET_MESSAGE', () => {
      expect(
        reducer(initialState, {
          type: types.WS_FEED_GET_MESSAGE,
          payload: wsMessage,
        }))
        .toEqual({
          ...initialState,
          orders: wsMessage.orders,
          total: wsMessage.total,
          totalToday: wsMessage.totalToday,
      })
    })
    it('should handle GET_NUMBER_ORDER_REQUEST', () => {
      expect(
        reducer(initialState, {
          type: types.GET_NUMBER_ORDER_REQUEST
        }))
        .toEqual({
          ...initialState,
          orderRequest: true,
          orderFailed: false,
      })
    })
    it('should handle GET_NUMBER_ORDER_SUCCESS', () => {
      expect(
        reducer(initialState, {
          type: types.GET_NUMBER_ORDER_SUCCESS,
          payload: wsMessage
        }))
        .toEqual({
          ...initialState,
          orders: wsMessage.orders,
          total: 1,
          totalToday: 1,
          orderRequest: false,
      })
    })
    it('should handle GET_NUMBER_ORDER_ERROR', () => {
      expect(
        reducer(initialState, {
          type: types.GET_NUMBER_ORDER_ERROR
        }))
        .toEqual({
          ...initialState,
          orderFailed: true,
          orderRequest: false,
      })
    })
})