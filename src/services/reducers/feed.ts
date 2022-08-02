import {
    WS_FEED_CONNECTION_START,
    WS_FEED_CONNECTION_SUCCESS,
    WS_FEED_CONNECTION_ERROR,
    WS_FEED_GET_MESSAGE,
    WS_FEED_CONNECTION_CLOSED,
    WS_FEED_ADD_CURRENT_ITEM,
    GET_NUMBER_ORDER_REQUEST,
    GET_NUMBER_ORDER_SUCCESS,
    GET_NUMBER_ORDER_ERROR
} from "../constants/feed"
import { TfeedState } from "../types";
import { TWSOrdersFeedActions } from "../actions/feed";

export const initialState: TfeedState = {
    orders: [],
    total: 0,
    totalToday: 0,
    isOpen: false,
    error: null,
    orderRequest: false,
    orderFailed: false
};

export const feedReducer = (state = initialState, action: TWSOrdersFeedActions): TfeedState => {
    switch (action.type) {
        case WS_FEED_CONNECTION_START: {
            return {
                ...state,
            };
        }
        case WS_FEED_CONNECTION_SUCCESS: {
            return {
                ...state,
                isOpen: true,
                error: null,
            };
        }
        case WS_FEED_CONNECTION_ERROR: {
            return {
                ...state,
                error: action.payload,
            };
        }
        case WS_FEED_CONNECTION_CLOSED: {
            return {
                ...state,
                isOpen: false,
            };
        }
        case WS_FEED_GET_MESSAGE: {
            return {
                ...state,
                orders: action.payload.orders,
                total: action.payload.total,
                totalToday: action.payload.totalToday,
            };
        }
        case GET_NUMBER_ORDER_REQUEST: {
            return {
              ...state,
              orderRequest: true,
              orderFailed: false,
            };
          }
          case GET_NUMBER_ORDER_SUCCESS: {
            return {
              ...state,
              orders: action.payload.orders,
              total: 1,
              totalToday: 1,
              orderRequest: false,
            };
          }
          case GET_NUMBER_ORDER_ERROR: {
            return {
              ...state,
              orderFailed: true,
              orderRequest: false,
            };
          }
        default: {
            return state;
        }
    }
}