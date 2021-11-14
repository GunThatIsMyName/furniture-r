import {FaShoppingCart,FaUserAlt} from 'react-icons/fa'

const navLinks = [
    {id:1,path:"/",name:"home"},
    {id:2,path:"/about",name:"about"},
    {id:3,path:"/products",name:"products"},
]

const navIcons =[
    {id:1,icon:<FaShoppingCart/>,name:"cart"},
    {id:2,icon:<FaUserAlt/>,name:"login"},
]

export {navLinks,navIcons}