import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage.component";
import Login from "./Pages/Login/Login.component";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
