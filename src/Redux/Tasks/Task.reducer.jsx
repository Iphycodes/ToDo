import { createSlice } from "@reduxjs/toolkit";
import TASKS_DATA from "./TASKS_DATA";


const INITIAL_STATE = {
    TaskItem : TASKS_DATA
}


const TaskSlice = createSlice(
    {
        name: 'tasks',
        initialState: INITIAL_STATE,
        reducers: {

        }
    }
)

export default TaskSlice.reducer;