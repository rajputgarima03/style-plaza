import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import {ShopContext} from '../Context/ShopContext'

const Product = () => {
    const {all_products} = useContext(ShopContext);
    const {productId} = useParams();
    const product = all_products.find((e)=> e.id === Number(productId))
    return (
        <div>
           <Breadcrum products={product}/>
           <ProductDisplay product={product}/>
           <DescriptionBox/>
        </div>
    )
}

export default Product 