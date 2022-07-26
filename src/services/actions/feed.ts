import {
    WS_FEED_CONNECTION_START,
    WS_FEED_CONNECTION_SUCCESS,
    WS_FEED_CONNECTION_ERROR,
    WS_FEED_GET_MESSAGE,
    WS_FEED_CONNECTION_CLOSED,
    WS_FEED_ADD_CURRENT_ITEM
} from "../constants/feed"

import { TfeedItem, TfeedState } from "../types";

export interface IWsFeedConnectionStartAction {
    readonly type: typeof WS_FEED_CONNECTION_START,
    payload: string;
}

export interface IWsFeedConnectionSuccessAction {
    readonly type: typeof WS_FEED_CONNECTION_SUCCESS;
}

export interface IWsFeedConnectionErrorAction {
    readonly type: typeof WS_FEED_CONNECTION_ERROR,
    payload: Event;
}

export interface IWsFeedGetMessageAction {
    readonly type: typeof WS_FEED_GET_MESSAGE,
    payload: TfeedState;
}

export interface IWsFeedConnectionClosedAction {
    readonly type: typeof WS_FEED_CONNECTION_CLOSED;
}

export interface IWsFeedAddCurrentItemAction {
    readonly type: typeof WS_FEED_ADD_CURRENT_ITEM;
    item: TfeedItem;
}

export const wsFeedConnectionStartAction = (payload: string):IWsFeedConnectionStartAction => ({
    type: WS_FEED_CONNECTION_START,
    payload
});

export const wsFeedConnectionSuccessAction = ():IWsFeedConnectionSuccessAction => ({
    type: WS_FEED_CONNECTION_SUCCESS
});

export const wsFeedConnectionErrorAction = (payload: Event):IWsFeedConnectionErrorAction => ({
    type: WS_FEED_CONNECTION_ERROR,
    payload
});

export const wsFeedGetMessageAction = (payload:  TfeedState):IWsFeedGetMessageAction => ({
    type: WS_FEED_GET_MESSAGE,
    payload
});

export const wsFeedConnectionClosedAction = ():IWsFeedConnectionClosedAction => ({
    type: WS_FEED_CONNECTION_CLOSED
});

export const wsFeedAddCurrentItemAction = (item: TfeedItem):IWsFeedAddCurrentItemAction => ({
    type: WS_FEED_ADD_CURRENT_ITEM,
    item
});

export type TWSOrdersFeedActions =
| IWsFeedConnectionStartAction
| IWsFeedConnectionSuccessAction
| IWsFeedConnectionErrorAction
| IWsFeedGetMessageAction
| IWsFeedConnectionClosedAction
| IWsFeedAddCurrentItemAction;


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