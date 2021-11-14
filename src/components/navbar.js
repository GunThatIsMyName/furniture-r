import React, { useState } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { navIcons, navLinks } from "../utils/help";
import { useUserContext } from "../context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const {handleSidebar} = useUserContext();
  return (
    <Nav>
      <div className="nav-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg"
          alt="ikea-logo"
          className="logo"
        />
        <FaBars className="bars" onClick={handleSidebar}  />
      </div>
      <ul className="nav-links">
        {navLinks.map((item) => {
          return <Link key={item.id} to={item.path}>
           <li >{item.name}</li>
          </Link>
        })}
      </ul>
      <div className="nav-functions">
        {navIcons.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              {item.icon}
              {item.name==="cart"&&<span className="cart-count">1</span>}
            </li>
          );
        })}
      </div>
    </Nav>
  );
};

const Nav = styled.header`
box-shadow:0px 5px 15px rgba(0,0,0,0.1);
  padding: 0px 100px;
  font-size: 1.5rem;
  font-weight:500;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .nav-center {
    max-width: 80vw;
    .bars {
      display: none;
    }
  }
  .nav-links {
    display: flex;
    font-size: 1.4rem;
    a {
      &:nth-child(2) {
        margin: 0px 10px;
      }
    }
  }
  .nav-functions{
    display:flex;
    li{
      margin-left:2rem;
      &:first-child{
        position: relative;
      }
      .cart-count{
        top:-10px;
        right:-15px;
        background-color:orange;
        display:inline-block;
        width:1.5rem;
        height:1.5rem;
        text-align:center;
        border-radius:50%;
        position:absolute;
      }
    }
  }
  @media screen and (max-width: 991px) {
    padding: 0px;
    .nav-center {
      display: flex;
      width: 100%;
      max-width: 80vw;
      margin: auto;
      align-items: center;
      justify-content: space-between;
      .bars {
        display: block;
      }
    }
    .nav-links,
    .nav-functions {
      display: none;
    }
  }
`;

export default Navbar;
