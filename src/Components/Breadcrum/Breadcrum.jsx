import React from 'react';
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
   const {products} = props
    return (
        <div className='breadcrum'>
          Home<img src={arrow_icon} alt =""/> SHOP <img src={arrow_icon} alt =""/> {products?.category} <img src={arrow_icon} alt =""/> {products?.productName}
        </div>
    )
}

export default Breadcrum 