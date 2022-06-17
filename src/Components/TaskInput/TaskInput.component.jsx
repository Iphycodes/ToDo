import React from "react";
import { ButtonSpan, StyledTaskInput, TaskInputContainer } from "./TaskInput.styled";
import {BsListTask, BsPlusCircleFill} from 'react-icons/bs'

export const TaskInput = ({placeholder, name, value}) => (
    <TaskInputContainer>
        <span>
            <BsListTask/>
        </span>
        <StyledTaskInput placeholder={placeholder} name={name} value={value}/>
        <ButtonSpan>
            <BsPlusCircleFill/>
        </ButtonSpan>
    </TaskInputContainer>
)