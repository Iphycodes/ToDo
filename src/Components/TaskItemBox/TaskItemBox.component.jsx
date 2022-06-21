import React, { useEffect, useRef, useState } from "react";
import { TaskItemBoxContainer, TaskItemDescription, TaskItemIcon, TaskItemIconsContainer } from "./TaskItemBox.styled";
import { IoMdCheckmark } from "react-icons/io";
import { MdDelete, MdUndo } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import {useDispatch} from 'react-redux'
import { deleteTask, setItemToEdit, switchDoTask } from "../../Redux/Tasks/Task.reducer";
import { useSelector } from "react-redux";
import { toggleIsNew } from "../../Redux/IsNewStatus/IsNewStatus.reducer";

export const TaskItemBox = ({id, description, time, isDone, setInputValue, inputValue, isEdit}) => {
    const dispatch = useDispatch()
    const isNew = useSelector(state => state.isNewStatus.isNew)


    const taskItem = {
        id:id,
        description:description,
        time: time,
        isDone: isDone
    }

    

    const handleClick = () => {

        dispatch(switchDoTask(taskItem))
    }


    return (
        
        <TaskItemBoxContainer isDone={isDone} isEdit={isEdit}>
            
            <TaskItemDescription>
                <h2>{description}</h2>
                <p>{time}</p>
            </TaskItemDescription>

            <TaskItemIconsContainer>
                {
                    isDone ? 
                    <>
                    <TaskItemIcon category='done' onClick={() => handleClick()}>
                        <MdUndo/>
                    </TaskItemIcon>
                    </>
                    :
                    <>
                    <TaskItemIcon category='done' onClick={() => handleClick()}>
                        <IoMdCheckmark/>
                    </TaskItemIcon>
                    <TaskItemIcon category='edit' onClick={() => {
                        if(isNew){
                            dispatch(toggleIsNew())
                        }
                        
                        dispatch(setItemToEdit(taskItem))
                        setInputValue(description)



                        }}>
                        <BsPencilFill/>
                    </TaskItemIcon>
                    </>
                }
                <TaskItemIcon category='delete' onClick={() => dispatch(deleteTask(taskItem)) }>
                        <MdDelete/>
                </TaskItemIcon>
            </TaskItemIconsContainer>
        </TaskItemBoxContainer>
    )
}