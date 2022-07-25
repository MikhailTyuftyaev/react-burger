import { store } from '../store';
import { Location } from "history";
import { ThunkAction } from 'redux-thunk';
import { TAuthAction } from '../actions/auth'
import { TItemsAction } from '../actions'
import { TModalAction } from "../actions/modal"
import { Action, ActionCreator } from 'redux';
import { rootReducer } from '../reducers';
import {
    TypedUseSelectorHook,
    useSelector as selectorHook,
    useDispatch as dispatchHook,
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
    _id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    __v: number;
    uuid: string;
}

export type TBurgerItem = {
    title: string;
    key: string;
    id: string;
    item: TItem;
    image: string;
    price: number;
    imageLarge: string;
    calories: number;
    proteins: number;
    fat: number;
    count: number;
    carbohydrates: number;
}

export type TConstructorItem = {
    id: string;
    index: number;
    name: string;
    price: number;
    thumbnail: string;
    uiKey: string;
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

export type TitemsState = {
    data: TItem[];
    itemsRequest: boolean;
    itemsFailed: boolean;
    buns: TItem | null;
    ingredients: TItem[];
    order: number | null;
    orderRequest: boolean;
    orderFailed: boolean;
}

export type TUserData = {
    name: string;
    email: string;
}

export type TauthState = {
    account: TUserData,
    isRegistered: boolean,
    registerAccountRequest: boolean,
    registerAccountFailed: boolean,
    isLoggedIn: boolean,
    loginAccountRequest: boolean,
    loginAccountFailed: boolean,
    isForgotReset: boolean,
    forgotPasswordRequest: boolean,
    forgotPasswordFailed: boolean,
    isPasswordReset: boolean,
    resetPasswordRequest: boolean,
    resetPasswordFailed: boolean,
    getUserRequest: boolean,
    getUserFailed: boolean,
    updateAccountRequest: boolean,
    updateAccountFailed: boolean,
    isLoggedOut: boolean,
    logoutAccountRequest: boolean,
    logoutAccountFailed: boolean,
    updateTokenRequest: boolean,
    updateTokenFailed: boolean,
}

export type TmodalItem = {
    imageLarge: string,
    title: string,
    calories: number,
    proteins: number,
    fat: number,
    carbohydrates: number,
}

export type TmodalState = {
    currentItem:  TItem | null,
    ingredientModal: boolean,
    orderModal: boolean;
}

export type Tsection = {
    id: string;
    sectionRef: any;
}

export type Tparams = {
    id?: string;
}

export type TorderIngredients = string;

export type TorderCard = {
    id: string;
    number: string;
    date: string;
    name: string;
    status?: string;
    ingredients: TorderIngredients[];
}

export type TfeedItem = {
    createdAt: string;
    ingredients: TorderIngredients[],
    name: string;
    number: string;
    status?: string;
    updatedAt?: string;
    _id: string;
    total: number;
}

export type TfeedState = {
    orders: TfeedItem[],
    total: number;
    totalToday: number;
    isOpen: boolean;
    error: Event | null;
    modal: TfeedItem | null
}




export type RootState = ReturnType<typeof rootReducer>; 
export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
export type TAllActions = TAuthAction | TItemsAction | TModalAction;
export type TAppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TAllActions>
>; 
export type TDispatch = typeof store.dispatch;
export const useDispatch = () => dispatchHook<TDispatch | TAppThunk>();