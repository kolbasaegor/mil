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
        className="btn btn-dark float-end"
      >
        Add to cart
      </button>
      </div>
    </div>
    </>
  )
}

export default ProductRowView;