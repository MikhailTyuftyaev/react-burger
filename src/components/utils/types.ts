import { store } from '../../services/store';
import { rootReducer } from '../../services/reducers';
import {
    TypedUseSelectorHook,
    useSelector as selectorHook
} from 'react-redux';

export type TModal = {
    header?: string;
    isModal: boolean;
    onClose: () => void;
}

export type TModalOverlay = {
    onClick: () => void;
}
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export type RootState = ReturnType<typeof rootReducer>; 
export type TDispatch = typeof store.dispatch;