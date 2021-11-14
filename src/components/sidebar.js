import React from "react";
import { GrFormClose } from "react-icons/gr";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useUserContext } from "../context";
import { navIcons, navLinks } from "../utils/help";

const Sidebar = () => {
    const {isSidebarOpen,handleSidebar} = useUserContext();
  return (
    <Side className={`sidebar ${isSidebarOpen&&"active"}`}>
      <div className="nav-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Ikea_logo.svg"
          alt="ikea-logo"
          className="logo"
        />
        <GrFormClose className="bars" onClick={handleSidebar} />
      </div>

      <ul className="nav-links">
        {navLinks.map((item) => {
          return <Link key={item.id} to={item.path} onClick={handleSidebar}>
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
              {item.name === "cart" && <span className="cart-count">1</span>}
            </li>
          );
        })}
      </div>
    </Side>
  );
};

const Side = styled.aside`
  .nav-center {
    max-width: 80vw;
    display: flex;
    width: 100%;
    max-width: 80vw;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    .bars{
        font-size:3rem;  
        transition: 0.3s linear;
        cursor: pointer;
        &:hover{
            transform:scale(1.03);
            transform:rotate(20deg);
        } 
    }
  }
  .nav-links{
      li{
          margin:1rem 0;
          padding:10px;
          transition:0.3s linear;
          cursor: pointer;
          &:hover{
              background-color:#FBD913;
              transform:translateX(10px);
          }
      }
  }
  .nav-functions{
      position: relative;
      bottom:-30%;
      margin:auto;
      display:flex;
      justify-content:space-between;
      width:80vw;
      max-width:700px;
      li{
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
  @media screen and (min-width:991px){
      &.sidebar.active{
          display:none;
      }
  }
`;

export default Sidebar;
