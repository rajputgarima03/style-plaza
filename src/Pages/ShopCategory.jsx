import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../Context/ShopContext';
import './CSS/ShopCategory.css';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';


const ShopCategory = (props) => {
    const {allProducts} = useContext(ShopContext)
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
              {allProducts?.map((item,i)=>{
               if(props.category === item.category){
                return <Item key={i} id={item.productId} name={item.productName} new_price={item.productNewPrice} old_price={item.productOldPrice} image={item.productImage} />
               }
               else{
                return null
               }
              })}
           </div>
           {/* <div className='shopcategory-loadmore'>
             Explore More
           </div> */}
        </div>
    )
}

export default ShopCategory 