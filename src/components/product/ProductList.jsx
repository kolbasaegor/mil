import React from 'react';
import ProductRowView from './ProductRowView';

const ProductList = ({products}) => {
  return (
    <div>
      {products.map(product =>
        <div key={product.id}>
          <hr />
          <ProductRowView product={product}/>
        </div> 
      )}
    </div>
  )
}

export default ProductList;