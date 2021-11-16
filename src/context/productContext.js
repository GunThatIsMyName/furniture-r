import React, { useContext, useEffect, useReducer, useState } from "react";
import { FaIgloo } from "react-icons/fa";
import { productReducer, productState } from "../reducer/productReducer";
import { filter_product, load_products, reset_filters, update_filters, view_type } from "./actioin";
import { useUserContext } from "./UserContext";

const ProductContext = React.createContext();

const ProductProvider=({children})=>{
    const {productsItems}=useUserContext();
    const [state,dispatch]=useReducer(productReducer,productState)

    const handleGridView=(e)=>{
        let viewType;
        const {nodeName}=e.target;
        if(nodeName==="BUTTON"){
            viewType=e.target.dataset.view;
        }else if(nodeName==="svg"){
            viewType=e.target.parentElement.dataset.view;
        }else{
            viewType=e.target.parentElement.parentElement.dataset.view;
        }
        dispatch({type:view_type,payload:viewType})
    }
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

    useEffect(()=>{
        dispatch({type:filter_product})
    },[state.filter])

    return(
        <ProductContext.Provider value={{...state,handleCategory,clearFilters,handleGridView}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext=()=>{
    return useContext(ProductContext);
}

export default ProductProvider;