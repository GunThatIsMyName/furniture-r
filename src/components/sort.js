import React from "react";
import { BsFillGridFill,BsList } from 'react-icons/bs';
import { useProductContext } from "../context/productContext";

const Sort = () => {
    const {filterdProduct} = useProductContext();
  return (
    <>
        <button className="sort-btn">
            <BsFillGridFill />        
        </button>
        <button className="sort-btn">
            <BsList />
        </button>
        <p>
            {filterdProduct.length} products founded
        </p>
        <hr />
    </>
  );
};


export default Sort;
