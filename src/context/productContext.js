import React, { useContext, useEffect, useReducer, useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { productReducer, productState } from "../reducer/productReducer";
import { single_product_url } from "../utils/help";
import { filter_product, load_products, reset_filters, singleProduct_data, singleProduct_error, singleProduct_loading, sort_product, update_filters, view_type } from "./actioin";
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
    const handleSort=(e)=>{
        const {value}=e.target;
        dispatch({type:sort_product,payload:value})
    }
    const getSingleProduct=async(id)=>{
        const URL = `${single_product_url}${id}`
        console.log("1")
        dispatch({type:singleProduct_loading})
        try {
            const response = await fetch(URL);
            const data = await response.json();
            console.log("2")
            dispatch({type:singleProduct_data,payload:data})
        } catch (error) {
            dispatch({type:singleProduct_error})
        }
    }

    useEffect(()=>{
        dispatch({type:load_products,payload:productsItems})
    },[productsItems])

    useEffect(()=>{
        dispatch({type:filter_product})
    },[state.filter])

    return(
        <ProductContext.Provider value={{...state,handleCategory,clearFilters,handleGridView,handleSort,getSingleProduct}}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductContext=()=>{
    return useContext(ProductContext);
}

export default ProductProvider;