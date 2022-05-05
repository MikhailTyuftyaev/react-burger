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
    UPDATE_USER_FAILED
} from '../actions/auth';

const initialState = {
    account: null,

    isRegistered: false,
    registerAccountRequest: true,
    registerAccountFailed: false,

    isLoggedIn: false,
    loginAccountRequest: false,
    loginAccountFailed: false,

    forgotPasswordRequest: false,
    forgotPasswordFailed: false,

    resetPasswordRequest: false,
    resetPasswordFailed: false,

    getUserRequest: false,
    getUserFailed: false,

    updateAccountRequest: false,
    updateAccountFailed: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_ACCOUNT_REQUEST: {
            return {
                ...state,
                isRegistered: false,
                registerAccountRequest: true,
                registerAccountFailed: false
            };
        }
        case REGISTER_ACCOUNT_SUCCESS: {
            return {
                ...state,
                isRegistered: true,
                registerAccountRequest: false,
                registerAccountFailed: false
            };
        }
        case REGISTER_ACCOUNT_FAILED: {
            return {
                ...state,
                isRegistered: false,
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
                isLoggedIn: true,
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
        case RESET_PASSWORD_REQUEST: {
            return {
                ...state,
                resetPasswordRequest: true,
                resetPasswordFailed: false
            };
        }
        case RESET_PASSWORD_SUCCESS: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordFailed: false
            };
        }
        case RESET_PASSWORD_FAILED: {
            return {
                ...state,
                resetPasswordRequest: false,
                resetPasswordFailed: true
            };
        }
        case GET_USER_REQUEST: {
            return {
                ...state,
                getUserRequest: true,
                getUserFailed: false,
            };
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                getUserRequest: false,
                getUserFailed: false,
            };
        }
        case GET_USER_FAILED: {
            return {
                ...state,
                getUserRequest: false,
                getUserFailed: true,
            };
        }
        case UPDATE_USER_REQUEST: {
            return {
                ...state,
                updateAccountRequest: true,
                updateAccountFailed: false,
            };
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                updateAccountRequest: false,
                updateAccountFailed: false,
            };
        }
        case UPDATE_USER_FAILED: {
            return {
                ...state,
                updateAccountRequest: false,
                updateAccountFailed: true,
            };
        }
        default: {
            return state;
        }
    }
}