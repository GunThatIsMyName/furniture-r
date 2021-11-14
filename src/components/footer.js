import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Foot>
      <h3>IKEA</h3>
      <p>IKEAs a Swedish-origin Dutch (Netherlands)-headquartered multinational conglomerate that designs and sells ready-to-assemble furniture, kitchen appliances and home accessories, among other goods and home services. Founded in Sweden in 1943 by 17-year-old Ingvar Kamprad, IKEA has been the world's largest furniture retailer since 2008.</p>
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
