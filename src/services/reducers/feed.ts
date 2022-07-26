import {
    WS_FEED_CONNECTION_START,
    WS_FEED_CONNECTION_SUCCESS,
    WS_FEED_CONNECTION_ERROR,
    WS_FEED_GET_MESSAGE,
    WS_FEED_CONNECTION_CLOSED,
    WS_FEED_ADD_CURRENT_ITEM
} from "../constants/feed"
import { TfeedState } from "../types";
import { TWSOrdersFeedActions } from "../actions/feed";

const initialState: TfeedState = {
    orders: [],
    total: 0,
    totalToday: 0,
    isOpen: false,
    error: null,
    modal: null
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
        case WS_FEED_ADD_CURRENT_ITEM: {
            return {
                ...state,
                modal: action.item,
            };
        }
        default: {
            return state;
        }
    }
}