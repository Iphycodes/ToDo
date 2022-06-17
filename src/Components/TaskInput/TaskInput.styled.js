import styled from "styled-components";
import { css } from "styled-components";


const hover = css`
color: red;
`

export const TaskInputContainer = styled.div`
position: relative;
display: flex;
align-items: center;
width: 100%;
padding: 0;


span:first-child{
    position: absolute;
    left: 5px;
    bottom: 0;
    font-size: 30px;
    color: #C4C4C4;
}
`

export const ButtonSpan = styled.span(({theme}) => `
    position: absolute;
    right: 3px;
    bottom: -10px;
    font-size: 45px;
    color: ${theme.colors.green};


    &:hover{
        ${hover};
    }
`)
  

export const StyledTaskInput = styled.input(({theme}) => `
    width: 100%;
    padding: 15px 50px;
    background-color: ${theme.colors.inputColor};
    outline: none;
    border: none;
    color: ${theme.colors.greyFont};
    font-size: 18px;
    border-radius: 30px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.2);
    font-weight: bold;
`)




