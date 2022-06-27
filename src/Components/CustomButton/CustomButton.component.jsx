import React from "react";
import { StyledButton } from "./CustomButton.styled";
import {FcGoogle} from 'react-icons/fc'
import { LoadingImage } from "./CustomButton.styled";

export const CustomButton = ({children, showIcon, ...rest}) => {

    return(
      <StyledButton {...rest}>
          {children} {showIcon ? <span><LoadingImage src={'./Images/spin.gif'}/></span> : null}
      </StyledButton>
    )
}