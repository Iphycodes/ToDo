import React, { useRef } from "react";
import { TaskItemBoxContainer, TaskItemDescription, TaskItemIcon, TaskItemIconsContainer } from "./TaskItemBox.styled";
import { IoMdCheckmark } from "react-icons/io";
import { MdDelete, MdUndo } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";
import {useDispatch} from 'react-redux'
import { deleteTask, switchDoTask } from "../../Redux/Tasks/Task.reducer";


export const TaskItemBox = ({id, description, time, isDone}) => {
    const dispatch = useDispatch()
    const reference = useRef()

    const taskItem = {
        id:id,
        description:description,
        time: time,
        isDone: isDone
    }

    const handleClick = () => {

        console.log(reference.current)
        dispatch(switchDoTask(taskItem))
    }


    return (
        <TaskItemBoxContainer isDone={isDone}>
            <TaskItemDescription>
                <h2>{description}</h2>
                <p>{time}</p>
            </TaskItemDescription>

            <TaskItemIconsContainer>
                {
                    isDone ? 
                    <>
                    <TaskItemIcon ref={reference} category='done' onClick={() => handleClick()}>
                        <MdUndo/>
                    </TaskItemIcon>
                    </>
                    :
                    <>
                    <TaskItemIcon category='done' onClick={() => handleClick()}>
                        <IoMdCheckmark/>
                    </TaskItemIcon>
                    <TaskItemIcon category='edit'>
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