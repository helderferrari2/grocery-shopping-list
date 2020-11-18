import { createAction, createReducer } from "@reduxjs/toolkit";
import api from '../../services/api'

/**
 * State
 */
const INITIAL_STATE = {
    isAuthenticated: false,
    user: {}
};

/**
 * Actions
 */
export const action_login = createAction("LOGIN");
export const action_logout = createAction("LOGOUT");
export const action_check_user_auth = createAction("CHECK_USER_AUTH");

/**
 * Reducers
 */
export default createReducer(INITIAL_STATE, {
    [action_login.type]: (state, action) => ({ ...state, user: action.payload, isAuthenticated: true }),
    [action_check_user_auth.type]: (state, action) => ({ ...state, user: action.payload, isAuthenticated: true }),
    [action_logout.type]: (state, action) => ({ ...state, user: {}, isAuthenticated: false }),
});

/**
 * API
 */
export const login = data => {
    return dispatch => {
        api.post('auth/login', data)
            .then(res => {
                setToken(res.headers.authorization)
                dispatch(action_login(res.data.data))
            })
            .catch(console.log)
    }
}

export const checkUserAuth = () => {
    return dispatch => {
        api.get('auth/me')
            .then(res => {
                dispatch(action_check_user_auth(res.data.data))
            })
            .catch(err => {
                clearLocalStorage()
                dispatch(action_logout)
            })
    }
}

export const logout = () => {
    clearLocalStorage()
    return dispatch => {
        dispatch(action_logout)
        return Promise.resolve();
    }
}

/**
 * Local Storage
 */
const TOKEN_KEY = "@grocery-token";
export const getToken = () => localStorage.getItem(TOKEN_KEY);
const setToken = token => localStorage.setItem(TOKEN_KEY, token);
const clearLocalStorage = () => localStorage.clear();
