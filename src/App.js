import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.component";
import Login from "./Pages/Login/Login.component";
import { ThemeProvider } from "styled-components";





function App() {

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

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </div>
    </ThemeProvider>
  
  );
}

export default App;
