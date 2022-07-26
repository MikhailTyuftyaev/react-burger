import { baseUrl } from "../../utils";
import { checkResponse, getCookie } from "../../utils";
import { TAppThunk, TDispatch, TItem } from "../types";

import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  CLEAR_ORDER_ARRAY,
  INCREASE_ITEM,
  DECREASE_ITEM,
  DELETE_ITEM,
  ADD_BUN,
  ADD_ITEM,
  MOVE_ITEM,
  CLEAR_ORDER_NUMBER
} from "../constants";

// Interfaces

export interface IGetItemsRequestAction {
  readonly type: typeof GET_ITEMS_REQUEST;
}

export interface IGetItemsSuccessAction {
  readonly type: typeof GET_ITEMS_SUCCESS,
  data: TItem[];
}

export interface IGetItemsFailedAction {
  readonly type: typeof GET_ITEMS_FAILED;
}

export interface IGetOrderRequestAction {
  readonly type: typeof GET_ORDER_REQUEST;
}

export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS,
  order: number;
}

export interface IClearOrderArrayAction {
  readonly type: typeof CLEAR_ORDER_ARRAY;
}

export interface IGetOrderFailedAction {
  readonly type: typeof GET_ORDER_FAILED;
}

export interface IIncreaseItemAction {
  readonly type: typeof INCREASE_ITEM;
  item: TItem
}

export interface IDecreaseItemAction {
  readonly type: typeof DECREASE_ITEM;
  id: string
}

export interface IDeleteItemAction {
  readonly type: typeof DELETE_ITEM;
  uuid: string
}

export interface IAddBunAction {
  readonly type: typeof ADD_BUN;
  item: TItem
}

export interface IAddItemAction {
  readonly type: typeof ADD_ITEM;
  item: TItem
}

export interface IMoveItemAction {
  readonly type: typeof MOVE_ITEM;
  dragIndex: number;
  hoverIndex: number;
}

export interface IClearOrderNumberAction {
  readonly type: typeof CLEAR_ORDER_NUMBER;
}

// Action creators

const getItemsRequestAction = ():IGetItemsRequestAction => ({
  type: GET_ITEMS_REQUEST
});

const getItemsSuccessAction = (data: TItem[]):IGetItemsSuccessAction => ({
  type: GET_ITEMS_SUCCESS,
  data
});

const getItemsFailedAction = ():IGetItemsFailedAction => ({
  type: GET_ITEMS_FAILED
});

const getOrderRequestAction = ():IGetOrderRequestAction => ({
  type: GET_ORDER_REQUEST
});

const getOrderSuccessAction = (order: number):IGetOrderSuccessAction => ({
  type: GET_ORDER_SUCCESS,
  order
});

const clearOrderArrayAction = ():IClearOrderArrayAction => ({
  type: CLEAR_ORDER_ARRAY
});

const getOrderFailedAction = ():IGetOrderFailedAction => ({
  type: GET_ORDER_FAILED
});

export const increaseItemAction = (item: TItem):IIncreaseItemAction => ({
  type: INCREASE_ITEM,
  item
});

export const decreaseItemAction = (id: string):IDecreaseItemAction => ({
  type: DECREASE_ITEM,
  id
});

export const deleteItemAction = (uuid: string):IDeleteItemAction => ({
  type: DELETE_ITEM,
  uuid
});

export const addBunAction = (item: TItem):IAddBunAction => ({
  type: ADD_BUN,
  item
});
export const addItemAction = (item: TItem):IAddItemAction => ({
  type: ADD_ITEM,
  item
});

export const moveItemAction = (dragIndex: number, hoverIndex: number):IMoveItemAction => ({
  type: MOVE_ITEM,
  dragIndex,
  hoverIndex
});

export const clearOrderNumberAction = ():IClearOrderNumberAction => ({
  type: CLEAR_ORDER_NUMBER,
});

// Union

export type TItemsAction = 
| IGetItemsRequestAction
| IGetItemsSuccessAction
| IGetItemsFailedAction
| IGetOrderRequestAction
| IGetOrderSuccessAction
| IClearOrderArrayAction
| IGetOrderFailedAction
| IIncreaseItemAction
| IDecreaseItemAction
| IDeleteItemAction
| IAddBunAction
| IAddItemAction
| IMoveItemAction
| IClearOrderNumberAction;

// Actions

export const getItemsRequest: TAppThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch(getItemsRequestAction());
    fetch(baseUrl + "/ingredients")
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch(getItemsSuccessAction(res.data));
        } else {
          dispatch(getItemsFailedAction());
        }
      })
      .catch((err) => {
        dispatch(getItemsFailedAction());
      });
  };
}

export const sendOrderRequest: TAppThunk = (constructorIngredients: Array<string>) => {
  return function (dispatch: TDispatch) {
    dispatch(getOrderRequestAction());
    fetch(baseUrl + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + getCookie("accessToken")
      },
      body: JSON.stringify({ "ingredients": constructorIngredients}),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch(getOrderSuccessAction(res.order.number));
          dispatch(clearOrderArrayAction());
        } else {
          dispatch(getOrderFailedAction());
        }
      })
      .catch((err) => {
        dispatch(getOrderFailedAction());
      });
  };
}
