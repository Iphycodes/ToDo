import styled from "styled-components";


export const TaskItemBoxContainer = styled.div`
background-color: #ffffff;
border: 1px solid black 1px solid black 5px solid green;
width: 100%;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;

`

export const TaskItemDescription = styled.div`
width: 70%;
display: flex;
flex-direction: column;

h2{
    color: ${({theme}) => theme.colors.green};
}
`