import { store } from '../../services/store';
import { Location } from "history";
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

export type TItem = {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
    uuid: string,
}

export type TConstructorItem = {
    id: string,
    index: number,
    name: string,
    price: number,
    thumbnail: string,
    uiKey: string,
}

export type TLocation = {
    from: Location;
    background?: Location;
}
export type TIngredientId = Pick<TItem, '_id'> | string;

export type TOrder = {
    name: string;
    ingredients: Array<TIngredientId>;
    _id: string;
    status: string;
    number: number;
    createdAt: string;
    updatedAt: string;
};

export type TOrderObject = {
    name: string;
    order: TOrder;
    success: boolean;
};

export type TitemsState = {
    data: TItem[],
    itemsRequest: boolean,
    itemsFailed: boolean,
    buns: object,
    ingredients: TItem[],
    order: TOrderObject[],
    orderRequest: boolean,
    orderFailed: boolean,
}

export type  TGeneralBurgersActions = {

}
export type RootState = ReturnType<typeof rootReducer>; 
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
export type TDispatch = typeof store.dispatch;