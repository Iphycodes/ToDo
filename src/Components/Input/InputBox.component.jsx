import React from "react";
import { InputContainer, StyledInput } from "./InputBox.styled";


export const InputBox = ({placeholder, type, name, value, children, handleChange}) => {

    return (

        <InputContainer>
            <StyledInput 
            className="form-input"
            placeholder={placeholder}
            type={type}
            name={name}
            value={value}
            onChange = {handleChange}
            />
            <span>
                {children}
            </span>
        </InputContainer>
       
               
    )
}