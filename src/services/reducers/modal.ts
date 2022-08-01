import {
    OPEN_MODAL,
    CLOSE_MODAL,
    ADD_CURRENT_ITEM,
    DELETE_CURRENT_ITEM
} from "../constants/modal";
import { TModalAction } from "../actions/modal";
import { TmodalState } from "../types";


export const initialState: TmodalState = {
    currentItem: null,
    ingredientModal: false,
    orderModal: false,
 };

export const getModalItemsReducer = (state = initialState, action: TModalAction):TmodalState  => {
    switch (action.type) {
      case OPEN_MODAL: {
        const {type, ...restProps}  = action
        return  {
          ...state,
          ...restProps
        };
      }
      case CLOSE_MODAL: {
        const {type, ...restProps}  = action
        return  {
          ...state,
          ...restProps
        };
      }
      case DELETE_CURRENT_ITEM: {
        return { 
          ...state, 
          currentItem:  null
        };
      }
      case ADD_CURRENT_ITEM: {
        return  {
          ...state,
          currentItem:   {...action.item} 
        };
      }
      default: {
        return state;
      }
    }
  };