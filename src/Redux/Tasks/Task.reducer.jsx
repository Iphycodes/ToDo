import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const INITIAL_STATE = {
    taskItems : [],
    itemToEdit: {}
}


const addTaskItem = (taskItems, itemToAdd) => {

    console.log(taskItems)
    const existingItem = taskItems.find(taskItem => taskItem.description === itemToAdd.description)
    
    

    if(existingItem){

        return taskItems

    } else{

        // const taskDoc = doc(db, 'users', itemToEdit.id)

        // await updateDoc(taskDoc, editedItem)

        
        // addDoc(taskCollectionRef, itemToAdd)

        

        
        return [...taskItems, itemToAdd]
       
    } 


}

const editTaskItem = (taskItems, itemToEdit, editedItem) => {

    // const taskDoc = doc(documentRef, 'tasks', itemToEdit.idc)

    // updateDoc(taskDoc, editedItem)
    return taskItems.map(taskItem => taskItem.id === itemToEdit.id ? editedItem : taskItem)

}

const deleteTaskItem = (taskItems, itemToDelete) => {

    // const taskDoc = doc(documentRef, 'tasks', itemToDelete.idc)

    // deleteDoc(taskDoc)
    const newTaskItem = taskItems.filter(taskItem => taskItem.id !== itemToDelete.id)
    return newTaskItem
}

const switchDoneItem = (taskItems, switchDoneItem) => {

    const invertIsDone = !switchDoneItem.isDone

    // const taskDoc = doc(documentRef, 'tasks', switchDoneItem.idc)

    // updateDoc(taskDoc, {isDone: invertIsDone})

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
            },
            setTasks: (state, action) => {
                state.taskItems = action.payload;
            }
        }
    }
)

export const {addTask, editTask, deleteTask, switchDoTask, setItemToEdit, setTasks} = TaskSlice.actions;

export default TaskSlice.reducer;