import React from 'react'
import { StyledCheckBox } from './CheckBox.styled'


export const CheckBox = ({children}) => (

    <StyledCheckBox>
        <input 
        type='checkbox'
        name= 'remember'
        value='rem'
        />
        <span>
            {children}
        </span>
    </StyledCheckBox>
)