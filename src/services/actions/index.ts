import { baseUrl } from "../../components/utils/constants";
import { checkResponse } from "../../components/utils/utils";
import { TDispatch } from "../../components/utils/types";

export const GET_ITEMS_REQUEST = "GET_ITEMS_REQUEST";
export const GET_ITEMS_SUCCESS = "GET_ITEMS_SUCCESS";
export const GET_ITEMS_FAILED = "GET__ITEMS_FAILED";

export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";

export const ADD_BUN = "ADD_BUN";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";

export const MOVE_ITEM = "MOVE_ITEM";

export const GET_ORDER_REQUEST = "GET_ORDER_REQUEST";
export const GET_ORDER_SUCCESS = "GET_ORDER_SUCCESS";
export const GET_ORDER_FAILED = "GET_ORDER_FAILED";

export const CLEAR_ORDER_ARRAY = "CLEAR_ORDER_ARRAY";
export const CLEAR_ORDER_NUMBER = "CLEAR_ORDER_NUMBER";



export const getItemsRequest = () => {
  return function (dispatch: TDispatch) {
    dispatch({
      type: GET_ITEMS_REQUEST,
    });
    fetch(baseUrl + "/ingredients")
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ITEMS_SUCCESS,
            data: res.data,
          });
        } else {
          dispatch({
            type: GET_ITEMS_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_ITEMS_FAILED,
        });
      });
  };
}

export function sendOrderRequest(constructorIngredients: Array<string>) {
  return function (dispatch: TDispatch) {
    dispatch({
      type: GET_ORDER_REQUEST,
    });
    fetch(baseUrl + "/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({ "ingredients": constructorIngredients}),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch({
            type: GET_ORDER_SUCCESS,
            order: res.order.number,
          });
          dispatch({ type: CLEAR_ORDER_ARRAY });
        } else {
          dispatch({
            type: GET_ORDER_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_ORDER_FAILED,
        });
      });
  };
}
