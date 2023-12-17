import React from 'react';

const ProductCard = ({product}) => {
  return (
    <a href={`/product/${product.id}`} className='text-dec-none'>
        <div className='card' style={{width: 20 + 'rem', maxWidth: 100 + '%'}}>
            {product.path_to_img ?
                <img src={product.path_to_img} className="card-img-top crop-img" alt=""></img> :
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="" className="card-img-top crop-img" />
            }
            <div className="card-body">
                <span className='text-secondary'>
                    <span className='me-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
                    </svg>
                    </span>
                    {product.views} views
                </span>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                    {product.description.length > 100 ?
                        `${product.description.substring(0, 100)}...`:
                        product.description
                    }
                </p>
                <div className='btn btn-success'>{product.price} ₽</div>
            </div>
        </div>
    </a>
    
  )
}

export default ProductCard;