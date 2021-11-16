import React from "react";
import { useLocation } from "react-router";
import styled from "styled-components";

const Station = () => {
  const {pathname} = useLocation();
  return (
    <Wrapper>
      {pathname&&<h1>{pathname.slice(1)}</h1>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color:#FBD913;
  h1{
    font-size:3rem;
    margin-left:11%;
    padding:4rem 0;
  }
  @media screen and (max-width:991px){
    h1{font-size:2.3rem;}
  }
`;

export default Station;
