import styled from 'styled-components'
import { Link } from 'react-router-dom'


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

export const FormDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;

form{
    width: 70%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`

export const LowerDiv = styled.div`
display: flex;
width: 100%;
margin: 5px 0;
justify-content: space-between;
margin-bottom: 30px;
font-size: 14px;

.rem{
    display: flex;
    align-items: center;

    span{
        margin-left: 3px;
    }
}

`
export const ForgetPassword = styled(Link)`
text-decoration: none;

&:hover{
    text-decoration: underline;
}
`

export const LastDiv = styled.div`
width: 100%;
align-self: flex-end;
text-align: center;

a{
    text-decoration: none;
}
`