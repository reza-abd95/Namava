import { createSlice } from "@reduxjs/toolkit";


const likeSlice = createSlice({
    name:"like",
    initialState:[ 1 , 2 , 3 , 6 , 7 , 8],
    reducers:{
        togglelike : (state , action)=>{
            const index = state.findIndex(item => item == action.payload)
            if (index == -1){
                state.push(action.payload)
            }else{
                state.splice(index , 1)
            }
        }}
    
})

export const {togglelike}=likeSlice.actions ;
export default likeSlice.reducer ;