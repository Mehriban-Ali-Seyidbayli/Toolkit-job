import { combineReducers, configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";


const rootReducer = combineReducers({
    jobSlice
})

export default configureStore({ reducer: rootReducer });