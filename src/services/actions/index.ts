import { baseUrl } from "../../utils";
import { checkResponse } from "../../utils";
import { TDispatch } from "../../utils/types";

import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  CLEAR_ORDER_ARRAY,
} from "../constants";

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
