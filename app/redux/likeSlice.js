import { createSlice } from "@reduxjs/toolkit";


const likeSlice = createSlice({
    name:"like",
    initialState:[ 1 , 2 , 3],
    reducers:{
        addItem : (state , action)=>{
         return [...state , action.payload]
        },
        removeItem : (state , action)=>{
         return state.filter(item => (item !== action.payload))
        }
    }
})

export const {addItem , removeItem}=likeSlice.actions ;
export default likeSlice.reducer ;