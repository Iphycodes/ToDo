import styled, { css } from "styled-components";

const GoogleStyle = css`
    background-color: #ffffff;
    border: 2px solid #E5E5E5;
    color: #838383;
    padding: 8px;
    
`

const GoogleButton = props => {
    if(props.signInWithGoogle){
        return GoogleStyle;
    }
}

export const StyledButton = styled.button`
width: 100%;
background-color: #06D6A0; 
color: #ffffff;
padding: 10px;
border:  none;
border-radius: 5px;
font-size: 18px;
margin-bottom: 10px;
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 15px;

span{
margin-left: 5px;
}

.icon{
    margin-right: 5px;
    font-size: 26px;
}

${GoogleButton}
`