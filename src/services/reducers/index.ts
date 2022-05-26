import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  INCREASE_ITEM,
  DECREASE_ITEM,
  ADD_BUN,
  ADD_ITEM,
  DELETE_ITEM,
  MOVE_ITEM,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILED,
  CLEAR_ORDER_ARRAY,
  CLEAR_ORDER_NUMBER
} from "../actions";
import { combineReducers } from "redux";
import { getModalItemsReducer } from "./modal";
import { authReducer } from "./auth"
import { TitemsState, TItem, TOrderObject } from "../../components/utils/types";

export interface IGetItemsReducer {
  readonly type: 
  typeof GET_ITEMS_REQUEST | 
  typeof GET_ITEMS_SUCCESS |
  typeof GET_ITEMS_FAILED |
  typeof INCREASE_ITEM |
  typeof DECREASE_ITEM |
  typeof ADD_BUN |
  typeof ADD_ITEM |
  typeof DELETE_ITEM |
  typeof MOVE_ITEM |
  typeof GET_ORDER_REQUEST |
  typeof GET_ORDER_SUCCESS |
  typeof GET_ORDER_FAILED |
  typeof CLEAR_ORDER_ARRAY |
  typeof CLEAR_ORDER_NUMBER;
  data: TItem[];
  item: TItem;
  id: TItem["_id"];
  uuid: TItem["uuid"];
  dragIndex: number;
  hoverIndex: number;
  order: TOrderObject[];
}

export const initialState: TitemsState = {
  data: [],
  itemsRequest: false,
  itemsFailed: false,
  buns: [],
  ingredients: [],
  order: [],
  orderRequest: false,
  orderFailed: false,
};



export const getItemsReducer = (state = initialState, action: IGetItemsReducer): TitemsState => {
  switch (action.type) {
    case GET_ITEMS_REQUEST: {
      return {
        ...state,
        itemsRequest: true,
        itemsFailed: false,
      };
    }
    case GET_ITEMS_SUCCESS: {
      return {
        ...state,
        data: action.data,
        itemsRequest: false,
      };
    }
    case GET_ITEMS_FAILED: {
      return {
        ...state,
        itemsFailed: true,
        itemsRequest: false,
      };
    }
    case INCREASE_ITEM: {
      return {
        ...state,
        data: [...state.data].map((item) =>
          item._id === action.item._id && action.item.type !== "bun"
            ? { ...item, __v: ++item.__v }
            : { ...item, __v: item.__v }
        ),
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        data: [...state.data].map((item) =>
          item._id === action.id ? { ...item, __v: --item.__v } : item
        ),
      };
    }
    case DELETE_ITEM: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients.filter((item) => item.uuid !== action.uuid),
        ],
      };
    }
    case ADD_BUN: {
      return {
        ...state,
        data: [...state.data].map((item) =>
          item._id === action.item._id && action.item.type === "bun"
            ? { ...item, __v: 2}
            : { ...item, __v: 0}
        ),
        buns: action.item,
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.item],
      };
    }
    case MOVE_ITEM: {
      let ingredients = [...state.ingredients];
      ingredients.splice(
        action.hoverIndex,
        0,
        ingredients.splice(action.dragIndex, 1)[0]
      );
      return {
        ...state,
        ingredients: [...ingredients],
      };
    }
    case GET_ORDER_REQUEST: {
      return {
        ...state,
        orderRequest: true,
        orderFailed: false,
      };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        order: action.order,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return {
        ...state,
        orderFailed: true,
        orderRequest: false,
      };
    }
    case CLEAR_ORDER_ARRAY: {
      return {
        ...state,
        data: [...state.data].map((item) =>
          item.type
            ? { ...item, __v: 0 }
            : item
        ),
        buns: [],
        ingredients: []
      };
    }
    case CLEAR_ORDER_NUMBER: {
      return {
        ...state,
        order: [],
      }
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  ingredients: getItemsReducer,
  modal: getModalItemsReducer,
  auth: authReducer
});