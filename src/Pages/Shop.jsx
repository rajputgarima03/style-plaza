import React, { useContext, useEffect, useState } from 'react';
import Hero from '../Components/Hero/Hero';
import NewCollections from '../Components/NewCollections/NewCollections';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import Offer from '../Components/Offer/Offer';
import Popular from '../Components/Popular/Popular';
import { ShopContext } from '../Context/ShopContext';
import { makeBearerTokenHeader, makeGetApiInvoke } from '../Utils/services';


const Shop = () => {
    const {setProducts} = useContext(ShopContext);
    const [fetchproducts, setFetchProducts] = useState([]);
    const [error, setError] = useState(false); 
    const fetchAllProducts = async ()=>{
        try{
            const response = await fetch ('http://192.168.29.20:8080/products');
            const data = await response.json();
            if(data){
                setProducts(data); 
                setFetchProducts(data)
                setError(false)
            }
            else{
                setError(true)
                setFetchProducts([])
            }
           
        }
   catch(error){
    setError(true)
   
   }
    }
    useEffect(()=>{
     fetchAllProducts()
    },[])
    return (
        <div>
        {error ? (
            <div className="error-message" style={{ color: 'red', fontSize: '18px', textAlign: 'center', marginTop: '20px' , height: '100vh'}}>
                Something went wrong while fetching products. Please try again later.
            </div>
        ) : (
            <>
                <Hero />
                {/* Uncomment these components as needed */}
                {/* <Popular/>
                <Offer/>
                <NewCollections/>
                <NewsLetter/> */}
            </>
        )}
    </div>
    )
}

export default Shop 