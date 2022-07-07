import {
  checkResponse,
  setCookie,
  getCookie,
} from "../../utils";
import { baseUrl } from "../../utils";
import { TAppThunk, TDispatch } from "../types";

import {
  REGISTER_ACCOUNT_REQUEST,
  REGISTER_ACCOUNT_SUCCESS,
  REGISTER_ACCOUNT_FAILED,

  LOGIN_ACCOUNT_REQUEST,
  LOGIN_ACCOUNT_SUCCESS,
  LOGIN_ACCOUNT_FAILED,

  SAVE_REGISTER_ACCOUNT,

  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILED,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,

  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,

  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILED,

  LOGOUT_ACCOUNT_REQUEST,
  LOGOUT_ACCOUNT_SUCCESS,
  LOGOUT_ACCOUNT_FAILED,

  UPDATE_TOKEN_REQUEST,
  UPDATE_TOKEN_SUCCESS,
  UPDATE_TOKEN_FAILED
} from '../constants/auth';

// Interfaces

export interface IForgotPasswordRequestAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export interface IRegisterAccountRequestAction {
  readonly type: typeof REGISTER_ACCOUNT_REQUEST;
}

export interface ISaveAccountAction {
  readonly type: typeof SAVE_REGISTER_ACCOUNT,
  email: string,
  name: string;
}

export interface IRegisterAccountSuccessAction {
  readonly type: typeof REGISTER_ACCOUNT_SUCCESS;
}

export interface IRegisterAccountFailedAction {
  readonly type: typeof REGISTER_ACCOUNT_FAILED;
}

export interface ILoginAccountRequestAction {
  readonly type: typeof LOGIN_ACCOUNT_REQUEST;
}

export interface ILoginAccountSuccessAction {
  readonly type: typeof LOGIN_ACCOUNT_SUCCESS;
}

export interface ILoginAccountFailedAction {
  readonly type: typeof LOGIN_ACCOUNT_FAILED;
}

export interface IResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED;
}

export interface IGetUserRequestAction {
  readonly type: typeof GET_USER_REQUEST;
}

export interface IGetUserSuccessAction {
  readonly type: typeof GET_USER_SUCCESS;
}

export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED;
}

export interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
}

export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
}

export interface ILogoutAccountRequestAction {
  readonly type: typeof LOGOUT_ACCOUNT_REQUEST;
}

export interface ILogoutAccountSuccessAction {
  readonly type: typeof LOGOUT_ACCOUNT_SUCCESS;
}

export interface ILogoutAccountFailedAction {
  readonly type: typeof LOGOUT_ACCOUNT_FAILED;
}

export interface IUpdateTokenRequestAction {
  readonly type: typeof UPDATE_TOKEN_REQUEST;
}

export interface IUpdateTokenSuccessAction {
  readonly type: typeof UPDATE_TOKEN_SUCCESS;
}

export interface IUpdateTokenFailedAction {
  readonly type: typeof UPDATE_TOKEN_FAILED;
}

// Action creators

const forgotPasswordRequestAction = ():IForgotPasswordRequestAction => ({
   type: FORGOT_PASSWORD_REQUEST
});

const forgotPasswordSuccessAction = ():IForgotPasswordSuccessAction => ({
  type: FORGOT_PASSWORD_SUCCESS
});

const forgotPasswordFailedAction = ():IForgotPasswordFailedAction => ({
  type: FORGOT_PASSWORD_FAILED
});

const registerAccountRequestAction = ():IRegisterAccountRequestAction => ({
  type: REGISTER_ACCOUNT_REQUEST
});

const saveAccountAction = (email: string, name:string):ISaveAccountAction => ({
  type: SAVE_REGISTER_ACCOUNT,
  email,
  name
});

const registerAccountSuccessAction = ():IRegisterAccountSuccessAction => ({
  type: REGISTER_ACCOUNT_SUCCESS
});

const registerAccountFailedAction = ():IRegisterAccountFailedAction => ({
  type: REGISTER_ACCOUNT_FAILED
});

const loginAccountRequestAction = ():ILoginAccountRequestAction => ({
  type: LOGIN_ACCOUNT_REQUEST
});

const loginAccountSuccessAction = ():ILoginAccountSuccessAction => ({
  type: LOGIN_ACCOUNT_SUCCESS
});

const loginAccountFailedAction = ():ILoginAccountFailedAction => ({
  type: LOGIN_ACCOUNT_FAILED
});

const resetPasswordRequestAction = ():IResetPasswordRequestAction => ({
  type: RESET_PASSWORD_REQUEST
});

const resetPasswordSuccessAction = ():IResetPasswordSuccessAction => ({
  type: RESET_PASSWORD_SUCCESS
});

const resetPasswordFailedAction = ():IResetPasswordFailedAction => ({
  type: RESET_PASSWORD_FAILED
});

const getUserRequestAction = ():IGetUserRequestAction => ({
  type: GET_USER_REQUEST
});

const getUserSuccessAction = ():IGetUserSuccessAction => ({
  type: GET_USER_SUCCESS
});

const getUserFailedAction = ():IGetUserFailedAction => ({
  type: GET_USER_FAILED
});

const updateUserRequestAction = ():IUpdateUserRequestAction => ({
  type: UPDATE_USER_REQUEST
});

const updateUserSuccessAction = ():IUpdateUserSuccessAction => ({
  type: UPDATE_USER_SUCCESS
});

const updateUserFailedAction = ():IUpdateUserFailedAction => ({
  type: UPDATE_USER_FAILED
});

const logoutAccountRequestAction = ():ILogoutAccountRequestAction => ({
  type: LOGOUT_ACCOUNT_REQUEST
});

const logoutAccountSuccessAction = ():ILogoutAccountSuccessAction => ({
  type: LOGOUT_ACCOUNT_SUCCESS
});

const logoutAccountFailedAction = ():ILogoutAccountFailedAction => ({
  type: LOGOUT_ACCOUNT_FAILED
});

const updateTokenRequestAction = ():IUpdateTokenRequestAction => ({
  type: UPDATE_TOKEN_REQUEST
});

const updateTokenSuccessAction = ():IUpdateTokenSuccessAction => ({
  type: UPDATE_TOKEN_SUCCESS
});

const updateTokenFailedAction = ():IUpdateTokenFailedAction => ({
  type: UPDATE_TOKEN_FAILED
});

// Union

export type TAuthAction = 
| IForgotPasswordRequestAction
| IForgotPasswordSuccessAction
| IForgotPasswordFailedAction
| IRegisterAccountRequestAction
| ISaveAccountAction
| IRegisterAccountSuccessAction
| IRegisterAccountFailedAction
| ILoginAccountRequestAction
| ILoginAccountSuccessAction
| ILoginAccountFailedAction
| IResetPasswordRequestAction
| IResetPasswordSuccessAction
| IResetPasswordFailedAction
| IGetUserRequestAction
| IGetUserSuccessAction
| IGetUserFailedAction
| IUpdateUserRequestAction
| IUpdateUserSuccessAction
| IUpdateUserFailedAction
| ILogoutAccountRequestAction
| ILogoutAccountSuccessAction
| ILogoutAccountFailedAction
| IUpdateTokenRequestAction
| IUpdateTokenSuccessAction
| IUpdateTokenFailedAction;

// Actions

export const sendForgotPasswordRequest:TAppThunk = (emailValue: string) => {
  return function (dispatch: TDispatch) {
    dispatch(forgotPasswordRequestAction());
    fetch(baseUrl + "/password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        email: emailValue,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch(forgotPasswordSuccessAction());
        } else {
          dispatch(forgotPasswordFailedAction());
        }
      })
      .catch((err) => {
        dispatch(forgotPasswordFailedAction());
      });
  };
}

export const sendRegisterRequest:TAppThunk = (name: string, email: string, pass: string) => {
  return function (dispatch: TDispatch) {
    dispatch(registerAccountRequestAction());
    fetch(baseUrl + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
        name: name,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          let accessToken = res.accessToken.split("Bearer ")[1];
          setCookie("accessToken", accessToken);
          setCookie("refreshToken", res.refreshToken);
          dispatch(saveAccountAction(res.user.email, res.user.name));
          dispatch(registerAccountSuccessAction());
        } else {
          dispatch(registerAccountFailedAction());
        }
      })
      .catch((err) => {
        dispatch(registerAccountFailedAction());
      });
  };
}

export const sendLoginRequest: TAppThunk = (email: string, pass: string) => {
  return function (dispatch: TDispatch) {
    dispatch(loginAccountRequestAction());
    fetch(baseUrl + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
        password: pass,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          let accessToken = res.accessToken.split("Bearer ")[1];
          setCookie("accessToken", accessToken);
          setCookie("refreshToken", res.refreshToken);
          dispatch(saveAccountAction(res.user.email, res.user.name));
          dispatch(loginAccountSuccessAction());
        } else {
          dispatch(loginAccountFailedAction());
        }
      })
      .catch((err) => {
        dispatch(loginAccountFailedAction());
      });
  };
}

export const sendResetPasswordRequest: TAppThunk = (pass: string, token: string) => {
  return function (dispatch: TDispatch) {
    dispatch(resetPasswordRequestAction());
    fetch(baseUrl + "/password-reset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        password: pass,
        token: token,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch(resetPasswordSuccessAction());
        } else {
          dispatch(resetPasswordFailedAction());
        }
      })
      .catch((err) => {
        dispatch(resetPasswordFailedAction());
      });
  };
}

export const getUserRequest: TAppThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch(getUserRequestAction());
    fetch(baseUrl + "/auth/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + getCookie("accessToken"),
      },
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch(saveAccountAction(res.user.email, res.user.name));
          dispatch(getUserSuccessAction());
        }
      })
      .catch((err) => {
        if ((err.message === 'jwt expired') || (err.message === 'Token is invalid')) {
          dispatch(updateTokenRequest());
          getUserRequest();
        } else {
          console.log(err);
          dispatch(getUserFailedAction());
        }
      });
  };
}

export const saveAccountDataRequest: TAppThunk = (name: string, email: string) => {
  return function (dispatch: TDispatch) {
    dispatch(updateUserRequestAction());
    fetch(baseUrl + "/auth/user", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + getCookie("accessToken"),
      },
      body: JSON.stringify({
        email: email,
        name: name,
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          dispatch(saveAccountAction(res.user.email, res.user.name));
          dispatch(updateUserSuccessAction());
        }
      })
      .catch((err) => {
        if ((err.message === 'jwt expired') || (err.message === 'Token is invalid')) {
          dispatch(updateTokenRequest());
          dispatch(saveAccountDataRequest(name, email));
        } else{
          console.log(err);
          dispatch(updateUserFailedAction());
        }
          
      });
  };
}

export const sendLogoutRequest: TAppThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch(logoutAccountRequestAction());
    fetch(baseUrl + "/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken")
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          setCookie("accessToken", '', { expires: -1 });
          setCookie("refreshToken", '', { expires: -1 });
          dispatch(logoutAccountSuccessAction());
        }
      })
      .catch((err) => {
        dispatch(logoutAccountFailedAction());
      });
  };
}

export const updateTokenRequest: TAppThunk = () => {
  return function (dispatch: TDispatch) {
    dispatch(updateTokenRequestAction());
    return fetch(baseUrl + "/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken")
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
          let accessToken = res.accessToken.split("Bearer ")[1];
          setCookie("accessToken", accessToken);
          setCookie("refreshToken", res.refreshToken);
          dispatch(updateTokenSuccessAction());
          dispatch(getUserRequest());
        }
      })
      .catch((err) => {
        dispatch(updateTokenFailedAction());
      })
  }
}