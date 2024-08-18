import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import {ShopContext} from '../Context/ShopContext'
import { makeGetApiInvoke } from '../Utils/services';

const Product = () => {
    const {allProducts} = useContext(ShopContext);
    const {productId} = useParams();
    const product = allProducts.find((e)=> e.productId === productId)
    return (
        <div>
           <Breadcrum products={product}/>
           <ProductDisplay product={product}/>
           <DescriptionBox/>
        </div>
    )
}

export default Product 