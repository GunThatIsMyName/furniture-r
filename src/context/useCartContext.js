import React, { createContext, useContext, useEffect, useReducer } from "react";
import { CartReducer, initState } from "../reducer/cartReducer";
import { addToCart, cartItem_amount, cartItem_LS, cartItem_reduce, cartItem_remove } from "./actioin";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initState);
  const handleAddToCart = (data) => {
    dispatch({ type: addToCart, payload: data });
  };
  const handleAmount=(e,data)=>{
    const {type}=e.target.dataset;
    dispatch({type:cartItem_amount,payload:{type,data}})
  }
  const handleRemove=(data)=>{
    dispatch({type:cartItem_remove,payload:data})
  }

  useEffect(() => {
    dispatch({type:cartItem_reduce})
    localStorage.setItem(cartItem_LS, JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ ...state, handleAddToCart,handleAmount,handleRemove }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};

export default CartProvider;
