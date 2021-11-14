import React, { useContext, useReducer, useState } from "react";
import { initState, reducer } from "../reducer/userReducer";

const UserContext = React.createContext();

const UserProvider =({children})=>{
    const [state, dispatch] = useReducer(reducer, initState);
    const [isSidebarOpen,setSidebar]=useState(false);
    const handleSidebar=()=>{
        console.log(isSidebarOpen,"??")
        setSidebar(!isSidebarOpen)
    }
    return(
        <UserContext.Provider  value={{...state,isSidebarOpen,handleSidebar}} >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = ()=>{
    return useContext(UserContext);
}

export default UserProvider;