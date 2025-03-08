import React, { useContext } from 'react'
import './Navbar.css';
import { useState } from 'react';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
 const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
    
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>CARA</p>
            </div>
            <ul className="nav-menu">
                <li title='Shop' onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li title='men fashion' onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
                <li title='Women fashion' onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li title='kids fashion' onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
               <Link style={{textDecoration:'none'}} to='/Sign-up'><button title='Login' onClick={()=>setMenu("")}>Login</button></Link> 
               <Link style={{textDecoration:'none'}} to='/cart'><img src={cart_icon} alt="" title='Cart'onClick={()=>setMenu("")} /></Link> 
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
    </div>
  )
}
export default Navbar;