import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

import { setupListeners } from "@reduxjs/toolkit/query";
import { apiStore } from "./apiStore";
import { isCartOpen } from "./isCartOpen";
import { isPaymentOpen } from "./isPaymentOpen";
import { isAdressEditOpen } from "./isAdressEditOpen"

export const store = configureStore({
    reducer:{
        cart:cartSlice,
        [apiStore.reducerPath]: apiStore.reducer,
        isCartOpen: isCartOpen.reducer,
        isPaymentOpen: isPaymentOpen.reducer,
        isAdressEditOpen: isAdressEditOpen.reducer,

    },

    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiStore.middleware)
})

setupListeners(store.dispatch);