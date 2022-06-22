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
import { auth } from "../../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const [registerationEmail, setRegisterationEmail] = useState('');
    const [registerationPassword, setRegisterationPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [currentUser, setCurrentUser] = useState({});

    onAuthStateChanged(auth, (user) => {
        if(user){
            setCurrentUser(user);
            console.log(currentUser)
        }
        else{
            console.log('No user is Signed in')
        }
    })

    const register = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, registerationEmail, registerationPassword)
        .then((userCredentails) => {
            const user = userCredentails.user
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode}: ${errorMessage}`)
        })
    }

    const signIn = (e) => {
        e.preventDefault()


        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredentails) => {
            const user = userCredentails.user
        })
        .catch((error) => {
            const message = error.message;
            const errorCode = error.code;

            console.log(`${errorCode}: ${message}`)
        })

    }

    const signout = (e) => {
        // e.preventDefault();

        signOut(auth)
        .then(() => console.log('user is signed out'))
        .catch((error) => console.log(error))
        
        
    }

    const [islogin, setIsLogin] = useState(true);

    return (
        <MainBackgroundContainer>
          <MainContainer login={islogin}>
              <AdvertContainer login={islogin}>
                    <AdvertPreview/>
              </AdvertContainer>
              <FormContainer login={islogin}>

                  {
                    islogin ? (
                          <>
                    <TextContainer>
                        <Logo/>
                        <h1>Hello Again</h1>
                        <p>Login to your account</p>
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
                        <p>Don't have an account yet? <span onClick={() => setIsLogin(false)}>Sign Up</span></p>
                    </LastDiv>
                          </>
                    
                      ) : 
                        <>

                        <TextContainer className="sign-up-text">
                        <Logo/>
                        <h1>Hello Dear! {currentUser.email}</h1>
                        <p>Welcome to IphyToDo</p>
                        </TextContainer>
                        <FormDiv>
                        <form>
                            <InputBox placeholder='Email' type='email' name='email' handleChange={(e) => {
                                setRegisterationEmail(e.target.value)
                                }}>
                                <MdOutlineAlternateEmail/>
                            </InputBox>
                            <InputBox placeholder='Password' type='password' name='password' handleChange={(e) => setRegisterationPassword(e.target.value)}>
                                <FaLock/>
                            </InputBox>
                            <InputBox placeholder='Confirm Password' type='password' name='password'>
                                <FaLock/>
                            </InputBox>
                            
                            <CustomButton className="sign-up-btn" onClick={register}>Sign Up</CustomButton>
                            
                        </form>
                        </FormDiv>
                        <LastDiv>
                        <p>Already have an account? <span className="span-link" onClick={() => setIsLogin(true)}>Sign In</span></p>
                        <button onClick={signout}>Logout</button>
                        </LastDiv>
                        </>
                        

                  }

                    
              </FormContainer>
          </MainContainer>
        </MainBackgroundContainer>
    )
}

export default Login;