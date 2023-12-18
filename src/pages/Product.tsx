import React from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import useFetchGet from '../hooks/useFetchGet';
import Spinner from '../components/Spinner';
import ProductDetailView from '../components/product/ProductDetailView';
import ServerError from '../components/ServerError';
import useDocumentTitle from '../hooks/useDocumentTitle';
import Footer from '../components/Footer';

const config = require('../config.json');

const Product = () => {
    const { productId } = useParams();
    const { error: increaseViewsError } = useFetchGet(`${config.API_URL}/products/increase-views?id=${productId}`);
    const { data: product, loading, error: getProductError } = useFetchGet(`${config.API_URL}/products/get-one?id=${productId}`);
    useDocumentTitle(product ? product.name : 'Loading...');

    if (increaseViewsError) console.log(increaseViewsError);

    if (getProductError) return <ServerError />;

    return (
        <>
            <div className='main-content'>
                {loading ? <Spinner /> :
                    <div className='container mt-5'>
                        <ProductDetailView product={product}/>
                    </div>
                }
            </div>
        </>
    )
}

export default Product;