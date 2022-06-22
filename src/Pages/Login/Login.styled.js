import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Inverted = css`
flex-direction: row-reverse;
`

const InvertedStyle = (props) => {
    if(!props.login){
        return Inverted
    }
    
}

export const MainBackgroundContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
max-width: 100%;
background-color: #EFF1F8;
min-height:100vh;
padding: 0;


`

export const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #ffffff;
width: 60%;
height: 80vh;
border-radius: 30px;
transition: flex-direction 5s linear 3s;

${InvertedStyle}

@media only screen and (max-width: 768px){
    width: 100%;
    height: 100vh;
    padding: 0 20px;
    border-radius: 0;
}
`

export const AdvertContainer = styled.div`
width: 50%;
height: 100%;
border-radius: ${props => props.login ? '30px 0 0 30px' : '0 30px 30px 0'};
background-color: #06D6A0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media only screen and (max-width: 768px){
    display: none;
}



`

export const FormContainer = styled.div`
width: 50%;
height: 100%;
border-radius: ${props => props.login ? '0 30px 30px 0' : '30px 0 0 30px'};
background-color: #ffffff;
display: flex;
justify-content: flex-start;
flex-direction: column;
position: relative;
color: #838383;
transition: flex 5s ease-in-out 3s;

@media only screen and (max-width: 768px){
    width: 100%;
    border-radius: 0;
}
`

export const TextContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
column-gap: 0;
row-gap: 5px;
margin-top: 40px;

&.sign-up-text{
    margin-top: 70px;
}

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

    @media only screen and (max-width: 768px){
    width: 100%;
}

.sign-up-btn{
    margin-top: 30px;
}
}
`

export const LowerDiv = styled.div`
display: flex;
width: 100%;
margin: 5px 0;
justify-content: space-between;
margin-bottom: 40px;
font-size: 15px;
font-weight: bold;

.rem{
    display: flex;
    align-items: center;
    

    span{
        margin-left: 3px;
    }
}

`
export const ForgetPassword = styled.span`
text-decoration: none;
color: #15A4D1;
cursor: pointer;

&:hover{
    text-decoration: underline;
}
`

export const LastDiv = styled.div`
width: 100%;
justify-self: flex-end;
text-align: center;
font-family: candara;
color: #838383;
position: absolute;
bottom: 10px;

span{
    
    color: #15A4D1;
    cursor: pointer;

    &:hover{
        text-decoration: underline;
        font-weight: bold;
    }
}

`