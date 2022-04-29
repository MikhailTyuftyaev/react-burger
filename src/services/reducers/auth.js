import {
    REGISTER_ACCOUNT_REQUEST,
    REGISTER_ACCOUNT_SUCCESS,
    REGISTER_ACCOUNT_FAILED,

    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILED
} from '../actions/auth';

const initialState = {
    registerAccountRequest: true,
    registerAccountFailed: false,

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