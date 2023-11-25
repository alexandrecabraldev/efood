import { createSlice } from "@reduxjs/toolkit";

export const isAdressEditOpen = createSlice({
    name:'isAdressEditOpen',
    initialState: true | null,

    reducers:{
        changeAdressEdit: (state, action)=>{
            return state= action.payload
        }
    }
})


export const { changeAdressEdit }  = isAdressEditOpen.actions;
export default isAdressEditOpen.reducer;