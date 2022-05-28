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
} from '../actions/auth';
import { TauthState } from '../../components/utils/types';

const initialState: TauthState = {
    account: {},

    isRegistered: false,
    registerAccountRequest: true,
    registerAccountFailed: false,

    isLoggedIn: false,
    loginAccountRequest: false,
    loginAccountFailed: false,

    isForgotReset: false,
    forgotPasswordRequest: false,
    forgotPasswordFailed: false,

    isPasswordReset: false,
    resetPasswordRequest: false,
    resetPasswordFailed: false,

    getUserRequest: false,
    getUserFailed: false,

    updateAccountRequest: false,
    updateAccountFailed: false,

    isLoggedOut: false,
    logoutAccountRequest: false,
    logoutAccountFailed: false,

    updateTokenRequest: false,
    updateTokenFailed: false,
};

export const authReducer = (state = initialState, action: any): TauthState => {
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
                isForgotReset: true,
                forgotPasswordRequest: false,
                forgotPasswordFailed: false
            };
        }
        case FORGOT_PASSWORD_FAILED: {
            return {
                ...state,
                isForgotReset: false,
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
                isPasswordReset: true,
                isForgotReset: false,
                resetPasswordRequest: false,
                resetPasswordFailed: false
            };
        }
        case RESET_PASSWORD_FAILED: {
            return {
                ...state,
                isPasswordReset: false,
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
        case LOGOUT_ACCOUNT_REQUEST: {
            return {
                ...state,
                isLoggedOut: false,
                logoutAccountRequest: true,
                logoutAccountFailed: false,
            };
        }
        case LOGOUT_ACCOUNT_SUCCESS: {
            return {
                ...state,
                account: {},
                isRegistered: false,
                isLoggedIn: false,
                isLoggedOut: true,
                isForgotReset: false,
                isPasswordReset: false,
                logoutAccountRequest: false,
                logoutAccountFailed: false,
            };
        }
        case LOGOUT_ACCOUNT_FAILED: {
            return {
                ...state,
                isLoggedOut: false,
                logoutAccountRequest: false,
                logoutAccountFailed: true,
            };
        }
        case UPDATE_TOKEN_REQUEST: {
            return {
                ...state,
                updateTokenRequest: true,
                updateTokenFailed: false,
            };
        }
        case UPDATE_TOKEN_SUCCESS: {
            return {
                ...state,
                updateTokenRequest: false,
                updateTokenFailed: false,
            };
        }
        case UPDATE_TOKEN_FAILED: {
            return {
                ...state,
                updateTokenRequest: false,
                updateTokenFailed: true,
            };
        }
        default: {
            return state;
        }
    }
}