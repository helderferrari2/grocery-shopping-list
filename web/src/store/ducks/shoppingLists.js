import { createAction, createReducer } from "@reduxjs/toolkit";
import api from '../../services/api'

/**
 * State
 */
const INITIAL_STATE = {
    items: [],
};

/**
 * Actions
 */
export const action_index = createAction("FETCH_ALL_LISTS");
export const action_store = createAction("STORE_LIST");
export const action_update = createAction("UPDATE_LIST");
export const action_delete = createAction("DELETE_LIST");

/**
 * Reducers
 */
export default createReducer(INITIAL_STATE, {
    [action_index.type]: (state, action) => ({ ...state, items: [...action.payload] }),
    [action_store.type]: (state, action) => ({ ...state, items: [...state.items, action.payload] }),
    [action_update.type]: (state, action) => ({ ...state, items: [...state.items.map(item => (item.id === parseInt(action.id) ? { ...item, ...action.update } : item))] }),
    [action_delete.type]: (state, action) => ({ ...state, items: [...state.items.filter(({ id }) => id !== parseInt(action.payload))] })
});

/**
 * API
 */
export const fetchAllLists = () => {
    return dispatch => {
        api.get('/shopping-lists')
            .then(res => dispatch(action_index(res.data.data)))
            .catch(console.log)
    }
}

export const storeList = (payload) => {
    return dispatch => {
        api.post('/shopping-lists', payload)
            .then(res => dispatch(action_store(res.data.data)))
            .catch(console.log)
    }
}

export const updateList = () => {
    return dispatch => {
        api.get('/shopping-lists')
            .then(res => dispatch(action_update(res.data.data)))
            .catch(console.log)
    }
}

export const deleteList = (id) => {
    return dispatch => {
        api.delete('/shopping-lists/' + id)
            .then(res => dispatch(action_delete(id)))
            .catch(console.log)
    }
}
