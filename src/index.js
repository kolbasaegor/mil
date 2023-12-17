import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

import Main from './pages/Main';
import AllProducts from './pages/AllProducts';
import Product from './pages/Product';
import { store } from './store/index';
import Cart from './pages/Cart';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/all",
    element: <AllProducts />,
  },
  {
    path: "/product/:productId",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
