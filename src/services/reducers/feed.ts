import {
    WS_FEED_CONNECTION_START,
    WS_FEED_CONNECTION_SUCCESS,
    WS_FEED_CONNECTION_ERROR,
    WS_FEED_GET_MESSAGE,
    WS_FEED_CONNECTION_CLOSED
} from "../constants/feed"

const initialState = {
    orders: [],
    total: 0,
    totalToday: 0,
    isOpen: false,
    error: null,
};

export const feedReducer = (state = initialState, action: any) => {
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
                orders: action.payload.data.orders,
                total: action.payload.data.total,
                totalToday: action.payload.data.totalToday,
            };
        }
        default: {
            return state;
        }
    }
}