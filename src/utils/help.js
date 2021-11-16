import {FaShoppingCart,FaUserAlt,FaShip,FaParachuteBox,FaSnowboarding} from 'react-icons/fa'

const products_url = 'https://course-api.com/react-store-products';

const single_product_url = `https://course-api.com/react-store-single-product?id=`;


const navLinks = [
    {id:1,path:"/",name:"home"},
    {id:2,path:"/about",name:"about"},
    {id:3,path:"/products",name:"products"},
]

const navIcons =[
    {id:1,icon:<FaShoppingCart/>,name:"cart"},
    {id:2,icon:<FaUserAlt/>,name:"login"},
]

const infoData = [
    {id:1,icon:<FaShip />,name:"mission",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"},
    {id:2,icon:<FaParachuteBox />,name:"vision",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"},
    {id:3,icon:<FaSnowboarding />,name:"history",desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi"},
]
const sortList = [
    {id:1,value:"name-a",name:"name(a-z)"},
    {id:2,value:"name-z",name:"name(z-a)"},
    {id:3,value:"price-lowest",name:"price (Lowest)"},
    {id:4,value:"price-highest",name:"price (Highest)"},
]
const formatPrice = (price) => {
    const newNumber= new Intl.NumberFormat('en-US',{
        style:"currency",
        currency:"USD"
    }).format(price/100)
    return newNumber;
}

export {navLinks,navIcons,products_url,single_product_url,infoData,formatPrice,sortList}