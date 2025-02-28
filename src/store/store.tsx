import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "./shoppingSlice";
import userReducer from "./useSlice";
import todoList from "./todoSlice"

export const store= configureStore({
    reducer:{
        shopping: shoppingReducer,
        user:userReducer,
        todo:todoList
    }
});
export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch =typeof store.dispatch;