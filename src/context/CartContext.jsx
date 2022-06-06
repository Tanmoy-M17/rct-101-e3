import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
  // const [CartCount,setCartCount]=useState(0);
  // const [CartItem ,setCartItem]=useState([]);
  
  // const add=(id,count,)=>{
  //     setCartCount(CartCount+1);
  //     // axios({
  //     //   method: 'post',
  //     //   url: 'http://localhost:8080/cartItems',
  //     //   data: {
  //     //     ProductId:id,
  //     //     Count:count,
  //     //     Id:id
  //     //   }
  //     //   });
  //       // const getData=async()=>{
  //       //   let r= await axios.get(`http://localhost:8080/cartItems`);
  //       //       setCartItem(r.data);
  //       //   }
  //       // getData()
       
  // }
  // const remove=()=>{
  //   setCartCount(CartCount+1)
  // }
  return <CartContext.Provider>{children}</CartContext.Provider>;
};
