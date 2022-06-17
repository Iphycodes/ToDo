import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./Tasks/Task.reducer";


export const store = configureStore({
    reducer: {
        tasks: TaskReducer
    }
})