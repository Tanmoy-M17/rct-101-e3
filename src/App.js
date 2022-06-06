import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import RequiredAuth from "./hoc/RequiredAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<RequiredAuth>
          <Home/>
        </RequiredAuth> 
        }/>
      </Routes>
    </div>
  );
}

export default App;
