import React from "react";
import styled from "styled-components";
import { Filters, Station, ProductsList, Sort } from "../components";

const Products = () => {
  return (
    <>
      <Station />
      <Wrapper>
        <div className="product-page">
          <Filters />
          <div className="product-list">
            <Sort />
            <ProductsList />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
margin:5rem 7rem;
.product-list{
  width:1000px;
  margin:0 auto;
}
@media screen and (min-width:1140px){
    .product-page {
      display: grid;
      gap:5rem;
      grid-template-columns: 200px 1fr;
    } 
  }
`;

export default Products;
