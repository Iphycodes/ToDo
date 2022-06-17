import React, { useState } from "react";
import { AdvertContainer, ForgetPassword, FormContainer, FormDiv, LowerDiv, MainBackgroundContainer, MainContainer, TextContainer, LastDiv } from "./Login.styled";
import { Logo } from "../../Components/Logo/Logo.component";
import { InputBox } from "../../Components/Input/InputBox.component";
import { CustomButton } from "../../Components/CustomButton/CustomButton.component";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineAlternateEmail } from "react-icons/md";
import {FaLock} from 'react-icons/fa'
import { CheckBox } from "../../Components/CheckBox/CheckBox.component";
import { Link } from "react-router-dom";
import { AdvertPreview } from "../../Components/AdvertPreview/AdvertPreview.component";

const Login = () => {

    const [login, setLogin] = useState(false);

    return (
        <MainBackgroundContainer>
          <MainContainer login={login}>
              <AdvertContainer login={login}>
                    <AdvertPreview/>
              </AdvertContainer>
              <FormContainer login={login}>

                  {
                    login ? (
                          <>
                    <TextContainer>
                        <Logo/>
                        <h1>Hello Again!</h1>
                        <p>Welcome to MajorTodo</p>
                    </TextContainer>
                  
                    <FormDiv>
                        <form>
                            <InputBox placeholder='Email' type='email' name='email'>
                                <MdOutlineAlternateEmail/>
                            </InputBox>
                            <InputBox placeholder='Password' type='password' name='password'>
                                <FaLock/>
                            </InputBox>
                            <LowerDiv>
                                <div className="rem">
                                    {/* <InputBox type='checkbox' name='remember'/>
                                    <span>Remember me</span> */}

                                    <CheckBox>Remember me</CheckBox>
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
                    <LastDiv>
                        <p>Don't have an account yet? <span>Sign In</span></p>
                    </LastDiv>
                          </>
                    
                      ) : 
                      <div>
                        
                      </div>

                  }

                    
              </FormContainer>
          </MainContainer>
        </MainBackgroundContainer>
    )
}

export default Login;