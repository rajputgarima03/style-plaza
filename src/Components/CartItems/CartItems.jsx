import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import './CartItems.css';
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const { allProducts, cartItems, removeFromCart,getTotalCartAmount } = useContext(ShopContext)
    return (

        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {allProducts?.map((e) => {
                if (cartItems[e.productId] > 0) {
                    return (<div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.productImage} alt="" className="carticon-product-icon" />
                            <p>{e.productName}</p>
                            <p>{`$${e.productNewPrice}`}</p>
                            <button className="cartitems-quantity">{cartItems[e.productId]}</button>
                            <p>{`$${e.productNewPrice * cartItems[e.productId]}`}</p>
                            <img className="cartitems-remove-icon" src={remove_icon} onClick={() => { removeFromCart(e.productId) }} alt="" />
                        </div>
                    </div>)
                }
                return null
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                   <h1>Cart Total :</h1>
                   <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                   </div>
                   <button>PROCEED TO CHECKOUT</button>
                </div>

            </div>
        </div>
    )
}

export default CartItems