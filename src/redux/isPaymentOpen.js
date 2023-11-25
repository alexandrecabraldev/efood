import { createSlice } from "@reduxjs/toolkit";

export const isPaymentOpen = createSlice({
    name:'isPaymentOpen',
    initialState: false,

    reducers:{
        changePayment: (state, action)=>{
            return state= action.payload
        }
    }
})


export const { changePayment }  = isPaymentOpen.actions;
export default isPaymentOpen.reducer;