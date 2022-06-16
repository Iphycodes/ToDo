import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login.component";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
