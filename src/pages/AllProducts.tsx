import React from 'react';

import Navbar from '../components/Navbar';
import useFetchGet from '../hooks/useFetchGet';
import ProductList from '../components/product/ProductList';
import Spinner from '../components/Spinner';
import ServerError from '../components/ServerError';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Footer from '../components/Footer';

const config = require('../config.json');

const AllProducts = () => {
  useDocumentTitle('All Products');
  const { data: products, loading, error } = useFetchGet(`${config.API_URL}/products/get-all`);

  if (error) return <ServerError />;

  return (
    <>
      <div className='main-content'>
        {loading ? <Spinner /> :
          <div className='container mt-4'>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Products</li>
            <li className="breadcrumb-item active">All</li>
          </ol>
          <h4>All products <span className='text-secondary fs-6'>{products.length} items</span></h4>
          <ProductList products={products} />
          </div>
        }
      </div>
    </>
  )
}

export default AllProducts;