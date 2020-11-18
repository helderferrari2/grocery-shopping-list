import { createAction, createReducer } from "@reduxjs/toolkit";
import api from '../../services/api'

/**
 * Fluxo
 *
 * Component chama a action
 * Action chama a funcao api
 * Reducer altera o initial_state
 * E todo mundo fica feliz
 *
 */

//Deletar quando integrar ao backend
const newList = (text) => ({
    id: Math.floor(Math.random() * 999),
    name: text,
    completed: false,
});

/**
 * State
 */
const INITIAL_STATE = {
    items: [],
};

/**
 * Actions
 */
export const fetchList = createAction("FETCH_LIST");
export const storeList = createAction("STORE_LIST");
export const deleteList = createAction("DELETE_LIST");

/**
 * Reducers
 */
export default createReducer(INITIAL_STATE, {
    [fetchList.type]: (state, action) => ({ ...state, items: [...action.payload] }),
    [storeList.type]: (state, action) => ({
        ...state,
        items: [...state.items, newList(action.payload)],
    }),
    [deleteList.type]: (state, action) => ({ ...state }),
});

//API CALLS
export const fetchAll = () => {
    return dispatch => {
        api.get('https://run.mocky.io/v3/74c18a42-3937-4605-8363-5fb2a3fcb4a6')
            .then(res => dispatch(fetchList(res.data)))
            .catch(console.log)
    }
}
