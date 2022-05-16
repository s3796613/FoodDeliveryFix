import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./screen/home/HomeSlice";

export default store = configureStore({
    reducer: {
        home: homeReducer
    }
})

//Step 1: Create store.js and declare the reducer
//Step 2: Create a Slice.js to declare actions and reducers