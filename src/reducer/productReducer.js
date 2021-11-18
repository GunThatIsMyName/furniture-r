import {
  filter_product,
  load_products,
  reset_filters,
  singleProduct_data,
  singleProduct_error,
  singleProduct_loading,
  sort_product,
  update_filters,
  view_type,
} from "../context/actioin";

export const productState = {
  allProdcuts: [],
  filterdProduct: [],
  isGridView: true,
  sortBy: "name(a-z)",
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
  isSingleProductLoading: false,
  singleProductError: false,
  singleProducts: {},
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
      tempProduct = tempProduct.filter((item) => {
        return item.price <= current_price;
      });
      if (shipping) {
        tempProduct = tempProduct.filter((item) => {
          return item.shipping;
        });
      }
      return {
        ...state,
        filterdProduct: tempProduct,
      };
    case view_type:
      if (action.payload === "grid") {
        return { ...state, isGridView: true };
      } else {
        return { ...state, isGridView: false };
      }
    case sort_product:
      let tempProducts = state.filterdProduct;
      const type = action.payload;
      if (type === "name-a") {
        tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (type === "name-z") {
        tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      if (type === "price-lowest") {
        tempProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (type === "price-highest") {
        tempProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      return {
        ...state,
        filterdProduct: tempProducts,
      };
    case singleProduct_loading:
      return {
        ...state,
        isSingleProductLoading: true,
        singleProductError: false,
      };
    case singleProduct_data:
      return {
        ...state,
        singleProducts: action.payload,
        isSingleProductLoading: false,
      };
      case singleProduct_error:
      return {
        ...state,
        singleProductError: true,
        isSingleProductLoading: false,
      };
    default:
      throw new Error();
  }
};
