import React from 'react';
import '../../styles/popper.css';

const AddProductTooltip = ({warning}) => {
  if (warning) return (
    <div className='add-product-tooltip warning'>
        This product is already in your cart...
    </div>
  )

  return (
    <div className='add-product-tooltip'>
        This product has been added to your cart!
    </div>
  )
}

export default AddProductTooltip;