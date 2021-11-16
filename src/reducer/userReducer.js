import {  errorShowRoom_AC, getShowroomData_AC, loading_AC } from "../context/actioin"

export const initState={
    isSidebar:false,
    loading:false,
    showRoomItems:[],
    productsItems:[],
    error:false,
}

export const reducer =(state,action)=>{
    switch(action.type){
        case loading_AC:
            return{
                ...state,loading:true,error:false
            }
        case getShowroomData_AC:
            const data = action.payload;
            return {
                ...state,showRoomItems:data,productsItems:data,loading:false
            }
        case errorShowRoom_AC:
            return{
                ...state,error:true,loading:false
            }
        default:
            throw new Error();
    }
}