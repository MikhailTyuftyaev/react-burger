import {
  checkResponse,
  setCookie,
  getCookie,
} from "../../utils";
import { baseUrl } from "../../utils";
import { TDispatch } from "../types";

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


export function sendForgotPasswordRequest(emailValue: string) {
  return function (dispatch: TDispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
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
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({
            type: FORGOT_PASSWORD_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
        });
      });
  };
}

export function sendRegisterRequest(name: string, email: string, pass: string) {
  return function (dispatch: TDispatch) {
    dispatch({
      type: REGISTER_ACCOUNT_REQUEST,
    });
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
          dispatch({
            type: SAVE_REGISTER_ACCOUNT,
            email: res.user.email,
            name: res.user.name,
          });
          dispatch({
            type: REGISTER_ACCOUNT_SUCCESS,
          });
        } else {
          dispatch({
            type: REGISTER_ACCOUNT_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_ACCOUNT_FAILED,
        });
      });
  };
}

export function sendLoginRequest(email: string, pass: string) {
  return function (dispatch: TDispatch) {
    dispatch({
      type: LOGIN_ACCOUNT_REQUEST,
    });
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
          dispatch({
            type: SAVE_REGISTER_ACCOUNT,
            email: res.user.email,
            name: res.user.name,
          });
          dispatch({
            type: LOGIN_ACCOUNT_SUCCESS,
          });
        } else {
          dispatch({
            type: LOGIN_ACCOUNT_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_ACCOUNT_FAILED,
        });
      });
  };
}

export function sendResetPasswordRequest(pass: string, token: string) {
  return function (dispatch: TDispatch) {
    dispatch({
      type: RESET_PASSWORD_REQUEST,
    });
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
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
          });
        } else {
          dispatch({
            type: RESET_PASSWORD_FAILED,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: RESET_PASSWORD_FAILED,
        });
      });
  };
}

export function getUserRequest() {
  return function (dispatch: TDispatch) {
    dispatch({
      type: GET_USER_REQUEST,
    });
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
          dispatch({
            type: SAVE_REGISTER_ACCOUNT,
            email: res.user.email,
            name: res.user.name,
          });
          dispatch({
            type: GET_USER_SUCCESS,
          });
        }
      })
      .catch((err) => {
        if ((err.message === 'jwt expired') || (err.message === 'Token is invalid')) {
          dispatch(updateTokenRequest());
          getUserRequest();
        } else {
          console.log(err);
          dispatch({ type: GET_USER_FAILED });
        }
      });
  };
}

export function saveAccountDataRequest(name: string, email: string) {
  return function (dispatch: TDispatch) {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
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
          dispatch({
            type: SAVE_REGISTER_ACCOUNT,
            email: res.user.email,
            name: res.user.name,
          });
          dispatch({
            type: UPDATE_USER_SUCCESS,
          });
        }
      })
      .catch((err) => {
        if ((err.message === 'jwt expired') || (err.message === 'Token is invalid')) {
          dispatch(updateTokenRequest());
          dispatch(saveAccountDataRequest(name, email));
        } else{
          console.log(err);
          dispatch({ type: UPDATE_USER_FAILED });
        }
          
      });
  };
}

export function sendLogoutRequest() {
  return function (dispatch: TDispatch) {
    dispatch({
      type: LOGOUT_ACCOUNT_REQUEST,
    });
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
          dispatch({
            type: LOGOUT_ACCOUNT_SUCCESS,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_ACCOUNT_FAILED,
        });
      });
  };
}

export function updateTokenRequest() {
  return function (dispatch: TDispatch) {
    dispatch({ 
      type: UPDATE_TOKEN_REQUEST 
    });
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
          dispatch({
            type: UPDATE_TOKEN_SUCCESS,
          });
          dispatch(getUserRequest());
        }
      })
      .catch((err) => {
        dispatch({ type: UPDATE_TOKEN_FAILED });
      })
  }
}