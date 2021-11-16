import React from "react";
import styled from "styled-components";

const AboutHero = () => {
  return (
    <Wrapper>
      <img
        src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        alt="about-img"
      />
      <div className="column">
        <h1>Our sotry</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          nesciunt numquam perferendis pariatur quas non. Deleniti, tenetur quae
          reiciendis fugiat sit in! Libero vel ad soluta, rerum velit saepe
          dolores.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 8rem;
  display: grid;
  gap:5rem;
  grid-template-columns:1fr 1fr;
  img{
    min-width:100%;
    object-fit:cover;
  }
  .column{
    h1{
      font-size:2rem;
      margin-bottom:2rem;
    }
    p{
      font-size:1.2rem;
    }
  }

  @media screen and (max-width:1200px){
    padding:5rem 4rem;
  }
  @media screen and (max-width:991px){
    display:block;
    img{
      width:100%;
      margin-bottom:3rem;
    }
  }
`;

export default AboutHero;
