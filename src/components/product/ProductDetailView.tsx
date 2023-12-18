import React from 'react'
import { useDispatch } from 'react-redux';

const ProductDetailView = ({product}) => {
    const dispatch = useDispatch();
  
    const addProductToCart = () => {
        dispatch({
        type: 'ADD_PRODUCT',
        payload: product
        })
    }

  return (
    <div className='row'>
        <div className='text-secondary mb-3'>
            <span className='me-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
            </svg>
            </span>
            {product.views} views
        </div>
        <div className='col-sm-7'>
            {product.path_to_img ?
                <img src={product.path_to_img} alt="" className="img-fluid" />:
                <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="" className="img-fluid" />
            }
        </div>
        <div className='col-sm-5'>
            <h5><span className='text-secondary'>{product.category} | </span> {product.name}</h5>
            <h4 className='text-success'>{product.price} ₽</h4>
            <div className='mb-3'>{product.description}</div>
            <button onClick={addProductToCart} type="button" className="btn btn-dark w-100">
                Add to cart
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-bag-plus" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
                <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                </svg>
            </button>
        </div>
    </div>
  )
}

export default ProductDetailView;