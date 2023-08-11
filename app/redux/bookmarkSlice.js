import { createSlice } from "@reduxjs/toolkit";


const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState:[ 1 , 2 , 3],
    reducers:{
        addItemlike : (state , action)=>{
         return [...state , action.payload]
        },
        removeItemlike : (state , action)=>{
         return state.filter(item => (item !== action.payload))
        }
    }
})

export const {addItemlike , removeItemlike}=bookmarkSlice.actions ;
export default bookmarkSlice.reducer ;