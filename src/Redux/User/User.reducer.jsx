import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


const INITIAL_STATE = {
    currentUser: null
}

export const GetUsers = () => {
    const dispatch = useDispatch()

    console.log(dispatch(getCurrentUser()))
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

export default userSlice.reducer;