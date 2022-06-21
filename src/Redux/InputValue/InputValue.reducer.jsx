import { createSlice } from "@reduxjs/toolkit";


const INITIAL_STATE = {
    inputValue: ''
}



const InputSlice = createSlice(
    {
        name: 'inputValue',
        initialState: INITIAL_STATE,
        reducers: {
            setGloInputValue : (state, action) => {
                state.inputValue = action.payload;
            }
        }
    }
)

export const {setGloInputValue} = InputSlice.actions

export default InputSlice.reducer;