import React from "react";
import styled from "styled-components";
import { infoData } from "../utils/help";

const MainInfo = () => {
  return (
    <Wrapper className="section-center">
      <article className="info-header">
        <h1>Custom Furniture <br /> Built Only For You</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          optio tempora consectetur doloremque ipsam nesciunt facilis sunt
          possimus adipisci, nisi quod harum earum impedit ducimus, autem fugit
          sapiente magnam perferendis.
        </p>
      </article>
      <div className="info-article">
        {infoData.map((item) => {
          const { id, icon, name, desc } = item;
          return (
            <article key={id} className="info-item">
              <span>
                {icon}
                </span>
              <h3>{name}</h3>
              <p>{desc}</p>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
max-width:1200px;
margin:auto;
  .info-header{
    padding-top:7rem;
    margin-bottom:4rem;
    display:flex;
    justify-content:space-between;
    h1{font-size:2rem;color:#FBD913}
    p{
      font-size:1.2rem;
      max-width:600px;
      line-height:1.5rem;
    }
  }
  .info-article{
    padding-bottom:5rem;
    display:grid;
    gap:3rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    .info-item{
      text-align:center;
      padding:3rem;
      border-radius:5px;
      background-color:#0058ab;
      span{
        font-size:3rem;
        display:grid;
        place-items:center;
        margin:auto;
        background-color:#FBD913;
        width:5rem;
        height:5rem;
        border-radius:50%;
      }
      h3{
        margin:1rem 0;
      }
      p{font-size:1.2rem;}
    }
  }
  @media screen and (max-width: 991px) {
    padding:0 3rem;
    .info-header{
      flex-direction:column;
      h1{
        text-align:center;
        font-size:3rem;
        margin-bottom:2rem;
      }
    }
  }
`;

export default MainInfo;

