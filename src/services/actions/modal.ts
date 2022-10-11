import {
    OPEN_MODAL,
    CLOSE_MODAL
  } from '../constants/modal';

  // Interfaces

export interface IOpenModalAction {
    readonly type: typeof OPEN_MODAL;
}

export interface ICloseModalAction {
    readonly type: typeof CLOSE_MODAL;
}

// Action creators

export const openModalAction = ():IOpenModalAction => ({
    type: OPEN_MODAL
});

export const closeModalAction = ():ICloseModalAction => ({
    type: CLOSE_MODAL
});

 // Union

export type TModalAction = 
| IOpenModalAction
| ICloseModalAction;