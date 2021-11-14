import React from "react";
import styled from "styled-components";

const ShowRoom = () => {
  return (
    <Wrapper>
      <h1>Products List</h1>
      <div className="underline"></div>
      <div className="lists">
        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #0058ab;
  min-height: 50vh;
`;

export default ShowRoom;
