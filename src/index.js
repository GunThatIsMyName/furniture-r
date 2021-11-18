import React from "react";
import ReactDOM from "react-dom";
import "./style/style.css";
import App from "./App";
import { ProductProvider, UserProvider } from "./context";
import CartProvider from "./context/useCartContext";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
