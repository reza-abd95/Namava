import { configureStore } from "@reduxjs/toolkit";
import bookmarkReducer from "./bookmarkSlice";
import likeReducer from "./likeSlice";

const store = configureStore({
    reducer:{
        bookmark : bookmarkReducer ,
        // like : likeReducer
    }
})


export default store ;