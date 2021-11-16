import React from "react";
import styled from "styled-components";


const Email = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>join our newsletter and get 20% off</h3>
        <div className="content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet modi officiis dolor corrupti quod laudantium hic quaerat, libero magnam, omnis aliquid soluta maxime accusamus. Ex magni placeat inventore soluta officiis!</p>
          <form>
            <input type="text" placeholder="Enter Email" />
            <button className="btn email-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  background-color:#FBD913;
  .section-center{
    padding:5rem 3rem;
    max-width:1200px;
    margin:auto;
    h3{
      font-size:2rem;
      margin-bottom:1rem;
    }
    .content{
      form{
        width:80vw;
        max-width:500px;
        display:grid;
        grid-template-columns:1fr auto;
        input{
          font-size:1.5rem;
        }
        .email-btn{
          font-size:1.3rem;
          background-color:#0058AB;
          color:#FBD913;
          border-top-right-radius:5px;
          border-bottom-right-radius:5px;
        }
      }
    }
  }
  @media screen and (min-width:991px){
    .section-center{
      padding:5rem 100px;
    }
    .content{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:7rem;
      align-items:center;
      form{
        input{
          font-size:1.2rem;
        }
      }
      p{
        font-size:1.2rem;
        max-width:500px;
      }
    }
  }
`;

export default Email;
