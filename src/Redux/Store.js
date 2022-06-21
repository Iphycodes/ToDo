import { configureStore } from "@reduxjs/toolkit";
import InputValueReducer from "./InputValue/InputValue.reducer";
import IsNewStatusReducer from "./IsNewStatus/IsNewStatus.reducer";
import TaskReducer from "./Tasks/Task.reducer";


export const store = configureStore({
    reducer: {
        tasks: TaskReducer,
        isNewStatus: IsNewStatusReducer,
        inputVal: InputValueReducer
    }
})