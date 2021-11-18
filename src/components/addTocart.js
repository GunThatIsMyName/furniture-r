import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import styled from "styled-components";

import { useCartContext } from "../context/useCartContext";

const AddToCart = ({product}) => {
  const {id,stock,colors}=product;
  const [amount,setAmount]=useState(1);
  const [mainColor,setColor]=useState(colors[0]);
  const {handleAddToCart}=useCartContext();
  const handleAmount=(e)=>{
    const type = e.target.dataset.count;
        if(type==="inc"){
            setAmount(item=>{
                if(item>=stock){
                    return item;
                }
                return item+1;
            })
        }
        if(type==="dec"){
            setAmount((item)=>{
                if(item<=1){
                    return item;
                }
                return item-1;
            })
        }
    }

  return (
    <Wrapper>
      <div className="colors">
        <h3>Colors :</h3>
        {colors.map((item, idx) => {
          return <span key={idx} onClick={()=>setColor(item)} style={{backgroundColor:item}} className="color-ball">
              {mainColor===item ? <FaCheck /> : null}
          </span>;
        })}
      </div>
      <div className="stock">
          <span onClick={handleAmount} data-count="dec" >-</span>
          <p>{amount}</p>
          <span onClick={handleAmount} data-count="inc">+</span>
      </div>
      <button onClick={()=>handleAddToCart({id,amount,mainColor,stock,product})} className="btn cart-btn">add to cart</button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .colors {
    display: flex;
    h3{margin-right:1rem;}
    .color-ball {
      width: 1.5rem;
      height: 1.5rem;
      display: inline-block;
      background-color: teal;
      border-radius: 50%;
      margin-right: 0.4rem;
    }
  }
  .stock{
      display:flex;
      align-items:center;
      span{cursor: pointer;}
      p{
          margin:0 1rem;
      }
  }
  .cart-btn{
      background-color:#FBD913;
      border-radius:5px;
  }
`;

export default AddToCart;
