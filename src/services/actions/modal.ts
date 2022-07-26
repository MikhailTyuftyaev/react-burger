import {
    OPEN_MODAL,
    CLOSE_MODAL,
    ADD_CURRENT_ITEM,
    DELETE_CURRENT_ITEM
  } from '../constants/modal';
  import { TItem } from '../types';

  // Interfaces

export interface IOpenModalAction {
    readonly type: typeof OPEN_MODAL;
    ingredientModal: boolean;
    orderModal: boolean;
}

export interface ICloseModalAction {
    readonly type: typeof CLOSE_MODAL;
    ingredientModal: boolean;
    orderModal: boolean;
}

export interface IAddCurrentItemAction {
    readonly type: typeof ADD_CURRENT_ITEM;
    item: TItem;
}

export interface IDeleteCurrentItemAction {
    readonly type: typeof DELETE_CURRENT_ITEM;
}
// Action creators

export const openModalAction = (ingredientModal: boolean, orderModal: boolean):IOpenModalAction => ({
    type: OPEN_MODAL,
    ingredientModal,
    orderModal
});

export const closeModalAction = (ingredientModal: boolean, orderModal: boolean):ICloseModalAction => ({
    type: CLOSE_MODAL,
    ingredientModal,
    orderModal
});

export const addCurrentItemAction = (item: TItem):IAddCurrentItemAction => ({
    type: ADD_CURRENT_ITEM,
    item
});

export const deleteCurrentItemAction = ():IDeleteCurrentItemAction => ({
    type: DELETE_CURRENT_ITEM,
});

 // Union

export type TModalAction = 
| IOpenModalAction
| ICloseModalAction
| IAddCurrentItemAction
| IDeleteCurrentItemAction;