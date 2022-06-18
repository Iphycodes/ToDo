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
`

export const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #ffffff;
width: 60%;
height: 80%;
border-radius: 30px;

${InvertedStyle}
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
export const ForgetPassword = styled(Link)`
text-decoration: none;

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

a{
    font-weight: bold;
    text-decoration: none;
}
`