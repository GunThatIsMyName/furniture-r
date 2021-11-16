import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatPrice } from "../utils/help";

const ListView = ({ product }) => {
  return (
    <Wrapper>
      {product.map((item) => {
        const { image, name, description, price, id } = item;
        return (
          <article key={id}>
            <img src={image} alt={name} />
            <div>
              <h3>{name}</h3>
              <p className="price">{formatPrice(price)}</p>
              <p>{`${description.substr(0,150)}...`}</p>
              <Link to={id}>
                <button className="btn product-btn">Detail</button>
              </Link>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display:grid;
  row-gap:3rem;
  article{
    display:grid;
    grid-template-columns:auto 1fr;
    column-gap:3rem;
    img{
      height:200px;
      width:300px;
      object-fit:cover;

    }
    div{
      display:grid;
      align-items:center;
      h3{
        font-size:1.4rem;
      }
      p{
        font-size:1rem; 
      }
      .price{
        color:#Fbd193;
        font-size:1.2rem;
      }
      .product-btn{
        background-color:#FBD913;
        border-radius:5px;
      }
    }
  }
`;

export default ListView;
