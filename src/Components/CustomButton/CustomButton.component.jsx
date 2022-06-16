import React from "react";
import { StyledButton } from "./CustomButton.styled";
import {FcGoogle} from 'react-icons/fc'

export const CustomButton = ({children, ...rest}) => {

    return(
      <StyledButton {...rest}>
          {children}
      </StyledButton>
    )
}