import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: []
  }


const INITIAL_STATE = {
    currentUser: null
}


const userSlice = createSlice(
    {
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        getCurrentUser: (state) => {
            return state.currentUser
        }
    }
}
)

export const {setCurrentUser, getCurrentUser} = userSlice.actions;

export const persistedUserReducer = persistReducer(persistConfig, userSlice.reducer);