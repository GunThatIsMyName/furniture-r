import React from 'react';
import ReactDOM from 'react-dom';
import "./style/style.css"
import App from './App';
import { ProductProvider, UserProvider } from './context';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);