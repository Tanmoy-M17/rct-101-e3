import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
const [Loginvalue, setLoginvalue] = useState({})
const{Login}=useContext(AuthContext);
  const handelChange=(e)=>{
    const {name,value}=e.target;
    setLoginvalue({
      ...Loginvalue,
      [name]:value})
  };
  const navigate=useNavigate()
  const login=()=>{
    Login();
    navigate("/home");
  }
  return (
    <div>
      <input data-cy="login-email" placeholder="Enter Email..." onChange={handelChange}/>
      <input data-cy="login-password" placeholder="Enter Email..." onChange={handelChange}/>
      <button data-cy="login-submit" onClick={login}>Login</button>
    </div>
  );
};

export default Login;
