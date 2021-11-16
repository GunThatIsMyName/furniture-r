import React from "react";
import { GridView, ListView } from ".";
import { useProductContext } from "../context/productContext";

const ProductsList = () => {
  const { filterdProduct,isGridView } = useProductContext();
  console.log(isGridView,"true")
  if(isGridView){
    return(
      <GridView product={filterdProduct} />
    )
  }
  return <ListView product={filterdProduct} />
};

export default ProductsList;
