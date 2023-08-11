import { createSlice } from "@reduxjs/toolkit";


const likeSlice = createSlice({
    name:"like",
    initialState:[ 1 , 2 , 3 , 6 , 7 , 8],
    reducers:{
        addItemlike : (state , action)=>{
         return [...state , action.payload]
        },
        removeItemlike : (state , action)=>{
         return state.filter(item => (item !== action.payload))
        }
    }
})

export const {addItemlike , removeItemlike}=likeSlice.actions ;
export default likeSlice.reducer ;