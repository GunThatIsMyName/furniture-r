import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <div className="hero-main">
        <h1>
          Design Your <br />
          Comfort Zone
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate,
          inventore suscipit? Culpa fuga facere distinctio ex, corrupti ipsam
          eius adipisci rerum similique ducimus repudiandae incidunt accusamus
          tenetur architecto explicabo saepe.
        </p>
        <button className="btn hero-btn">Shop Now</button>
      </div>
      <div className="hero-img">
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
          alt="ikea-furniture"
          className="furniture-big"
        />
        <img
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
          alt="ikea-furniture"
          className="furniture-small"
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display:flex;
  align-items:center;
  justify-content:space-around;
  min-height: calc(100vh - 10rem);
  .hero-main{
    h1{
      font-size:2rem;
    }
    p{
      font-size:1.2rem;
      font-weight:300;
      margin:1rem 0;
      max-width:600px;
      line-height:2rem;
    }
    .hero-btn{
      font-size:1.5rem;
      background-color:rgb(251, 217, 19);
      border-radius:5px;
      box-shadow:5px 10px 15px rgba(0,0,0,0.23);
      &:hover{
        background-color:rgb(240, 217, 19);
      }
    }
  }
  .hero-img{
    position: relative;
    .furniture-small{
      box-shadow: rgba(0,0,0,0.2);
      position:absolute;
      bottom:-10%;
      left:-10%;
    }
  }
  @media screen and (max-width:1200px){
    flex-direction:column;
    .hero-main{
      margin:5rem 0;
    }
    .hero-img{
      margin-bottom:7rem;
      .furniture-big{
        max-width:600px;
      }
    .furniture-small{
      display:none;
    }
  }
  @media screen and (max-width:800px){
    .furniture-big{
        width:70vw;
      }
  }
  }
`;
export default Hero;
