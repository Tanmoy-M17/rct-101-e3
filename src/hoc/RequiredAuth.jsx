import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const RequiredAuth = ({ children }) => {
  const {IsLogin} =useContext(AuthContext)
  const {pathname}=useLocation();
  if(IsLogin){
  return <div>{children}</div> ;
  }
  else{
    return <Navigate to="/login"
      state={{from:pathname}}
      replace/>
  }
};

export default RequiredAuth;
