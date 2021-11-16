import {
  filter_product,
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
    case filter_product:
      const { search, category, company, color, current_price, shipping } =
        state.filter;
      let tempProduct = [...state.allProdcuts];
      if (search) {
        tempProduct = tempProduct.filter((item) => {
          return item.name.includes(search);
        });
      }
      if (category !== "all") {
        tempProduct = tempProduct.filter((item) => {
          return item.category === category;
        });
      }
      if (company !== "all") {
        tempProduct = tempProduct.filter((item) => {
          return item.company === company;
        });
      }
      if (color !== "all") {
        tempProduct = tempProduct.filter((item) => {
          return item.colors.find((item) => {
            return item === color;
          });
        });
      }
      tempProduct = tempProduct.filter(item=>{
        return item.price <=current_price;
      })
      if(shipping){
        tempProduct = tempProduct.filter(item=>{
          return item.shipping
        })
      }
      // if (colors !== "all") {
      //   tempProducts = tempProducts.filter((product) => {
      //     return product.colors.find((c) => c === colors);
      //   });
      // }

      console.log(tempProduct, "temp");
      return {
        ...state,
        filterdProduct: tempProduct,
      };
    default:
      throw new Error();
  }
};
