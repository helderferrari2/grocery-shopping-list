import { configureStore } from "@reduxjs/toolkit"

/**
 * Import All Reducers
 */
import shoppingLists from "./ducks/shoppingLists"

/**
 * Redux Thunk configure store
 */
export default configureStore({
    reducer: {
        shoppingLists
    }
})