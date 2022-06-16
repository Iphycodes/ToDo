import React from "react";
import { AdvertContainer, ForgetPassword, FormContainer, FormDiv, LowerDiv, MainBackgroundContainer, MainContainer, TextContainer } from "./Login.styled";
import { Logo } from "../../Components/Logo/Logo.component";
import { InputBox } from "../../Components/Input/InputBox.component";
import { CustomButton } from "../../Components/CustomButton/CustomButton.component";
import { FcGoogle } from "react-icons/fc";
import {BiTrendingDown} from 'react-icons/bi'

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
                  
                    <FormDiv>
                        <form>
                            <InputBox placeholder='Email' type='email' name='email'>
                                <BiTrendingDown/>
                            </InputBox>
                            <InputBox placeholder='Password' type='password' name='password'>
                                <BiTrendingDown/>
                            </InputBox>
                            <LowerDiv>
                                <div className="rem">
                                    <InputBox type='checkbox' name='remember'/>
                                    <span>Remember me</span>
                                </div>
                                <div className="fpsw">
                                   <ForgetPassword to='/google'>
                                       Forget Password?
                                   </ForgetPassword>
                                </div>
                            </LowerDiv>
                            <CustomButton>Login</CustomButton>
                            <CustomButton signInWithGoogle>
                                <FcGoogle className="icon"/>
                                <span>Sign In With Google</span>
                            </CustomButton>
                        </form>
                    </FormDiv>
                 
              </FormContainer>
          </MainContainer>
        </MainBackgroundContainer>
    )
}

export default Login;