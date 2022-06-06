import React, { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate=useNavigate();
    const [IsLogin,setIsLogin]=useState(false);
    const {state} =useLocation();
    const Login=()=>{
        setIsLogin(true);
        // if(state.from){
        // navigate(state.from,{replace:true})
        // }
        // else{
        //     navigate("/login")
        // }
    }
    
    const Logout=()=>{
        setIsLogin(false);
        navigate("/login")
    }
  return <AuthContext.Provider value={{IsLogin,Login,Logout}}>{children}</AuthContext.Provider>;
};
