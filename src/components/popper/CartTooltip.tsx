import React from 'react';
import '../../styles/popper.css';

const CartTooltip = ({amount, totalCost}) => {
  return (
    <div className='cart-tooltip'>
        <div>{amount} items in your cart. Click on icon to open cart</div>
        <hr />
        <div>The cost of items in cart is <span className='price'>{totalCost}</span> ₽</div>
    </div>
  )
}

export default CartTooltip;