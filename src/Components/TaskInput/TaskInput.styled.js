import styled from "styled-components";
import { css } from "styled-components";


const hover = css`
color: #079E77;
box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);

`

// const hover = css(({theme}) => `
//     color: ${theme.colors.blue}
// `)

export const TaskInputContainer = styled.div`
position: relative;
display: flex;
align-items: center;
width: 100%;
padding: 0;
margin-bottom: 30px;


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
    bottom: -9px;
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




