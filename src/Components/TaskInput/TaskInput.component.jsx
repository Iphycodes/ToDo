import React, { useEffect, useRef, useState } from "react";
import { ButtonSpan, StyledTaskInput, TaskInputContainer } from "./TaskInput.styled";
import {BsListTask, BsPencilFill, BsPlusCircleFill} from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { addTask, editTask } from "../../Redux/Tasks/Task.reducer";
import {AiFillPlusCircle} from 'react-icons/ai'

export const TaskInput = ({placeholder, name, inputValue}) => {
    const [newTask, setNewTask] = useState('');
    const isNew = useSelector((state) => state.isNewStatus.isNew);
    const [editedTask, setEditedTask] = useState('');
    const inputRef = useRef();
    const dispatch = useDispatch();
    const itemToEdit = useSelector(state => state.tasks.itemToEdit);

    
    function handleChange(){
        const inputVal = inputRef.current.value
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
    }

   
   const handleEditTaskItem = () => {
        const editingTaskItem = {
            ...itemToEdit,
            description: editedTask 
        }

        dispatch(editTask(editingTaskItem))

        
   }

   useEffect(() => {
       isNew ? 
    //    inputRef.current.value = ''
    console.log('show is new')
       :
    //    inputRef.current.value = inputValue
    inputRef.current.value = inputValue
   }, [inputValue])

    return (
        <>
        {/* {console.log(newTask)} */}
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