import { configureStore } from "@reduxjs/toolkit";
import AlertStatusReducer from "./AlertStatus/AlertStatus.reducer";
import InputValueReducer from "./InputValue/InputValue.reducer";
import IsNewStatusReducer from "./IsNewStatus/IsNewStatus.reducer";
import TaskReducer from "./Tasks/Task.reducer";
import {persistedUserReducer} from "./User/User.reducer";
import persistStore from "redux-persist/es/persistStore";


export const store = configureStore({
    reducer: {
        tasks: TaskReducer,
        isNewStatus: IsNewStatusReducer,
        user: persistedUserReducer,
        alertStatus: AlertStatusReducer,
        inputVal: InputValueReducer
        
    }
})


export const persistor = persistStore(store)