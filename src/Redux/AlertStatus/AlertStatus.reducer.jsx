import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    alertStatus: {
        message: '',
        status: ''
    },
    signUpAlertStatus: {
        signUpAlertMessage: '',
        signUpStatus: ''
    }
}


const AlertStatusSlice = createSlice({
    name: 'alertStatus',
    initialState: INITIAL_STATE,
    reducers: {
        setAlertStatus : (state, action) => {
            state.alertStatus = action.payload;
        },
        setSignUpAlertStatus : (state, action) => {
            state.signUpAlertStatus = action.payload
        }
    }
})

export const {setAlertStatus, setSignUpAlertStatus} = AlertStatusSlice.actions

export default AlertStatusSlice.reducer;