import {
    ADD_CURRENT_ITEM,
    DELETE_CURRENT_ITEM
} from "../actions/modal";

const initialState = {
    currentItem: {}
 };

export const getModalItemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_CURRENT_ITEM: {
        return { 
          ...state, 
          currentItem:  {}
        };
      }
      case ADD_CURRENT_ITEM: {
        return  {
          ...state,
          currentItem:  { ...action.item }
        };
      }
      default: {
        return state;
      }
    }
  };