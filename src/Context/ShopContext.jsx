import React,{createContext, useState} from "react";
import all_products from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart = {};
    for(let i = 0 ; i< all_products.length; i++){
        cart[i] = 0
    }
    return cart;
}
const ShopContextProvider = (props) =>{
    const[cartItems, setCartItems] = useState(getDefaultCart())
    const addToCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]: prev[itemId]-1}))
    }
    const getTotalCartAmount = ()=>{
       let total = 0;
       for(const i in cartItems){
        if(cartItems[i] > 0){
            let itemInfo = all_products.find((product)=>product.id === Number(i))
            total = total + itemInfo.new_price * cartItems[i];
        }
        
       }
       return total
    }
    const getTotalCartLength = ()=>{
        let total = 0;
        for(const i in cartItems){
         if(cartItems[i] > 0){
             total = total + cartItems[i];
         }
         
        }
        return total
     }
    const contextValue = { all_products,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartLength};
    
    return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    )
   
}

export default ShopContextProvider