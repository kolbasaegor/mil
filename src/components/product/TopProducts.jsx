import React from 'react';
import useFetchGet from '../../hooks/useFetchGet';
import Spinner from '../Spinner';
import ProductCard from './ProductCard';
import ServerError from '../ServerError';

const config = require('../../config.json');

const TopProducts = ({limit}) => {
    const { data: products, loading, error } = useFetchGet(`${config.API_URL}/products/get-top?limit=${limit}`);

    if (loading) return <Spinner />;

    if (error) return <ServerError />;

    return (
        <div className='row justify-content-center'>
            {products.map(product => 
                <div key={product.id} className='col-auto mb-4'>
                    <ProductCard product={product}/>
                </div>
            )}
        </div>
    )
}

export default TopProducts;