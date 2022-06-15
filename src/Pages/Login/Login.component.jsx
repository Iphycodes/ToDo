import React from "react";
import { AdvertContainer, FormContainer, lowerDiv, MainBackgroundContainer, MainContainer, TextContainer } from "./Login.styled";
import { Logo } from "../../Components/Logo/Logo.component";
import { InputBox } from "../../Components/Input/InputBox.component";

const Login = () => {

    return (
        <MainBackgroundContainer>
          <MainContainer>
              <AdvertContainer>

              </AdvertContainer>
              <FormContainer>
                  <TextContainer>
                    <Logo/>
                    <h1>Hello Again!</h1>
                    <p>Welcome to MajorTodo</p>
                  </TextContainer>
                  

                  <form>
                    <InputBox placeholder='Email' type='email' name='email'/>
                    <InputBox placeholder='Password' type='password' name='password'/>
                    <lowerDiv>
                        <InputBox type='checkbox' name='remember'/>
                        <span>Remember me</span>
                    </lowerDiv>
                    
                  </form>
              </FormContainer>
          </MainContainer>
        </MainBackgroundContainer>
    )
}

export default Login;