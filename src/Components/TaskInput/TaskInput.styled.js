import styled from "styled-components";
import { css } from "styled-components";


const hover = css`

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

    @media only screen and (max-width: 768px){
        font-size: 24px;
        bottom: 0px;
    }
}
`

export const ButtonSpan = styled.span(({theme, cat}) => `
    position: absolute;
    right: 3px;
    bottom: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    color: ${theme.colors.green};
    border-radius: 50%;


    @media only screen and (max-width: 768px){
        font-size: 34px;
    }

    &.edit{
        font-size: 58px;
        bottom: -3px;
        right: -2px;
        color: ${theme.colors.blue};

    @media only screen and (max-width: 768px){
        font-size: 40px;
    }
       
    }

    &:hover{
        color: ${cat === "new" ? '#079E77' : '#17B1E1'};
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
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

    @media only screen and (max-width: 768px){
        padding: 10px 40px;
        font-size: 14px;
    }
`)




