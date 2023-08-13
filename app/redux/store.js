import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import {combineReducers, configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./bookmarkSlice";
import likeSlice from "./likeSlice";
import  storage  from "redux-persist/lib/storage"
import { persistReducer } from "redux-persist";

const persistConfig = {
    key: 'root',
    storage,
  };
const reducer = combineReducers({
    bookmark : bookmarkSlice ,
    like : likeSlice ,
})
const persistedReducer = persistReducer(persistConfig, reducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  