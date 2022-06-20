import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import TASKS_DATA from "./TASKS_DATA";


export const getData = async () => {
    const response = await axios.get('/TASKS_DATA.json').then(res => res.data)
    return response;
}

// ((async () => {
//     const response = await axios.get('/TASKS_DATA.json').then(res => res.data)
//     return response;
// })())

const INITIAL_STATE = {
    taskItems : [],
    itemToEdit: {}
}


const addTaskItem = (taskItems, itemToAdd) => {
    const existingItem = taskItems.find(taskItem => taskItem.description === itemToAdd.description)
    
    return existingItem ? taskItems : [...taskItems, itemToAdd]
}

const editTaskItem = (taskItems, itemToEdit, editedItem) => {
    return taskItems.map(taskItem => taskItem.id === itemToEdit.id ? editedItem : taskItem)

}

const deleteTaskItem = (taskItems, itemToDelete) => {
    return taskItems.filter(taskItem => taskItem.id !== itemToDelete.id)
}

const switchDoneItem = (taskItems, switchDoneItem) => {

    const invertIsDone = !switchDoneItem.isDone
    return taskItems.map(taskItem => taskItem.id === switchDoneItem.id ? {...switchDoneItem, isDone: invertIsDone}: taskItem)
    
}

const TaskSlice = createSlice(
    {
        name: 'tasks',
        initialState: INITIAL_STATE,
        reducers: {
            addTask: (state, action) => {
                state.taskItems = addTaskItem(state.taskItems, action.payload)
            },
            editTask: (state, action) => {
                state.taskItems = editTaskItem(state.taskItems, state.itemToEdit, action.payload)
            },
            deleteTask: (state, action) => {
                state.taskItems = deleteTaskItem(state.taskItems, action.payload)
            },
            switchDoTask: (state, action) => {
                state.taskItems = switchDoneItem(state.taskItems, action.payload)
            },
            setItemToEdit: (state, action) => {
                state.itemToEdit = action.payload;
            }
        }
    }
)

export const {addTask, editTask, deleteTask, switchDoTask, setItemToEdit} = TaskSlice.actions;

export default TaskSlice.reducer;