import styled from 'styled-components'


export const HomePageContainer = styled.div`
    width: 80%;
    height: auto;
    margin-top: 20px;
    background-color: #ffffff;
    border: none;
    display: flex;
    flex-direction: column;
    padding: 50px;
`

export const HomePageTextContainer = styled.div`
    width: 100%;
    text-align: center;
`

export const TodoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 20px;
`

export const ShortLine = styled.hr(({theme}) => `
    width: 50px;
    background-color: black;
    margin: auto;
    height: 3px;

    h1{
        color: 
    }

`)