import axios from "axios";
import React, {useEffect, useState } from "react";
// import { CartContext } from "../../../context/CartContext";

const Product = () => {
  // Note: this id should come from api
  const [Product,setProduct]=useState([]);
  // const{add}=useContext(CartContext);
    const getdata=async()=>{
     let r= await axios.get('http://localhost:8080/products');
      setProduct(r.data)
    }
    useEffect(()=>{
      getdata();
    },[])
  return (
    <div>
      {Product.map((product)=>( 
      <div data-cy={`product-${product.id}`} key={product.id}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
          {
            // Count here from CartItems
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove from cart</button>
      </div>
    </div>))}
    </div>
    
   
  );
};

export default Product;
