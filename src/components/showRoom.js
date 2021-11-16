import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import Loading from "./loading";
const ShowRoom = () => {
  const { showRoomItems,error,loading, } = useUserContext();

  return (
    <Wrapper className="section-center">
      <h1>Products List</h1>
      <div className="underline"></div>
        {loading&&<Loading />}
        <div className="products">
        {showRoomItems &&
          showRoomItems.map((item) => {
            const { name, price, image, id } = item;
            return (
              <div key={id} className="product">
                <div className="product-detail">
                  <Link to={`products/${id}`}>
                    <FaSearch />
                  </Link>
                </div>
                <img src={image} alt={name} />
                <div className="product-info">
                  <h3>{name}</h3>
                  <h3 className="price">${price/100}</h3>
                </div>
              </div>
            );
          }).splice(0,3)}
      </div>
        {error&& <h1>Sorry,Coudn't get a data refresh site.</h1>}
      <Link to="products">
        <button className="btn btn-products">Show More</button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0058ab;
  min-height: 50vh;
  text-align: center;
  padding: 5rem 0rem;
  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
  .btn-products {
    background-color: rgb(251, 217, 19);
    font-size: 1.5rem;
    border-radius: 5px;
    cursor: pointer;
  }
  .products {
    padding-top: 4rem;
    padding-bottom: 4rem;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80vw;
    max-width: 1200px;
    margin: auto;
    font-size: 1.3rem;
    .product {
      position: relative;
      width: 300px;
      height: 250px;
      margin-bottom: 1rem;
      object-fit: cover;
      margin-bottom: 5rem;
      .product-detail {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: black;
        display: grid;
        place-items: center;
        opacity: 0;
        transition: 0.3s linear;
        border-radius: 5px;
        svg {
          color: white;
          cursor: pointer;
          transition: 0.3s linear;
          &:hover {
            transform: scale(1.3);
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit:cover;
      }
      .product-info {
        display: flex;
        justify-content: space-between;
        .price {
          color: rgb(251, 217, 19);
        }
      }
      &:hover .product-detail {
        opacity: 1;
        background-color: #000000ad;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .products {
      grid-template-columns: 1fr 1fr;
      .product {
        width: 400px;
        height: 300px;
        img {
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    .products {
      grid-template-columns: 1fr;
      .product {
        width: 70vw;
        height: 300px;
        img {
        }
      }
    }
  }
`;

export default ShowRoom;

