import React,{createContext, useState} from "react";
import all_products from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
    const [allProducts, setAllProducts] = useState([]);
   
    const setProducts = (products) => {
        setAllProducts(products);
   
    };

    const getDefaultCart = () =>{
        let cart = {};
        for(let i = 0 ; i< allProducts.length; i++){
            cart[i] = 0
        }
        return cart;
    }
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (itemId)=>{
        if (cartItems.hasOwnProperty(itemId)){
            setCartItems((prev)=>({...prev, [itemId]: prev[itemId]+1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]: 1}))
        }
        
        
    }
    const removeFromCart = (itemId)=>{
        if (cartItems.hasOwnProperty(itemId)){
            setCartItems(prevState => {
                const newData = {...prevState};
                delete newData[itemId];
                return newData;
              });
        }
        
    }
    const getTotalCartAmount = ()=>{
       let total = 0;
       for(const i in cartItems){
        if(cartItems[i] > 0){
            let itemInfo = allProducts.find((product)=>product.productId === i)
            total = total + itemInfo.productNewPrice * cartItems[i];
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
    const contextValue = { allProducts,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartLength,setProducts};
    
    return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
    )
   
}

export default ShopContextProvider