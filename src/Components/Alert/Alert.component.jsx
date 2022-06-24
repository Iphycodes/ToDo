import React from 'react'
import { AlertContainer } from './Alert.styled'


export const Alert = ({message, status}) => {

    return (
        <AlertContainer status={status} message={message}>
            <p>{message}</p>
        </AlertContainer>
    )
}