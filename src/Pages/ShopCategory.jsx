import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
import { envUrl } from '../Utils/env';
import config from '../Utils/config.json';


const ShopCategory = (props) => {
    const {allProducts} = useContext(ShopContext);
    const [categoryData, setCategoryData] = useState([]);
    const[error, setError] = useState(null);

    useEffect(()=>{
     getCategoryData();
    },[props])

   const getCategoryData = async() =>{
    try{ 
        const response = await fetch (`${envUrl()}${config['category']}/${props.category}`);
        const data = await response.json();
        if(data){
            setCategoryData(data); 
            setError(false)
        }
        else{
            setError(true)
            setCategoryData([])
        }
       
    }
catch(error){
setError(true)

}

    }
    return (
        <div className='shop-category'>
           <img className='shopcategory-banner' src={props.banner} alt =""/>
           <div className='shopcategory-indexSort'>
            <p>
                <span>Showing items that matched your category </span>
            </p>
            {/* <div className='shopcategory-sort'>
               Sort by <img src={dropdown_icon}alt=''/> 
            </div> */}
           </div>
           <div className='shopcategory-products'>
              {categoryData.length >0 && categoryData?.map((item,i)=>{
                return <Item key={i} id={item.productId} name={item.productName} new_price={item.productNewPrice} old_price={item.productOldPrice} image={item.productImage} />
              })}
              {
                categoryData.length == 0 &&  (
                    <div className="no-data-block">
                        <p>No data to show</p>
                    </div>
                )
              }
           </div>
           {/* <div className='shopcategory-loadmore'>
             Explore More
           </div> */}
        </div>
    )
}

export default ShopCategory 