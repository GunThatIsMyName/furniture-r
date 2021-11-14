import React, { useContext, useReducer, useState } from "react";
import { initState, reducer } from "../reducer/userReducer";
import { products_url } from "../utils/help";

const UserContext = React.createContext();

const UserProvider =({children})=>{
    const [state, dispatch] = useReducer(reducer, initState);
    const [isSidebarOpen,setSidebar]=useState(false);
    const [mainItem,setMainItem]=useState([]);
    const handleSidebar=()=>{
        setSidebar(!isSidebarOpen)
    }

    const getShowRoom=async()=>{

        try{
            const getData=await fetch(products_url);
            const data = await getData.json();
            const showData = data.slice(0,3);
            setMainItem(showData)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <UserContext.Provider  value={{...state,isSidebarOpen,handleSidebar,getShowRoom,mainItem}} >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = ()=>{
    return useContext(UserContext);
}

export default UserProvider;