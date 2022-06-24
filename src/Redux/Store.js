import { configureStore } from "@reduxjs/toolkit";
import AlertStatusReducer from "./AlertStatus/AlertStatus.reducer";
import InputValueReducer from "./InputValue/InputValue.reducer";
import IsNewStatusReducer from "./IsNewStatus/IsNewStatus.reducer";
import TaskReducer from "./Tasks/Task.reducer";
import UserReducer from "./User/User.reducer";


export const store = configureStore({
    reducer: {
        tasks: TaskReducer,
        isNewStatus: IsNewStatusReducer,
        user: UserReducer,
        alertStatus: AlertStatusReducer,
        inputVal: InputValueReducer
        
    }
})