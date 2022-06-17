import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.component";
import Login from "./Pages/Login/Login.component";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme/Theme.style";


function App() {
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
