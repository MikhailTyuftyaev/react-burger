import { checkResponse, setCookie } from "../../components/utils/utils";
import { baseUrl } from "../../components/utils/constants";

export const REGISTER_ACCOUNT_REQUEST = "REGISTER_ACCOUNT_REQUEST";
export const REGISTER_ACCOUNT_SUCCESS = "REGISTER_ACCOUNT_SUCCESS";
export const REGISTER_ACCOUNT_FAILED = "REGISTER_ACCOUNT_FAILED";

export const LOGIN_ACCOUNT_REQUEST = 'LOGIN_ACCOUNT_REQUEST';
export const LOGIN_ACCOUNT_SUCCESS = 'LOGIN_ACCOUNT_SUCCESS';
export const LOGIN_ACCOUNT_FAILED = 'LOGIN_ACCOUNT_FAILED';

export const SAVE_REGISTER_ACCOUNT = "SAVE_REGISTER_ACCOUNT";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export function sendForgotPasswordRequest(emailValue) {
  return function (dispatch) {
    dispatch({ 
        type: FORGOT_PASSWORD_REQUEST 
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
        console.log(res);
        if (res && res.success) {
        dispatch({ 
            type: FORGOT_PASSWORD_SUCCESS 
        });
        } else {
            dispatch({ 
                type: FORGOT_PASSWORD_FAILED 
            });
        }
      })
      .catch((err) => {
        dispatch({ 
            type: FORGOT_PASSWORD_FAILED 
        });
      });
  };
}

export function sendRegisterRequest(name, email, pass) {
  return function (dispatch) {
    dispatch({ 
        type: REGISTER_ACCOUNT_REQUEST 
    });
    fetch(baseUrl + "/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        email: email,
        password: pass, 
        name: name
      }),
    })
      .then(checkResponse)
      .then((res) => {
        if (res && res.success) {
        let accessToken = res.accessToken.split('Bearer ')[1];
        setCookie('accessToken', accessToken);
        setCookie('refreshToken', res.refreshToken);
        dispatch({
          type: SAVE_REGISTER_ACCOUNT,
          email: res.user.email,
          name: res.user.name
        });
        dispatch({ 
            type: REGISTER_ACCOUNT_SUCCESS 
        });
        } else {
            dispatch({ 
                type: REGISTER_ACCOUNT_FAILED 
            });
        }
      })
      .catch((err) => {
        dispatch({ 
            type: REGISTER_ACCOUNT_FAILED 
        });
      });
  };
}

export function sendLoginRequest(email, pass){
  return function (dispatch) {
    dispatch({ 
        type: LOGIN_ACCOUNT_REQUEST 
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
        let accessToken = res.accessToken.split('Bearer ')[1];
        setCookie('accessToken', accessToken);
        setCookie('refreshToken', res.refreshToken);
        console.log(res);
        dispatch({
          type: SAVE_REGISTER_ACCOUNT,
          email: res.user.email,
          name: res.user.name
        });
        dispatch({ 
            type: LOGIN_ACCOUNT_SUCCESS 
        });
        } else {
            dispatch({ 
                type: LOGIN_ACCOUNT_FAILED 
            });
        }
      })
      .catch((err) => {
        dispatch({ 
            type: LOGIN_ACCOUNT_FAILED 
        });
      });
  };
}

export function sendResetPasswordRequest(pass, token){
  return function (dispatch) {
    dispatch({ 
        type: RESET_PASSWORD_REQUEST 
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
        console.log(res);
        if (res && res.success) {
        dispatch({ 
            type: RESET_PASSWORD_SUCCESS 
        });
        } else {
            dispatch({ 
                type: RESET_PASSWORD_FAILED 
            });
        }
      })
      .catch((err) => {
        dispatch({ 
            type: RESET_PASSWORD_FAILED 
        });
      });
  };
}

