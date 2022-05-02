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
    FORGOT_PASSWORD_FAILED
} from '../actions/auth';

const initialState = {
    account: null,

    registerAccountRequest: true,
    registerAccountFailed: false,

    loginAccountRequest: false,
    loginAccountFailed: false,

    forgotPasswordRequest: false,
    forgotPasswordFailed: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_ACCOUNT_REQUEST: {
            return {
                ...state,
                registerAccountRequest: true,
                registerAccountFailed: false
            };
        }
        case REGISTER_ACCOUNT_SUCCESS: {
            return {
                ...state,
                registerAccountRequest: false,
                registerAccountFailed: false
            };
        }
        case REGISTER_ACCOUNT_FAILED: {
            return {
                ...state,
                registerAccountRequest: false,
                registerAccountFailed: true
            };
        }
        case LOGIN_ACCOUNT_REQUEST: {
            return {
                ...state,
                loginAccountRequest: true,
                loginAccountFailed: false,
            };
        }
        case LOGIN_ACCOUNT_SUCCESS: {
            return {
                ...state,
                loginAccountRequest: false,
                loginAccountFailed: false,
            };
        }
        case LOGIN_ACCOUNT_FAILED: {
            return {
                ...state,
                loginAccountRequest: false,
                loginAccountFailed: true,
            };
        }
        case SAVE_REGISTER_ACCOUNT:{
            return {
                ...state,
                account: {
                    "email": action.email,
                    "name": action.name
                }
            };
        }
        case FORGOT_PASSWORD_REQUEST: {
            return {
                ...state,
                forgotPasswordRequest: true,
                forgotPasswordFailed: false
            };
        }
        case FORGOT_PASSWORD_SUCCESS: {
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordFailed: false
            };
        }
        case FORGOT_PASSWORD_FAILED: {
            return {
                ...state,
                forgotPasswordRequest: false,
                forgotPasswordFailed: true
            };
        }
        default: {
            return state;
        }
    }
}