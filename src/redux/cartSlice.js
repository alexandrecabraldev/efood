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

        emptyCart: ()=>{
            return []
        }
    },
})

export const { addToCart, removeCartItem, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;