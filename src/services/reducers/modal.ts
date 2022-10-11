import {
    OPEN_MODAL,
    CLOSE_MODAL,
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
        return  {
          ...state,
          orderModal: true
        };
      }
      case CLOSE_MODAL: {
        return  {
          ...state,
          orderModal: false
        };
      }
      default: {
        return state;
      }
    }
  };