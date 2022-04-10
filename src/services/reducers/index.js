import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  CREATE_ORDER,
  INCREASE_ITEM,
  DECREASE_ITEM,
  ADD_BUN,
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM
} from "../actions";
import { combineReducers } from 'redux';
import { getModalItemsReducer } from '../reducers/modal'

export const initialState = {
  data: [{price: "", image_mobile: ""}],
  itemsRequest: false,
  itemsFailed: false,
  buns: [],
  ingredients: [],
  order: {}
};

export const getItemsReducer = (state = initialState, action) => {
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
        data: action.data,  ...action.data[0].__v= 2,
        buns: action.data[0],
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
        data: [...state.data].map(item =>
          item._id === action.item._id && action.item.type !== "bun" ? { ...item, __v: ++item.__v } : item
        ),
        data: [...state.data].map(item =>
          item._id !== action.item._id && action.item.type === "bun" ? { ...item, __v: 0 } : item
        )
      };
    }
    case DECREASE_ITEM: {
      return {
        ...state,
        data: [...state.data].map(item =>
          item._id === action.id ? { ...item, __v: --item.__v } : item
        )
      };
    }
    case DELETE_ITEM: {
      return { 
        ...state, 
        ingredients: [ ...state.ingredients.filter((item, index) => index !== action.index)]}
    };
    case ADD_BUN: {
      return {
        ...state,
        data: [...state.data].map(item =>
          item._id === action.item._id && action.item.type === "bun" ? { ...item, __v: 2 } : item
        ),
        buns:  action.item,
        
      };
    }
    case ADD_ITEM: {
      return {
        ...state,
        ingredients:  [ ...state.ingredients, action.item]
      };
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  ingredients: getItemsReducer,
  modal: getModalItemsReducer
});
