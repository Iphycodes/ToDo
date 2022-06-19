import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import TASKS_DATA from "./TASKS_DATA";


// const getData = async () => {
//     const response = await axios.get('/TASKS_DATA.json').then(res => res.data)
//     return response;
// }

// ((async () => {
//     const response = await axios.get('/TASKS_DATA.json').then(res => res.data)
//     return response;
// })())

const INITIAL_STATE = {
    taskItems : TASKS_DATA
}


const addTaskItem = (taskItems, itemToAdd) => {
    const existingItem = taskItems.find(taskItem => taskItem.description === itemToAdd.description)
    
    return existingItem ? null : [...taskItems, itemToAdd]
}

const editTaskItem = (taskItems, itemToEdit) => {
    return taskItems.map(taskItem => taskItem.id === itemToEdit.id ? {...itemToEdit, description:{description}, time:{time}} : taskItem)

}

const deleteTaskItem = (taskItems, itemToDelete) => {
    return taskItems.filter(taskItem => taskItem.id !== itemToDelete.id)
}

const doneTaskItem = (taskItems, itemDone) => {
    return taskItems.map(taskItem => taskItem.id === itemDone.id ? {...itemDone, isDone: true} : taskItem)
}

const undoTaskItem = (taskItem, itemToUndo) => {
    return taskItem.map(taskItem => taskItem.id === itemToUndo.id ? {...itemToUndo, isDone: false} : taskItem)
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
                state.taskItems = editTaskItem(state.taskItems, action.payload)
            },
            deleteTask: (state, action) => {
                state.taskItems = deleteTaskItem(state.taskItems, action.payload)
            },
            doTask: (state, action) => {
                state.taskItems = doneTaskItem(state.taskItems, action.payload)
            },
            undoTask: (state, action) => {
                state.taskItems = undoTaskItem(state.taskItems, action.payload)
            }
        }
    }
)

export const {addTask, deleteTask, editTask, doTask, undoTask} = TaskSlice.actions

export default TaskSlice.reducer;