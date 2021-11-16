import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import styled from "styled-components";
import { useProductContext } from "../context/productContext";
import { sortList } from "../utils/help";

const Sort = () => {
  const { filterdProduct,handleGridView } = useProductContext();
  return (
    <Wrapper>
      <div>
        <button onClick={handleGridView} data-view="grid" className="sort-btn">
          <BsFillGridFill />
        </button>
        <button onClick={handleGridView} data-view="list" className="sort-btn">
          <BsList />
        </button>
      </div>
      <p>{filterdProduct.length} products founded</p>
      <hr />
      <div>
        <label htmlFor="sort">sort by</label>
        <select name="sort" id="sort">
          {sortList.map((item) => {
            const { id, value, name } = item;
            return (
              <option key={id} value={value}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  column-gap: 2rem;
  margin-bottom: 3rem;
  div{
      display:flex;
      align-items:center;
  }
  @media screen and (max-width:991px){
      grid-template-columns: 1fr;
  }
`;

export default Sort;
