import React from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from "react-router-dom";
import { Provider } from 'react-redux';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { store } from './store/index';
import Main from './pages/Main';
import AllProducts from './pages/AllProducts';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
      <Provider store={store}>
        <Navbar />
        <div className='container main-content'>
          <BrowserRouter>
            <Routes>
              <Route path="/stickmouse" element={<Main />} />
              <Route path="/stickmouse/all" element={<AllProducts />} />
              <Route path="/stickmouse/cart" element={<Cart />} />
              <Route path="/stickmouse/product/:productId" element={<Product />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </Provider>
    )
}

export default App;