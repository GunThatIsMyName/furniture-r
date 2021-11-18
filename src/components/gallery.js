import React, { useState } from "react";
import styled from "styled-components";

const Gallery = ({ images = [] }) => {
  const [main, setMain] = useState(images[0]);
  return (
    <Wrapper>
      {main && <img className="main-img" src={main.url} alt={main.name} />}
      <div className="gallery">
        {images.map((image, idx) => {
          return (
            <img
              onClick={() => setMain(images[idx])}
              src={image.url}
              alt={image.filename}
              key={idx}
              className="sub-img"
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-img {
      width:100%;
    height:500px;
    object-fit: cover;
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
  }
  .sub-img {
    height: 100px;
    width:100%;
  }
`;

export default Gallery;
