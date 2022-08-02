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
import { baseUrl, checkResponse } from "../../utils";
import { TAppThunk, TDispatch } from "../types";

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

export interface IGetNumberOrderRequestAction {
    readonly type: typeof GET_NUMBER_ORDER_REQUEST;
}

export interface IGetNumberOrderSuccesAction {
    readonly type: typeof GET_NUMBER_ORDER_SUCCESS,
    payload: TfeedState;
}

export interface IGetNumberOrderErrorAction {
    readonly type: typeof GET_NUMBER_ORDER_ERROR;
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

export const getNumberOrderRequestAction = ():IGetNumberOrderRequestAction => ({
    type: GET_NUMBER_ORDER_REQUEST
});

export const getNumberOrderSuccesAction = (payload: TfeedState):IGetNumberOrderSuccesAction => ({
    type: GET_NUMBER_ORDER_SUCCESS,
    payload
});

export const getNumberOrderErrorAction = ():IGetNumberOrderErrorAction => ({
    type: GET_NUMBER_ORDER_ERROR
});

export type TWSOrdersFeedActions =
| IWsFeedConnectionStartAction
| IWsFeedConnectionSuccessAction
| IWsFeedConnectionErrorAction
| IWsFeedGetMessageAction
| IWsFeedConnectionClosedAction
| IGetNumberOrderRequestAction
| IGetNumberOrderSuccesAction
| IGetNumberOrderErrorAction;


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

export const getNumberOrderRequest: TAppThunk = (number: string) => {
    return function (dispatch: TDispatch) {
      dispatch(getNumberOrderRequestAction());
      fetch(baseUrl + "/orders/" + number, {
        method: "GET",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
      })
        .then(checkResponse)
        .then((res) => {
            if (res && res.success) {
              dispatch(getNumberOrderSuccesAction(res));
            } else {
              dispatch(getNumberOrderErrorAction());
            }
          })
          .catch((err) => {
            dispatch(getNumberOrderErrorAction());
          });
    };
  }