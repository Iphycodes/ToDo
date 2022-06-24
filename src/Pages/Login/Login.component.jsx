import React, { useState, useD, useRef } from "react";
import { AdvertContainer, ForgetPassword, FormContainer, FormDiv, LowerDiv, MainBackgroundContainer, MainContainer, TextContainer, LastDiv, LoadingImage } from "./Login.styled";
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
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../Redux/User/User.reducer";
import { Alert } from "../../Components/Alert/Alert.component";
import { setAlertStatus, setSignUpAlertStatus } from "../../Redux/AlertStatus/AlertStatus.reducer";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const [registerationEmail, setRegisterationEmail] = useState('');
    const [registerationPassword, setRegisterationPassword] = useState('');
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [islogin, setIsLogin] = useState(true);
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const alertStatus = useSelector(state => state.alertStatus.alertStatus);
    const signUpAlertStatus = useSelector(state => state.alertStatus.signUpAlertStatus);
    const [showLoginSpin, setShowLoginSpin] = useState(false);
    const [showSignUpSpin, setShowSignUpSpin] = useState(false);
    const {message, status} = alertStatus ?? {};
    const {signUpAlertMessage, signUpStatus} = signUpAlertStatus ?? {};


    const register = (e) => {
        e.preventDefault();

        setShowSignUpSpin(true)

        createUserWithEmailAndPassword(auth, registerationEmail, registerationPassword)
        .then((userCredentails) => {
            dispatch(setSignUpAlertStatus({
                signUpAlertMessage: "Account created succesfully",
                signUpStatus: 'success'
            }))

            setTimeout(() => {
                dispatch(setSignUpAlertStatus({
                    signUpAlertMessage: '',
                    signUpStatus: ''
                }))

                setIsLogin(true)

            }, 3000)

            const user = userCredentails.user

            console.log(user)

            setShowSignUpSpin(false)

            setLoginEmail('')
            setRegisterationEmail('')
            setLoginPassword('')
            setRegisterationPassword('')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(`${errorCode}: ${errorMessage}`)

            dispatch(setSignUpAlertStatus({
                signUpAlertMessage: error.message,
                signUpStatus: 'danger'
            }))

            setShowSignUpSpin(false)
        })
    }

    const signIn = (e) => {
        e.preventDefault()

        setShowLoginSpin(true)

        signInWithEmailAndPassword(auth, loginEmail, loginPassword)
        .then((userCredentails) => {


            dispatch(setAlertStatus({
                message: 'Login successful !!!',
                status: 'success'
            }))

            setTimeout(() => {
                dispatch(setAlertStatus({
                    message: '',
                    status: ''
                }))
            }, 3000)

            const user = userCredentails.user

            dispatch(setCurrentUser(user));

            setShowLoginSpin(false)
        })
        .catch((error) => {
            const message = error.message;
            const errorCode = error.code;

            dispatch(setAlertStatus({
                message: error.code,
                status: 'danger'
            }))

            console.log(`${errorCode}: ${message}`)

            setShowLoginSpin(false)
        })

    }

    const googleSignIn = (e) => {
    e.preventDefault()

    const provider = new GoogleAuthProvider()

    auth.languageCode = 'it';

    provider.setCustomParameters({
        'prompt' : 'select_account'
    });

   

    signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    dispatch(setAlertStatus({
        message: 'Login successful !!!',
        status: 'success'
    }))

    dispatch(setCurrentUser(user));

    setTimeout(() => {
        dispatch(setAlertStatus({
            message: '',
            status: ''
        }))
    }, 3000)

    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);

    dispatch(setAlertStatus({
        message: error.code,
        status: 'danger'
    }))
    // ...
  });
    }

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
                            <InputBox placeholder='Email' value={loginEmail} type='email' name='email' handleChange={(e) => 
                            {
                                setLoginEmail(e.target.value)
                                dispatch(setAlertStatus({
                                    message: '',
                                    status: ''
                                }))
                            }
                            }>
                                <MdOutlineAlternateEmail/>
                            </InputBox>
                            <InputBox placeholder='Password' type='password' name='password' handleChange={(e) => 
                                {
                                    setLoginPassword(e.target.value)
                                    dispatch(setAlertStatus({
                                        message: '',
                                        status: ''
                                    }))
                                }
                                }>
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
                            <CustomButton onClick={signIn} showIcon={showLoginSpin}>Login</CustomButton>
                            <CustomButton onClick={googleSignIn} signInWithGoogle>
                                <FcGoogle className="icon"/>
                                <span>Sign In With Google</span>
                            </CustomButton>
                            <Alert message={message} status={status}/>
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
                        <h1>Hello Dear! {currentUser?.email}</h1>
                        <p>Welcome to IphyToDo</p>
                        </TextContainer>
                        <FormDiv>
                        <form>
                            <InputBox value={registerationEmail} placeholder='Email' type='email' name='email' handleChange={(e) => {
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
                            
                            <CustomButton className="sign-up-btn" onClick={register} showIcon={showSignUpSpin}>Sign Up</CustomButton>
                            <Alert message={signUpAlertMessage} status={signUpStatus}/>
                    
                        </form>
                        </FormDiv>
                        
                        <LastDiv>
                        <p>Already have an account? <span className="span-link" onClick={() => setIsLogin(true)}>Sign In</span></p>
                        </LastDiv>
                        </>
                        

                  }

                    
              </FormContainer>
          </MainContainer>
        </MainBackgroundContainer>
    )
}

export default Login;