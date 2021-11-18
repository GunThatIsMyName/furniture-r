import React from "react";
import styled from "styled-components";
import CartTotals from "../components/cartTotal";
import { useCartContext } from "../context/useCartContext";
import { formatPrice } from "../utils/help";

const Cart = () => {
  const { cartItems,handleAmount,handleRemove } = useCartContext();
  return (
    <Wrapper>
      <div className="cart-title">
        <h5>items</h5>
        <h5>prices</h5>
        <h5>quantati</h5>
        <h5>subtotal</h5>
        <span></span>
      </div>
      <div className="cart-itmes">
        {cartItems.map((item) => {
          const { image, id, price, name, max, mainColor, amount } = item;
          return (
            <article key={id} className="cart-item">
              <div className="cart-img">
                <img src={image} alt={name} />
                <div className="cart-item-info">
                  <h4>{name}</h4>
                  <p>
                    Color :{" "}
                    <span
                      style={{ backgroundColor: mainColor }}
                      className="color-ball"
                    ></span>{" "}
                  </p>
                </div>
              </div>
              <p className="price">{formatPrice(price)}</p>
              <p className="amount">
                  <span onClick={(e)=>handleAmount(e,id)} data-type="dec">-</span>
                  {amount}
                  <span onClick={(e)=>handleAmount(e,id)} data-type="inc">+</span>
              </p>
              <p>{formatPrice(price*amount)}</p>
              <span onClick={()=>handleRemove(id)} className="remove-btn">🔋</span>
            </article>
          );
        })}
      </div>
      <CartTotals />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 10rem;
  text-align: center;
  .cart-title {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(5, 1fr);
  }
  .cart-item {
    display: grid;
    grid-gap: 2rem;
    align-items: center;
    grid-template-columns: auto 1fr 1fr 1fr 1fr;
    .cart-img {
        display:flex;
        align-items:center;
        max-width:100%;
        p{
            display:flex;
        }
    }
    img {
      height: 100px;
      object-fit:cover;
    }
    .color-ball {
      width: 1rem;
      height: 1rem;
      display: inline-block;
    }
  }
`;

export default Cart;
