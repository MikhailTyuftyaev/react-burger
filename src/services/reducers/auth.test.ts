import { authReducer as reducer, initialState } from "./auth";
import * as types from '../constants/auth'
import {TAuthAction} from '../actions/auth'

const userEmail = "test@mail.ru";
const userName =  "Test Testov";

describe('Auth reducer', () => {
    it('should return the initial state', () => {
        expect(
          reducer(initialState, {} as TAuthAction)).toEqual(initialState)
    })
    it('should handle REGISTER_ACCOUNT_REQUEST', () => {
        expect(
          reducer(initialState, {
            type: types.REGISTER_ACCOUNT_REQUEST
          }))
          .toEqual({
            ...initialState,
            isRegistered: false,
            registerAccountRequest: true,
            registerAccountFailed: false
        })
    })
    it('should handle REGISTER_ACCOUNT_SUCCESS', () => {
        expect(
          reducer(initialState, {
            type: types.REGISTER_ACCOUNT_SUCCESS
          }))
          .toEqual({
            ...initialState,
            isRegistered: true,
            registerAccountRequest: false,
            registerAccountFailed: false
        })
    })
    it('should handle REGISTER_ACCOUNT_FAILED', () => {
        expect(
          reducer(initialState, {
            type: types.REGISTER_ACCOUNT_FAILED
          }))
          .toEqual({
            ...initialState,
            isRegistered: false,
            registerAccountRequest: false,
            registerAccountFailed: true
        })
    })
    it('should handle LOGIN_ACCOUNT_REQUEST', () => {
        expect(
          reducer(initialState, {
            type: types.LOGIN_ACCOUNT_REQUEST
          }))
          .toEqual({
            ...initialState,
            loginAccountRequest: true,
            loginAccountFailed: false,
        })
    })
    it('should handle LOGIN_ACCOUNT_SUCCESS', () => {
        expect(
          reducer(initialState, {
            type: types.LOGIN_ACCOUNT_SUCCESS
          }))
          .toEqual({
            ...initialState,
            isLoggedIn: true,
            loginAccountRequest: false,
            loginAccountFailed: false,
        })
    })
    it('should handle LOGIN_ACCOUNT_FAILED', () => {
        expect(
          reducer(initialState, {
            type: types.LOGIN_ACCOUNT_FAILED
          }))
          .toEqual({
            ...initialState,
            loginAccountRequest: false,
            loginAccountFailed: true,
        })
    })
    it('should handle SAVE_REGISTER_ACCOUNT', () => {
        expect(
          reducer(initialState, {
            type: types.SAVE_REGISTER_ACCOUNT,
            email: userEmail,
            name: userName
          }))
          .toEqual({
            ...initialState,
            account: {
                "email": userEmail,
                "name": userName
            }
        })
    })
    it('should handle FORGOT_PASSWORD_REQUEST', () => {
        expect(
          reducer(initialState, {
            type: types.FORGOT_PASSWORD_REQUEST
          }))
          .toEqual({
            ...initialState,
            forgotPasswordRequest: true,
            forgotPasswordFailed: false
        })
    })
    it('should handle FORGOT_PASSWORD_SUCCESS', () => {
        expect(
          reducer(initialState, {
            type: types.FORGOT_PASSWORD_SUCCESS
          }))
          .toEqual({
            ...initialState,
            isForgotReset: true,
            forgotPasswordRequest: false,
            forgotPasswordFailed: false
        })
    })
    it('should handle FORGOT_PASSWORD_FAILED', () => {
        expect(
          reducer(initialState, {
            type: types.FORGOT_PASSWORD_FAILED
          }))
          .toEqual({
            ...initialState,
            isForgotReset: false,
            forgotPasswordRequest: false,
            forgotPasswordFailed: true
        })
    })
    it('should handle RESET_PASSWORD_REQUEST', () => {
        expect(
          reducer(initialState, {
            type: types.RESET_PASSWORD_REQUEST
          }))
          .toEqual({
            ...initialState,
            resetPasswordRequest: true,
            resetPasswordFailed: false
        })
    })
    it('should handle RESET_PASSWORD_SUCCESS', () => {
        expect(
          reducer(initialState, {
            type: types.RESET_PASSWORD_SUCCESS
          }))
          .toEqual({
            ...initialState,
            isPasswordReset: true,
            isForgotReset: false,
            resetPasswordRequest: false,
            resetPasswordFailed: false
        })
    })
    it('should handle RESET_PASSWORD_FAILED', () => {
        expect(
          reducer(initialState, {
            type: types.RESET_PASSWORD_FAILED
          }))
          .toEqual({
            ...initialState,
            isPasswordReset: false,
            resetPasswordRequest: false,
            resetPasswordFailed: true
        })
    })
    it('should handle GET_USER_REQUEST', () => {
        expect(
          reducer(initialState, {
            type: types.GET_USER_REQUEST
          }))
          .toEqual({
            ...initialState,
            getUserRequest: true,
            getUserFailed: false
        })
    })
    it('should handle GET_USER_SUCCESS', () => {
        expect(
          reducer(initialState, {
            type: types.GET_USER_SUCCESS
          }))
          .toEqual({
            ...initialState,
            isLoggedIn: true,
            getUserRequest: false,
            getUserFailed: false,
        })
    })
    it('should handle GET_USER_FAILED', () => {
        expect(
          reducer(initialState, {
            type: types.GET_USER_FAILED
          }))
          .toEqual({
            ...initialState,
            getUserRequest: false,
            getUserFailed: true,
        })
    })
    it('should handle UPDATE_USER_REQUEST', () => {
        expect(
          reducer(initialState, {
            type: types.UPDATE_USER_REQUEST
          }))
          .toEqual({
            ...initialState,
            updateAccountRequest: true,
            updateAccountFailed: false,
        })
    })
    it('should handle UPDATE_USER_SUCCESS', () => {
        expect(
          reducer(initialState, {
            type: types.UPDATE_USER_SUCCESS
          }))
          .toEqual({
            ...initialState,
            updateAccountRequest: false,
            updateAccountFailed: false,
        })
    })
    it('should handle UPDATE_USER_FAILED', () => {
        expect(
          reducer(initialState, {
            type: types.UPDATE_USER_FAILED
          }))
          .toEqual({
            ...initialState,
            updateAccountRequest: false,
            updateAccountFailed: true,
        })
    })
    it('should handle LOGOUT_ACCOUNT_REQUEST', () => {
        expect(
          reducer(initialState, {
            type: types.LOGOUT_ACCOUNT_REQUEST
          }))
          .toEqual({
            ...initialState,
            isLoggedOut: false,
            logoutAccountRequest: true,
            logoutAccountFailed: false,
        })
    })
    it('should handle LOGOUT_ACCOUNT_SUCCESS', () => {
        expect(
          reducer(initialState, {
            type: types.LOGOUT_ACCOUNT_SUCCESS
          }))
          .toEqual({
            ...initialState,
            account: {
                name: "",
                email: ""
            },
            isRegistered: false,
            isLoggedIn: false,
            isLoggedOut: true,
            isForgotReset: false,
            isPasswordReset: false,
            logoutAccountRequest: false,
            logoutAccountFailed: false,
        })
    })
    it('should handle LOGOUT_ACCOUNT_FAILED', () => {
        expect(
          reducer(initialState, {
            type: types.LOGOUT_ACCOUNT_FAILED
          }))
          .toEqual({
            ...initialState,
            isLoggedOut: false,
            logoutAccountRequest: false,
            logoutAccountFailed: true,
        })
    })
    it('should handle UPDATE_TOKEN_REQUEST', () => {
        expect(
          reducer(initialState, {
            type: types.UPDATE_TOKEN_REQUEST
          }))
          .toEqual({
            ...initialState,
            updateTokenRequest: true,
            updateTokenFailed: false,
        })
    })
    it('should handle UPDATE_TOKEN_SUCCESS', () => {
        expect(
          reducer(initialState, {
            type: types.UPDATE_TOKEN_SUCCESS
          }))
          .toEqual({
            ...initialState,
            updateTokenRequest: false,
            updateTokenFailed: false,
        })
    })
    it('should handle UPDATE_TOKEN_FAILED', () => {
        expect(
          reducer(initialState, {
            type: types.UPDATE_TOKEN_FAILED
          }))
          .toEqual({
            ...initialState,
            updateTokenRequest: false,
            updateTokenFailed: true,
        })
    })
})