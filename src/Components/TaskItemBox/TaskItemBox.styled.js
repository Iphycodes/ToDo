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
padding: 10px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 5px;

${getDoneStyle};

&:hover{
    box-shadow: ${({isDone}) => !isDone ? '0px 2px 8px rgba(0, 0, 0, 0.15)' : 'none'};
}

`

export const TaskItemDescription = styled.div`
width: 60%;
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
width: 40%;
display: flex;
justify-content: flex-end;
align-items: center;
`

export const TaskItemIcon = styled.span`
width: 40px;
height: 40px;
border-radius: 50%;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
color: ${({category, theme}) => category === 'done' ? theme.colors.green : category === 'edit' ? theme.colors.blue : category === 'reiterate' ? theme.colors.blue : 'red'};
font-size: ${({category}) => category === 'done' ? '30px' : '20px'};

&:hover{
    background-color: ${({category, theme}) => category === 'done' ? theme.colors.green : category === 'edit' ? theme.colors.blue : category === 'reiterate' ? theme.colors.blue : 'red'};
    color: #ffffff;
}

`