import { createSlice } from "@reduxjs/toolkit";


const bookmarkSlice = createSlice({
    name:"bookmark",
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

export const {addItem , removeItem}=bookmarkSlice.actions ;
export default bookmarkSlice.reducer ;