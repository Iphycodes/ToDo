import styled from "styled-components";


export const AdvertPreviewContainer = styled.div`
width: 70%;
height: auto;
display: flex;
flex-direction: column;
margin-top: 20px;
`


export const AdvertButtonsContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;

span{

    &:nth-child(2){
        margin-left: 3px;
        margin-right: 3px;
    }
}
`

export const AdvertButton = styled.button`
background: transparent;
border: 1px solid #ffffff;
opacity: 0.7;
width: 8px;
height: 8px;
border-radius: 50%;

&:hover{
    background-color: #ffffff;
    opacity: 1;
}
`