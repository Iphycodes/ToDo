import styled from "styled-components";
import { css } from "styled-components";

const checkBox = css`
    border: none;
    background-color: transparent;
    padding:0;
    width: 20px;
    color: black;
`

const checkBoxStyle = (props) => {
    if(props.type === 'checkbox'){
        return checkBox;
    }
}

export const StyledInput = styled.input`
border: 1px solid #C4C4C4;
background-color: #FAFAFF;
outline: none;
border-radius: 5px;
width: 60%;
padding: 10px;
font-size: 16px;
margin-top: 30px;

${checkBoxStyle}

`

