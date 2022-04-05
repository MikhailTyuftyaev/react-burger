import {
  GET_ITEMS_REQUEST,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILED,
  CREATE_ORDER,
  INCREASE_ITEM,
  DECREASE_ITEM,
  ADD_ITEM,
  DELETE_ITEM,
} from "../actions";
import { combineReducers } from 'redux';
import { getModalItemsReducer } from '../reducers/modal'

export const initialState = {
  data: [{price: "", image_mobile: ""}],
  itemsRequest: false,
  itemsFailed: false,
  bun: [],
  ingredients: [],
  constructorItems: [],
  currentItem: [],
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
        data: [...state.data].map(item =>
          item._id === action.id ? { ...item, __v: ++item.__v } : item
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
        constructorItems: [ ...state.constructorItems.filter((item, index) => index !== action.index)]}
    };
    case ADD_ITEM: {
      return {
        ...state,
        //[state.data[action.index].type]: [ ...state.ingredients, ...state.data.filter(item => item._id === action.id) ],
        constructorItems:  [ ...state.constructorItems, ...state.data.filter(item => item._id === action.id)]
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
