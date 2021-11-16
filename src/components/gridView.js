import React from "react";
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa"
import { formatPrice } from "../utils/help";
import styled from "styled-components";

const GridView = ({product}) => {
    console.log(product,"productproductproduct")
  return (
    <Wrapper>
        {product.map(item=>{
            const {id,image,name,price}=item;
            return <article key={id}>
                <div className="container">
                    <img src={image} alt={name} className="product-img" />
                    <Link to={id} className="link" >
                        <FaSearch className="link-icon"/>
                    </Link>
                </div>
                <footer>
                    <h4>{name}</h4>
                    <p>{formatPrice(price)}</p>
                </footer>
            </article>
        })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
    display:grid;
    grid-template-columns: repeat(3,1fr);
    gap:1rem;
    .container{
        position: relative;
        background-color:black;
        height:175px;
        border-radius:5px;
        margin-bottom:1rem;
        img{
            height:100%;
            width:100%;
            object-fit:cover;
        }
        .link{
            opacity:0;
            position:absolute;
            top:50%;
            left:50%;
            color:black;
            padding:0.8rem;
            font-size:1rem;
            border-radius:50%;
            background-color:#fbd913;
            transform:translate(-50%,-50%);
            transition:0.3s linear;
        }
        &:hover{
            img{
                opacity:0.5;
            }
            .link{
                opacity:1;
                &:hover{
                    font-size:1.5rem;
                }
            }
        }
    }
    footer{
        display:grid;
        grid-template-columns:auto 1fr;
        align-items:center;
        h4{
            font-size:1.4rem;
        }
        p{
            text-align:right;
            font-size:1.2rem;
        }
    }
`;

export default GridView;
