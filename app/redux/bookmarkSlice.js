import { createSlice } from "@reduxjs/toolkit";


const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState:[],
    reducers:{
        toggle : (state , action)=>{
            const index = state.findIndex(item => item == action.payload)
            if (index == -1){
                state.push(action.payload)
            }else{
                state.splice(index , 1)
            }
        }}
})

export const {toggle}=bookmarkSlice.actions ;
export default bookmarkSlice.reducer ;