import React from "react";
import '../../styles/custom.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { usePopper } from "react-popper";

import AddProductTooltip from "../popper/AddProductTooltip";

const ProductRowView = ({product}) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const [productInCart, setProductInCart] = useState(false);

  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: 'top',
      modifiers: [
      {
          name: 'offset',
          options: {
          offset: [0, 8],
          },
      },
      ]
  });
  
  const addProductToCart = () => {
    if (products.findIndex(product_ => product_.id === product.id) == -1) setProductInCart(false);
    else setProductInCart(true);

    popperElement.setAttribute('data-show', true);
    setTimeout(() => popperElement.removeAttribute('data-show'), 2000);

    dispatch({
      type: 'ADD_PRODUCT',
      payload: product
    })
  }

  return (
    <>
    <div
        className='popper-element'
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
    >
        <AddProductTooltip warning={productInCart}/>
    </div>
    <div className='row p-1' style={{minHeight: 250 + 'px'}}>
      <div className='col-sm-4'>
        <a href={`/stickmouse/product/${product.id}`}>
          {product.path_to_img ?
            <img src={product.path_to_img} alt="" className="rounded float-start img-fluid" />:
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png" alt="" className="rounded float-start img-fluid" />
          }
        </a>
      </div>
      <div className='col-sm-6 mb-3'>
        <h5>
          <span className="badge bg-success me-2">{product.price} ₽</span> 
          <a href={`/stickmouse/product/${product.id}`}>{product.name}</a>
        </h5>
        <div className='text-secondary'>{product.category}</div>
        <div>
          {product.description.length > 200 ?
            `${product.description.substring(0, 200)}...`:
            product.description
          }
        </div>
      </div>
      <div className='col-sm-2'>
      <button
        onClick={addProductToCart}
        ref={setReferenceElement}
        type="button"
        className="btn btn-dark"
        style={{width: 120 + 'px'}}
      >
        Add to
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2 bi bi-bag-plus" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5"/>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
        </svg>
      </button>
      </div>
    </div>
    </>
  )
}

export default ProductRowView;