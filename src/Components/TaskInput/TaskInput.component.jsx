import React, { useEffect, useRef, useState } from "react";
import { ButtonSpan, StyledTaskInput, TaskInputContainer } from "./TaskInput.styled";
import {BsListTask, BsPencilFill, BsPlusCircleFill} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { addTask, editTask, setItemToEdit, setTasks } from "../../Redux/Tasks/Task.reducer";
import { toggleIsNew } from "../../Redux/IsNewStatus/IsNewStatus.reducer";
import { setGloInputValue } from "../../Redux/InputValue/InputValue.reducer";
import { getDocs, collection, doc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/Firebase.config";

export const TaskInput = ({placeholder, name, inputValue, setInputValue}) => {
    const [newTask, setNewTask] = useState('');
    const isNew = useSelector((state) => state.isNewStatus.isNew);
    const [editedTask, setEditedTask] = useState('');
    const inputRef = useRef();
    const dispatch = useDispatch();
    const itemToEdit = useSelector(state => state.tasks.itemToEdit);
    const globalInputValue = useSelector(state => state.inputVal.inputValue)
    const currentUser = useSelector(state => state.user.currentUser)
    
    function handleChange(){
        const inputVal = inputRef.current.value
        dispatch(setGloInputValue(inputVal))
        setInputValue(inputVal)

        isNew ? setNewTask(inputVal) : setEditedTask(inputVal)

    }

    // useEffect(() => {
    //     console.log(newTask)
    // }, [newTask])

    // console.log(Date.now())

    const createNewTask = async () => {
        const newTaskItem = {
            id: Date.now(),
            description : newTask,
            time : "may 12, 2022",
            isDone : false
         }

        dispatch(addTask(newTaskItem))

        const usersCollectionRef = collection(db, 'users')
        const userId = currentUser.id
        console.log(`The currentUser id is ${userId}`)
        const documentRef = doc(usersCollectionRef, userId)
        const taskCollectionRef = collection(documentRef, 'tasks')
        addDoc(taskCollectionRef, newTaskItem)


         inputRef.current.value = ''

         dispatch(setItemToEdit({}))

         const taskItems = await getDocs(taskCollectionRef)

            // console.log(tasks.data().tasks)
        dispatch(setTasks(taskItems.docs.map((doc) => ({...doc.data(), idc: doc.id})))) 
    }

   
   const handleEditTaskItem = () => {
        const editingTaskItem = {
            ...itemToEdit,
            description: editedTask 
        }

        dispatch(editTask(editingTaskItem))

        const usersCollectionRef = collection(db, 'users')
        const userId = currentUser.id
        console.log(`The currentUser id is ${userId}`)
        const documentRef = doc(usersCollectionRef, userId)
        const taskCollectionRef = collection(documentRef, 'tasks')
        
        const taskDoc = doc(documentRef, 'tasks', itemToEdit.idc)

        updateDoc(taskDoc, editingTaskItem)
        


        dispatch(toggleIsNew())

        dispatch(setItemToEdit({}))

        inputRef.current.value = ''
        
   }

   useEffect(() => {
        isNew ? console.log('') : inputRef.current.value = inputValue
   }
       , [inputValue])

    return (
        <>
        <TaskInputContainer>
        <span>
            <BsListTask/>
        </span>
        <StyledTaskInput ref={inputRef} onChange={() => handleChange()} placeholder={placeholder} name={name}/>
        {
            isNew ?
            <ButtonSpan className="new" cat="new" disabled={true}>
                <BsPlusCircleFill onClick={() => inputRef.current.value === '' ? null : createNewTask()}/> 
            </ButtonSpan>
            :
            <ButtonSpan className="edit" cat="edit">
                <IoIosCheckmarkCircle onClick={() => inputRef.current.value === '' ? null : handleEditTaskItem()}/>
            </ButtonSpan>
        }
        </TaskInputContainer>
        </>
    )
}