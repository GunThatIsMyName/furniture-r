import { addToCart, cartItem_amount, cartItem_LS, cartItem_reduce, cartItem_remove } from "../context/actioin";


const cartItems_data=()=>{
  const data = JSON.parse(localStorage.getItem(cartItem_LS));
  if(data===null){
    return []
  }
  return data;
}
export const initState = {
  cartItems: cartItems_data(),
  total_items:0,
  total_price:0,
  total_amount:0,
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case addToCart:
      const { id, mainColor, stock, product, amount } = action.payload;
      let tempCart = state.cartItems.find((item) => item.id === id + mainColor);
      if (tempCart) {
        const oldItem = state.cartItems.map((item) => {
          if(item.max<=amount+item.amount){
            return{...item,amount:item.max}
          }else{
            return{...item,amount:item.amount+amount};
          }
        });
        return { ...state, cartItems: oldItem };
      } else {
        const newItem = {
          id: id + mainColor,
          mainColor,
          max: stock,
          amount,
          image: product.images[0].url,
          name: product.name,
          price: product.price,
        };
        return { ...state, cartItems: [...state.cartItems, newItem] };
      }
    case cartItem_amount:
      const {cartItems}=state;
      const {type,data}=action.payload;
      const newAmount = cartItems.map(item=>{
        if(item.id===data){
          if(type==="inc"){
            if(item.max<=item.amount){
              return {...item,amount:item.max}
            }else{
              return {...item,amount:item.amount+1}
            }
          }else{
            return {...item,amount:item.amount-1};
          }
        }
        return item;
      }).filter(item=>item.amount!==0)
      return{
        ...state,cartItems:newAmount
      }
    case cartItem_remove:
      const newCartItem=state.cartItems.filter(item=>item.id!==action.payload)
      return{
        ...state,cartItems:newCartItem
      }
    case cartItem_reduce:
      const {total_amount,total_price} = state.cartItems.reduce((total,curr)=>{
        const price = curr.price*curr.amount;
        const amount = curr.amount;
        total.total_amount+=amount;
        total.total_price+=price;
        return total;
      },{
        total_price:0,
        total_amount:0
      })
      return{
        ...state,total_amount,total_price
      }
    default:
      throw new Error();
  }
};
