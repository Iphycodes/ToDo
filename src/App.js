import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.component";
import Login from "./Pages/Login/Login.component";
import { ThemeProvider } from "styled-components";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { auth } from "./Firebase/Firebase.config";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./Redux/User/User.reducer";

function App() {

  const currentUser = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  const theme = {
    colors: {
      green: '#06D6A0',
      inputColor: '#FAFAFF',
      greyFont: '#838383',
      redFont: 'red',
      blue: '#2ECDFF',
      darkGreen: '#079E77',
      lightGrey: '#D9D9D9'
  }
  }


// onAuthStateChanged(auth, (user) => {
//     if(user){
//         dispatch(setCurrentUser(user));
//         console.log(currentUser)
//     }
//     else{
//         console.log('No user is Signed in')
//         dispatch(setCurrentUser(null));
//     }
// })

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      {console.log(currentUser)}
      <Routes>
        <Route exact path="/" element={currentUser ? <HomePage/> : <Navigate to='/login' replace/>}/>
        <Route exact path="/login" element={currentUser ? <Navigate to='/' replace/> : <Login/>}/>
      </Routes>
    </div>
    </ThemeProvider>
  
  );
}

export default App;
