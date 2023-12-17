import React from "react";
import '../../styles/custom.css';
import { useDispatch } from "react-redux";

const ProductCartView = ({product}) => {
  const dispatch = useDispatch();
  
  const removeProductFromCart = () => {
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: product
    })
  }

  return (
    <div className='row p-1' style={{minHeight: 200 + 'px'}}>
      <div className='col-sm-3'>
        <a href={`/product/${product.id}`}>
          {product.path_to_img ?
            <img src={product.path_to_img} alt="" className="rounded float-start img-fluid" />:
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="" className="rounded float-start img-fluid" />
          }
        </a>
      </div>
      <div className='col-sm-9 mb-3'>
        <h6>
          <span className="badge bg-success me-2">{product.price} ₽</span> 
          <a href={`/product/${product.id}`}>{product.name}</a>
        </h6>
        <button onClick={removeProductFromCart} type="button" className="btn btn-outline-dark mt-2">
            Remove from
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-bag-dash" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
            <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg>
        </button>
      </div>
    </div>
  )
}

export default ProductCartView;