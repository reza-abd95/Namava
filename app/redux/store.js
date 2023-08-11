import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmarkSlice";
import likeSlice from "./likeSlice";

const store = configureStore({
    reducer:{
        bookmark : bookmarkSlice ,
        like : likeSlice ,
    }
})


export default store ;