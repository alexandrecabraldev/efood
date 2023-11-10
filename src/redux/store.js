import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { apiStore } from "./apiStore";
import { isCartOpen } from "./isCartOpen";

export const store = configureStore({
    reducer:{
        cart:cartSlice,
        [apiStore.reducerPath]: apiStore.reducer,
        isCartOpen: isCartOpen.reducer,
        // cartTotalPrice:cartTotalPrice.reducer,

    },

    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiStore.middleware)
})

setupListeners(store.dispatch);