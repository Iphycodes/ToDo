import React, { useEffect, useRef, useState } from "react";
import { ButtonSpan, StyledTaskInput, TaskInputContainer } from "./TaskInput.styled";
import {BsListTask, BsPencilFill, BsPlusCircleFill} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { addTask, editTask, setItemToEdit } from "../../Redux/Tasks/Task.reducer";
import {AiFillPlusCircle} from 'react-icons/ai'
import { toggleIsNew } from "../../Redux/IsNewStatus/IsNewStatus.reducer";
import { setGloInputValue } from "../../Redux/InputValue/InputValue.reducer";

export const TaskInput = ({placeholder, name, inputValue, setInputValue}) => {
    const [newTask, setNewTask] = useState('');
    const isNew = useSelector((state) => state.isNewStatus.isNew);
    const [editedTask, setEditedTask] = useState('');
    const inputRef = useRef();
    const dispatch = useDispatch();
    const itemToEdit = useSelector(state => state.tasks.itemToEdit);
    const globalInputValue = useSelector(state => state.inputVal.inputValue)
    
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

    const createNewTask = () => {
        const newTaskItem = {
            id : Date.now(),
            description : newTask,
            time : "may 12, 2022",
            isDone : false
         }

         dispatch(addTask(newTaskItem))

         inputRef.current.value = ''

         dispatch(setItemToEdit({}))
    }

   
   const handleEditTaskItem = () => {
        const editingTaskItem = {
            ...itemToEdit,
            description: editedTask 
        }

        dispatch(editTask(editingTaskItem))


        dispatch(toggleIsNew())

        dispatch(setItemToEdit({}))

        inputRef.current.value = ''
        
   }

   useEffect(() => {
       isNew ? 
    console.log('show is new')
       :
    
    inputRef.current.value = inputValue
   }, [inputValue])

    return (
        <>
        <TaskInputContainer>
        <span>
            <BsListTask/>
        </span>
        <StyledTaskInput ref={inputRef} onChange={() => handleChange()} placeholder={placeholder} name={name}/>
        {
            isNew ?
            <ButtonSpan className="new" cat="new">
                <BsPlusCircleFill onClick={() => createNewTask()}/> 
            </ButtonSpan>
            :
            <ButtonSpan className="edit" cat="edit">
                <IoIosCheckmarkCircle onClick={() => handleEditTaskItem()}/>
            </ButtonSpan>
        }
        </TaskInputContainer>
        </>
    )
}