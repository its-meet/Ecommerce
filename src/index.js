import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

 //process.env.REACT_APP_AUTH_DOMAIN
// ahj5ZGOqYJOza2JQRSUS3wFOx0CKIFMG //process.env.REACT_APP_AUTH_CLIENT_ID

ReactDOM.render(
  <Auth0Provider
    domain='dev-8kcgiep5vrru7ztb.us.auth0.com'
    clientId={'fUA9dPoa8vLtFs9zouuZHyN5XGUzg994'}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
