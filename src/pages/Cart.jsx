import React from 'react';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import ProductCartView from '../components/product/ProductCartView';
import useDocumentTitle from '../hooks/useDocumentTitle';

const Cart = () => {
    useDocumentTitle('Cart');
    const products = useSelector(state => state.products);
    const totalCost = useSelector(state => state.totalCost);

    return (
        <div className='container' style={{maxWidth: 70 + 'rem'}}>
            <Navbar />
            <div className='main-content'>
                <div className='container mt-4'>
                    <h4>Your Cart <span className='text-secondary fs-6'>{products.length} items</span></h4>
                    <div className='row'>
                        <div className='col-sm-8'>
                        {products.length > 0 ?
                            products.map(product =>
                            <div key={product.id}>
                                <hr />
                                <ProductCartView product={product}/>
                            </div>    
                            ) :
                            <h3 className='text-secondary'>Empty</h3>
                        }
                        </div>
                        <div className='col-sm-4'>
                            <h6>Order details</h6>
                            <hr />
                            {products.map( product =>
                                <div className='row mb-2' key={product.id}>
                                    <div className='col-sm-9' style={{fontSize: 14 + 'px'}}>
                                        {product.name}
                                    </div>
                                    <div className='col-sm-3'>
                                        {product.price} ₽
                                    </div>
                                </div>
                            )}
                            <hr />
                            <h6>
                                <div className='row'>
                                    <div className='col-sm-9'>Total:</div>
                                    <div className='col-sm-3'>{totalCost} ₽</div>
                                </div>
                            </h6>
                            <hr />
                            <button type="button" className="btn btn-dark w-100">
                                Go to checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;