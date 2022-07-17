import {
    WS_FEED_CONNECTION_START,
    WS_FEED_CONNECTION_SUCCESS,
    WS_FEED_CONNECTION_ERROR,
    WS_FEED_GET_MESSAGE,
    WS_FEED_CONNECTION_CLOSED
} from "../constants/feed"

export interface IWsFeedConnectionStartAction {
    readonly type: typeof WS_FEED_CONNECTION_START,
    payload: string;
}

export interface IWsFeedConnectionSuccessAction {
    readonly type: typeof WS_FEED_CONNECTION_SUCCESS;
}

export interface IWsFeedConnectionErrorAction {
    readonly type: typeof WS_FEED_CONNECTION_ERROR;
}

export interface IWsFeedGetMessageAction {
    readonly type: typeof WS_FEED_GET_MESSAGE;
}

export interface IWsFeedConnectionClosedAction {
    readonly type: typeof WS_FEED_CONNECTION_CLOSED;
}

export const wsFeedConnectionStartAction = (payload: string):IWsFeedConnectionStartAction => ({
    type: WS_FEED_CONNECTION_START,
    payload
});

export const wsFeedConnectionSuccessAction = ():IWsFeedConnectionSuccessAction => ({
    type: WS_FEED_CONNECTION_SUCCESS
});

export const wsFeedConnectionErrorAction = ():IWsFeedConnectionErrorAction => ({
    type: WS_FEED_CONNECTION_ERROR
});

export const wsFeedGetMessageAction = ():IWsFeedGetMessageAction => ({
    type: WS_FEED_GET_MESSAGE
});

export const wsFeedConnectionClosedAction = ():IWsFeedConnectionClosedAction => ({
    type: WS_FEED_CONNECTION_CLOSED
});

export type TWSOrdersFeedActions =
| IWsFeedConnectionStartAction
| IWsFeedConnectionSuccessAction
| IWsFeedConnectionErrorAction
| IWsFeedGetMessageAction
| IWsFeedConnectionClosedAction;


export type TwsFeedActions = {
    wsInit: typeof  WS_FEED_CONNECTION_START,
    wsClose: typeof  WS_FEED_CONNECTION_CLOSED,
    onOpen: typeof  WS_FEED_CONNECTION_SUCCESS,
    onError: typeof  WS_FEED_CONNECTION_ERROR,
    onMessage: typeof  WS_FEED_GET_MESSAGE
}

export const wsFeedActions: TwsFeedActions = {
    wsInit:  WS_FEED_CONNECTION_START,
    wsClose:  WS_FEED_CONNECTION_CLOSED,
    onOpen:  WS_FEED_CONNECTION_SUCCESS,
    onError:  WS_FEED_CONNECTION_ERROR,
    onMessage:  WS_FEED_GET_MESSAGE
}