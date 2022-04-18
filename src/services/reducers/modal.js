import {
    OPEN_MODAL,
    CLOSE_MODAL,
    ADD_CURRENT_ITEM,
    DELETE_CURRENT_ITEM
} from "../actions/modal";

const initialState = {
    currentItem: {},
    ingredientModal: false,
    orderModal: false,
 };

export const getModalItemsReducer = (state = initialState, action) => {
    switch (action.type) {
      case OPEN_MODAL: {
        return  {
          ...state,
          ...action
        };
      }
      case CLOSE_MODAL: {
        return  {
          ...state,
          ...action
        };
      }
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