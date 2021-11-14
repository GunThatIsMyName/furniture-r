import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <h3>IKEA</h3>
      <p>IKEAs a Swedish-origin Dutch ready-to-assemble furniture, kitchen appliances and home accessories.</p>
      <h4>Copyright &copy; {new Date().getFullYear()}</h4>
    </Foot>
  );
};

const Foot = styled.footer`
color:#fff;
  background-color:#222;
  padding:40px 100px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  h3{
    font-size:3rem;
    color:rgb(251, 217, 19);
  }
  p{
    max-width:800px;
    font-size:1rem;
    margin:1rem 0;
  }
`;


export default Footer;
