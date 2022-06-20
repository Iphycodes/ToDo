import React, { useEffect, useRef, useState } from "react";
import { ButtonSpan, StyledTaskInput, TaskInputContainer } from "./TaskInput.styled";
import {BsListTask, BsPlusCircleFill} from 'react-icons/bs'
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/Tasks/Task.reducer";

export const TaskInput = ({placeholder, name}) => {
    const [newTask, setNewTask] = useState('');
    const [isNew, setIsNew] = useState(true);
    const [editTask, setEditTask] = useState('');
    const inputRef = useRef();
    const dispatch = useDispatch();

    
    function handleChange(){
        const inputVal = inputRef.current.value
        isNew ? setNewTask(inputVal) : setEditTask(inputVal)

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
    }

   


   const editingTaskItem = {
        
   }

    return (
        <>
        {/* {console.log(newTask)} */}
        <TaskInputContainer>
        <span>
            <BsListTask/>
        </span>
        <StyledTaskInput ref={inputRef} onChange={() => handleChange()} placeholder={placeholder} name={name}/>
        <ButtonSpan onClick={() => createNewTask()}>
            <BsPlusCircleFill/>
        </ButtonSpan>
        </TaskInputContainer>
        </>
    )
}