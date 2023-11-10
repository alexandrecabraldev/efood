import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({

    name:'cart',
    initialState:[],

    reducers:{

        addToCart:(state, action)=>{
            return [...state,action.payload];
        },

        removeCartItem:(state,action)=>{
            return state.filter((item)=>item.title!==action.payload)
        },
    },
})

export const { addToCart, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;