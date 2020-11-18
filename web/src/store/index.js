import { configureStore } from "@reduxjs/toolkit"

/**
 * Import All Reducers
 */
import auth from "./ducks/auth"
import shoppingLists from "./ducks/shoppingLists"

/**
 * Redux Thunk configure store
 */
export default configureStore({
    reducer: {
        auth,
        shoppingLists
    }
})