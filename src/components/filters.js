import React from "react";
import styled from "styled-components";
import { useProductContext } from "../context/productContext";
import { useUserContext } from "../context/UserContext";
import { categoryFormat } from "../utils/format";
import { FaCheck } from "react-icons/fa";
import { formatPrice } from "../utils/help";

const Filters = () => {
  const { productsItems } = useUserContext();
  const { filter,handleCategory,clearFilters } = useProductContext();
  const {search,category,company,color,min_price,max_price,current_price,shipping}=filter;
  const newCategory = categoryFormat(productsItems,"category");
  const newCompany = categoryFormat(productsItems,"company");
  const newColors = categoryFormat(productsItems,"colors");

  return (
    <Form onSubmit={(e)=>{e.preventDefault()}} >
      <div className="form-control">
        <input onChange={handleCategory} value={search} type="text" name="search" placeholder="Search" className="search-input" />
      </div>

      <div className="form-control">
        <h5>Category</h5>
        <div className="category">
          {newCategory &&
            newCategory.map((item) => {
              return (
                <button
                name="category"
                  onClick={handleCategory}
                  className={`btn filter-btn ${category.toLowerCase()===item.toLowerCase()?"active":null}`}
                  type="submit"
                  value={item}
                  key={item}
                >
                  {item}
                </button>
              );
            })}
        </div>
      </div>

      <div className="form-control">
        <h5>company</h5>
        <select onChange={handleCategory} name="company" value={company} className="company">
          {newCompany && newCompany.map((item,idx)=>{
            return <option key={idx} >{item}</option>
          })}
        </select>
      </div>

      <div className="form-control">
        <h5>colors</h5>
        <div className="colors">
          {newColors&&newColors.map((item,idx)=>{
            if(item.toLowerCase()==="all"){
              return <button key={idx} onClick={handleCategory} name="color" className={`btn ${color===item && "active"}`} name="color" >All</button>
            }
            return <button onClick={handleCategory} name="color" key={idx} className={`color-btn ${color===item && "active" }`} value={item} style={{backgroundColor:item}}>
              {color===item?<FaCheck/>:null}
            </button>
          })}
        </div>
      </div>

      <div className="form-control">
        <h5>Price</h5>
        <div className="prices">
          <p className="price">{formatPrice(current_price)}</p>
          <input
          onChange={handleCategory}
            type="range"
            name="current_price"
            className="price-input"
            min={min_price}
            max={max_price}
            value={current_price}
          />
        </div>
      </div>

      <div className="form-control shipping">
        <label htmlFor="shipping">free shipping</label>
        <input type="checkbox" onChange={handleCategory} checked={shipping} name="shipping" id="shipping" />
      </div>

      <button onClick={clearFilters} className="btn clear-btn">clear filters</button>
    </Form>
  );
};

const Form = styled.form`
  .form-control {
    margin-bottom: 1rem;
    .search-input {
      border: none;
      font-size: 1.2rem;
      max-width: 200px;
      padding: 7px 0 7px 1rem;
      border-radius: 5px;
      box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
    }
    h5 {
      font-size: 1.2rem;
      text-transform: capitalize;
      margin-bottom: 0.6rem;
    }
    .category {
      display: grid;
      max-width: 120px;
      .filter-btn {
        padding-left: 0px;
        background: transparent;
        margin-bottom: 0.4rem;
        border-radius: 5px;
        text-align: left;
        &.active {
          font-weight: bold;
          text-decoration: underline;
          text-underline-position: under;
        }
      }
    }
    .colors {
      display: flex;
      align-items: center;
      .btn {
        padding: 5px 8px;
        margin-right: 5px;
      }
      .color-btn {
        background: black;
        width: 18px;
        height: 18px;
        margin: 0 3px;
        border-radius: 50%;
        color:white;
      }
    }
  }
  /* @media screen and (max-width:1140px){
    display:flex;
  } */
`;

export default Filters;
