import styled from 'styled-components'



export const MainBackgroundContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
max-width: 100%;
background-color: #EFF1F8;
`

export const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #ffffff;
width: 60%;
height: 80%;
border-radius: 30px;
`

export const AdvertContainer = styled.div`
width: 50%;
height: 100%;
border-radius: 30px 0 0 30px;
background-color: #06D6A0;
`

export const FormContainer = styled.div`
width: 50%;
height: 100%;
border-radius: 0 30px 30px 0;
background-color: #ffffff;
display: flex;
flex-direction: column;

form{
    width: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

export const TextContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
column-gap: 0;
row-gap: 5px;
margin-top: 40px;

h1{
    margin-bottom: 0;
    margin-top: 0;
    color: #3A3D5C;
}

p{  
    margin-top: 0;
    font-size: 20px;
}

`

export const lowerDiv = styled.div`
display: flex;
justify-content: space-between;
font-size: 16px;
width: 60%;
background-color: pink;
`