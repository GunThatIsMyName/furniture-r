import {
  load_products,
  reset_filters,
  update_filters,
} from "../context/actioin";

export const productState = {
  allProdcuts: [],
  filterdProduct: [],
  filter: {
    search: "",
    category: "all",
    company: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    current_price: 0,
    shipping: false,
  },
};

export const productReducer = (state, action) => {
  switch (action.type) {
    case update_filters:
      const { name, value } = action.payload;
      return {
        ...state,
        filter: { ...state.filter, [name]: value },
      };
    case load_products:
      const products = action.payload;
      let maxPrice = products.map((item) => item.price);
      maxPrice = Math.max(...maxPrice);
      return {
        ...state,
        allProdcuts: products,
        filterdProduct: products,
        filter: {
          ...state.filter,
          max_price: maxPrice,
          current_price: maxPrice,
        },
      };
    case reset_filters:
      return {
        ...state,
        filter: {
          ...state.filter,
          search: "",
          category: "all",
          company: "all",
          color: "all",
          current_price: state.filter.max_price,
          shipping: false,
        },
      };
    default:
      throw new Error();
  }
};
