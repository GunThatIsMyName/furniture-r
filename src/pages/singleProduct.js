import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Loading } from "../components";
import AddToCart from "../components/addTocart";
import Gallery from "../components/gallery";
import { useProductContext } from "../context/productContext";
import { formatPrice } from "../utils/help";

const SingleProduct = () => {
  const {
    getSingleProduct,
    isSingleProductLoading,
    singleProductError,
    singleProducts,
  } = useProductContext();
  const { pathname } = useLocation();
  const url = pathname.substr(10);

  useEffect(() => {
    getSingleProduct(url);
    // eslint-disable-next-line
  }, []);

  if (isSingleProductLoading) {
    return <Loading />;
  }
  if (singleProductError) {
    return <h1>ERROR</h1>;
  }
  const {id,name,company,description,price,stock,images,shipping,colors}=singleProducts;
  return(
    <Wrapper>
      <Link className="btn product-btn" to="/products">back to products</Link>
      <div className="prodcut-center">
          <Gallery images={images}/>
          <div className="product-info">
            <h2>{name}</h2>
            <h3>{formatPrice(price)}</h3>
            <p>{description}</p>
            {stock>0&&<AddToCart product={singleProducts} />}
          </div>
      </div>
    </Wrapper>
  )
};
const Wrapper = styled.section`
max-width:1200px;
  margin:5rem auto;
  .product-btn{
    background-color:#FBD193;
    border-radius:5px;
  }
  .prodcut-center{
    margin-top:2rem;
    display:grid;
    grid-template-columns:repeat(2,1fr);
    grid-gap:3rem;
  }
  .product-info{
    h2{
      margin:1 0 2rem 0;
    }
    h3{
      margin-bottom:2rem;
    }
    p{
      font-size:1.2rem;
      margin-bottom:2rem;
    }
  }
`;

export default SingleProduct;
