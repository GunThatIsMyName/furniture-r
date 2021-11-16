import React, { useContext, useEffect, useReducer } from "react";
import { productReducer, productState } from "../reducer/productReducer";
import { load_products, reset_filters, update_filters } from "./actioin";
import { useUserContext } from "./UserContext";

const ProductContext = React.createContext();

const ProductProvider=({children})=>{
    const {productsItems}=useUserContext();
    const [state,dispatch]=useReducer(productReducer,productState)

    const handleCategory=(e)=>{
        let {name} = e.target;
        let {value}=e.target;
        if(name==="price"){
            value=Number(value)
        }
        if(name==="shipping"){
            value=e.target.checked;
        }
        dispatch({type:update_filters,payload:{name,value}})
    }

    const clearFilters=()=>{
        dispatch({type:reset_filters});
    }

    useEffect(()=>{
        dispatch({type:load_products,payload:productsItems})
    },[productsItems])

    return(
        <ProductContext.Provider value={{...state,handleCategory,clearFilters}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext=()=>{
    return useContext(ProductContext);
}

export default ProductProvider;