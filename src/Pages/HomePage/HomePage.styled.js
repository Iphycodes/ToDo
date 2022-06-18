import styled from 'styled-components'


export const HomePageContainer = styled.div`
    width: 80%;
    height: auto;
    margin: 50px 0;
    background-color: #ffffff;
    border: none;
    display: flex;
    flex-direction: column;
    padding: 50px;
`

export const HomePageTextContainer = styled.div(({theme}) => `
    
    width: 100%;
    text-align: center;
    margin-bottom: 50px;

    h1{
        color: ${theme.colors.green};
        font-size: 50px;
        letter-spacing: 15px;
    }

    p{
        letter-spacing: 5px;
    }

`)

export const TodoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 20px;

    .unDoneTasks, .doneTasks{
        margin-bottom: 30px;
    }

    .doneTasks{
        p:first-child{
            letter-spacing: 10px;
            color: ${({theme}) => theme.colors.greyFont};
            font-weight: bold;
        }
    }
`

export const ShortLine = styled.hr`
    width: 70px;
    background-color: black;
    margin: auto;
    height: 3px;
    margin-bottom: 10px;

`

export const LongLine = styled(ShortLine)`
    width: 100%;
    height: 2px;
    background-color: ${({theme}) => theme.colors.greyFont};
    margin-bottom: 30px;
`