import React from "react";
import { TaskItemBoxContainer, TaskItemDescription, TaskItemIcon, TaskItemIconsContainer } from "./TaskItemBox.styled";
import { IoMdCheckmark } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { BsPencilFill } from "react-icons/bs";

export const TaskItemBox = ({description, time, isDone}) => {

    return (
        <TaskItemBoxContainer isDone={isDone}>
            <TaskItemDescription>
                <h2>{description}</h2>
                <p>{time}</p>
            </TaskItemDescription>

            <TaskItemIconsContainer>
                <TaskItemIcon category='done'>
                        <IoMdCheckmark/>
                </TaskItemIcon>
                <TaskItemIcon category='edit'>
                        <BsPencilFill/>
                </TaskItemIcon>
                <TaskItemIcon category='delete'>
                        <MdDelete/>
                </TaskItemIcon>
            </TaskItemIconsContainer>
        </TaskItemBoxContainer>
    )
}