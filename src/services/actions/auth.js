import { checkResponse } from "../../components/utils/utils";
import { baseUrl } from "../../components/utils/constants";

export const REGISTER_ACCOUNT_REQUEST = "REGISTER_ACCOUNT_REQUEST";
export const REGISTER_ACCOUNT_SUCCESS = "REGISTER_ACCOUNT_SUCCESS";
export const REGISTER_ACCOUNT_FAILED = "REGISTER_ACCOUNT_FAILED";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

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
        if (res && res.success) {
        console.log(res);
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
        console.log(res);
        dispatch({ 
            type: REGISTER_ACCOUNT_FAILED 
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
