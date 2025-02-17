import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

// use react-router Link or NavLink


const Navbar = () => {
  const navigate=useNavigate();
const {IsLogin,Logout} =useContext(AuthContext);
  const HandelLogin=()=>{
    if(IsLogin){
      Logout();
    }
    else{
      navigate("/login")
    }
    
  }
  return (
    <div data-cy="navbar">
      <Link data-cy="navbar-home-link" to = "/login">Login</Link>

     <span data-cy="navbar-cart-items-count">Cart</span>
      
      <button data-cy="navbar-login-logout-button" onClick={HandelLogin}>{IsLogin? "Logout":"Login"}</button>
    </div>
  );
};

export default Navbar;
