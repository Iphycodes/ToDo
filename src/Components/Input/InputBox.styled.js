import styled from "styled-components";
import { css } from "styled-components";

const checkBox = css`
    border: none;
    background-color: transparent;
    padding:0;
    margin: 0;
    width: auto;
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
width: 100%;
padding: 10px;
padding-right: 30px;
font-size: 16px;
margin-top: 10px;

${checkBoxStyle}

`

export const InputContainer = styled.div`
position: relative;
width: 100%;

span{
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 20px;
    color: #C4C4C4;
}

`

