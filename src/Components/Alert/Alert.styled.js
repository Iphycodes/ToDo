import styled from "styled-components";


export const AlertContainer = styled.div`
    width: 100%;
    padding: 3px;
    color: #ffffff;
    text-align: center;
    visibility: ${({message}) => message === '' ? "hidden" : "visible"};
    align-items: center;
    justify-content: center;
    background-color: ${({status}) => status === 'success' ? '#80F9D9' : '#FDB2B2'};
    font-size: 16px;
    margin: 0;
`   