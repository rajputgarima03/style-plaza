import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const {addToCart} = useContext(ShopContext); 
    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.productImage} alt="" />
                    <img src={product.productImage} alt="" />
                    <img src={product.productImage} alt="" />
                    <img src={product.productImage} alt="" />
                </div>
                <div className='productdisplay-img'>
                    <img className='productdisplay-main-img' src={product.productImage} alt="" />
                </div>



            </div>
            <div className='productdisplay-right'>
                <h1>{product.productName}</h1>
                <div className='productdisplay-right-star'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>{`(${product.stock})`}</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>
                        ${product.productOldPrice}
                    </div>
                    <div className='productdisplay-right-price-new'>
                        ${product.productNewPrice}
                    </div>
                </div>
                <div className='productdisplay-right-description'>
                   {product.description}
                </div>
                {/* <div className='productdisplay-right-size-div'>
                   <h1>Select Size</h1>
                   <div className='productdisplay-right-size'>
                      <div>S</div>
                      <div>M</div>
                      <div>L</div>
                      <div>XL</div>
                      <div>XXL</div>
                   </div>
                </div> */}
                <button onClick={()=>{addToCart(product.productId)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category: </span>{product.category}</p>
                <p className='productdisplay-right-category'><span>Tags: </span> Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay