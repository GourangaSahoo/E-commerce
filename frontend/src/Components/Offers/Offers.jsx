import React from 'react'
import './Offers.css'
import exclucsive_image from '../Assets/exclusive_image.png'
 const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only on Best Sellers Product</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclucsive_image} alt="" />
        </div>
    </div>
  )
}
export default Offers;
