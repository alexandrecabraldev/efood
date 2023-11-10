import { createSlice } from "@reduxjs/toolkit";

export const isCartOpen = createSlice({
    name:'isCartOpen',
    initialState: false,

    reducers:{
        changeCart: (state, action)=>{
            return state= action.payload
        }
    }
})


export const { changeCart }  = isCartOpen.actions;
export default isCartOpen.reducer;