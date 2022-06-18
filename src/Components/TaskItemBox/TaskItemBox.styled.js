import styled from "styled-components";
import { css } from "styled-components";

const DoneStyle = css`
opacity: 0.4;

h2{
    text-decoration: line-through;
}
`

const getDoneStyle = ({isDone}) => {
    return isDone ? DoneStyle : '';
} 

export const TaskItemBoxContainer = styled.div`
background-color: #ffffff;
border: 1px solid rgba(217, 217, 217, 0.7);
border-left: 10px solid ${({theme}) => theme.colors.green};
width: 100%;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 5px;

${getDoneStyle}
`

export const TaskItemDescription = styled.div`
width: 75%;
display: flex;
flex-direction: column;

h2{
    color: ${({theme}) => theme.colors.green};
    font-size: 20px;
}

p{
    color: ${({theme}) => theme.colors.greyFont};
    font-size: 16px;
}
`

export const TaskItemIconsContainer = styled.div`
width: 25%;
display: flex;
justify-content: space-between;
align-items: center;
`

export const TaskItemIcon = styled.span`
width: 50px;
height: 50px;
border-radius: 50%;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: center;
align-items: center;
color: ${({category, theme}) => category === 'done' ? theme.colors.green : category === 'edit' ? theme.colors.blue : category === 'reiterate' ? theme.colors.blue : 'red'};
font-size: ${({category}) => category === 'done' ? '40px' : '30px'};

`