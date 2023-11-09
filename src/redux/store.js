import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
// import apiDataSlice from "./apiDataSlice"
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiStore } from "./apiStore";

export const store = configureStore({
    reducer:{
        cart:cartSlice,
        [apiStore.reducerPath]: apiStore.reducer,

    },

    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiStore.middleware)
})

setupListeners(store.dispatch);