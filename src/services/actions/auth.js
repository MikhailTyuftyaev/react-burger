import {
  checkResponse,
  setCookie,
  getCookie,
} from "../../components/utils/utils";
import { baseUrl } from "../../components/utils/constants";

export const REGISTER_ACCOUNT_REQUEST = "REGISTER_ACCOUNT_REQUEST";
export const REGISTER_ACCOUNT_SUCCESS = "REGISTER_ACCOUNT_SUCCESS";
export const REGISTER_ACCOUNT_FAILED = "REGISTER_ACCOUNT_FAILED";

export const LOGIN_ACCOUNT_REQUEST = "LOGIN_ACCOUNT_REQUEST";
export const LOGIN_ACCOUNT_SUCCESS = "LOGIN_ACCOUNT_SUCCESS";
export const LOGIN_ACCOUNT_FAILED = "LOGIN_ACCOUNT_FAILED";

export const SAVE_REGISTER_ACCOUNT = "SAVE_REGISTER_ACCOUNT";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const LOGOUT_ACCOUNT_REQUEST = "LOGOUT_ACCOUNT_REQUEST";
export const LOGOUT_ACCOUNT_SUCCESS = "LOGOUT_ACCOUNT_SUCCESS";
export const LOGOUT_ACCOUNT_FAILED = "LOGOUT_ACCOUNT_FAILED";

export const UPDATE_TOKEN_REQUEST = "UPDATE_TOKEN_REQUEST";
export const UPDATE_TOKEN_SUCCESS = "UPDATE_TOKEN_SUCCESS";
export const UPDATE_TOKEN_FAILED = "UPDATE_TOKEN_REQUEST";


export function sendForgotPasswordRequest(emailValue) {
  return function (dispatch) {
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

export function sendRegisterRequest(name, email, pass) {
  return function (dispatch) {
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

export function sendLoginRequest(email, pass) {
  return function (dispatch) {
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

export function sendResetPasswordRequest(pass, token) {
  return function (dispatch) {
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
  return function (dispatch) {
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
        if (err === 'Ошибка 403') {
          dispatch(updateTokenRequest()).then(()=>{
            dispatch(getUserRequest())
          })
        } else {
          console.log(err);
          dispatch({ type: GET_USER_FAILED });
        }
      });
  };
}

export function saveAccountDataRequest(name, email) {
  return function (dispatch) {
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
        if (err === 'Ошибка 403') {
          dispatch(updateTokenRequest()).then(()=>{
            dispatch(saveAccountDataRequest(name, email))
          })
        } else{
          console.log(err);
          dispatch({ type: UPDATE_USER_FAILED });
        }
          
      });
  };
}

export function sendLogoutRequest() {
  return function (dispatch) {
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
  return function (dispatch) {
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
        }
      })
      .catch((err) => {
        dispatch({ type: UPDATE_TOKEN_FAILED });
      })
  }
}