import React from "react";
import { StyledInput } from "./InputBox.styled";


export const InputBox = ({placeholder, type, name, value}) => {

    return (
       <StyledInput 
       className="form-input"
       placeholder={placeholder}
       type={type}
       name={name}
       value={value}
       />        
    )
}