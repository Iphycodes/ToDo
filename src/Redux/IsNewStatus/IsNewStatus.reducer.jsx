import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    isNew: true
}


const IsNewStatusSlice = createSlice(
{
    name: 'isNewStatus',
    initialState: INITIAL_STATE,
    reducers: {
        toggleIsNew : (state) => {
            state.isNew = !state.isNew;
        }
    }
})

export const {toggleIsNew} = IsNewStatusSlice.actions;

export default IsNewStatusSlice.reducer;