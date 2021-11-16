import React, { useContext, useEffect, useReducer, useState } from "react";
import { initState, reducer } from "../reducer/userReducer";
import { products_url } from "../utils/help";
import { errorShowRoom_AC, getShowroomData_AC, loading_AC } from "./actioin";

const UserContext = React.createContext();

const UserProvider =({children})=>{
    const [state, dispatch] = useReducer(reducer, initState);
    const [isSidebarOpen,setSidebar]=useState(false);
    const handleSidebar=()=>{
        setSidebar(!isSidebarOpen)
    }

    const getShowRoom=async()=>{
        dispatch({type:loading_AC})
        try{
            const getData=await fetch(products_url);
            const data = await getData.json();
            dispatch({type:getShowroomData_AC,payload:data})
        }catch(error){
            dispatch({type:errorShowRoom_AC})
            console.log(error)
        }
    }

    useEffect(() => {
        getShowRoom();
        // eslint-disable-next-line
      }, []);

    return(
        <UserContext.Provider  value={{...state,isSidebarOpen,handleSidebar,getShowRoom}} >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = ()=>{
    return useContext(UserContext);
}

export default UserProvider;