import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useShopContext } from '../../Context/ShopContext';
import SubCart from '../SubCart/SubCart';
import "./Navbar.css";
import { FiPlus, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import TemplatesList from '../TemplatesList/TemplatesList';
import Search from '../Search/Search';
import wishlist from "../Assets/images/wishlist.png"

export default function Navbar() {

    const {getCartAmount, showSubCart, setShowSubCart} = useShopContext();
    const [showTemplates, setShowTemplates] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'>
                <img src='images/logo.png' />
            </div>
            <div className='main-links'>
                <ul className='links'>
                    <li><NavLink className="link" to="/" activeClassName = "active" >Home</NavLink></li>
                    <li><NavLink className="link" to="men">Men</NavLink></li>
                    <li><NavLink className="link" to="women">Women</NavLink></li>
                    <li><NavLink className="link" to="kids">Kids</NavLink></li>
                    <li><NavLink className="link" to="shop">Shop</NavLink></li>
                </ul>
                <div className='tamplates-link' onMouseEnter={()=>setShowTemplates(true)} onMouseLeave={()=>setShowTemplates(false)}>
                    <div className='btn-content'>
                        <button>
                            <span>tamplates</span>
                            <FiPlus className='templates-icon'/>
                        </button>
                    </div>
                    <TemplatesList showTemplates = {showTemplates} />
                </div>
            </div>
            <div className='login-cart'>
                <div className='search-content'>
                    {!showSearch && <button className="special-link" onClick={()=> setShowSearch(true)}>
                        <FiSearch className='icon' />
                    </button>}
                    <Search showSearch={showSearch} setShowSearch={setShowSearch} />
                </div>
                <NavLink className="link special-link" to="wishlist"><img src={wishlist} /></NavLink>
                <NavLink className="link special-link" to="login"><AiOutlineUser className='icon' /></NavLink>
                <div className='cart-btn'>
                    <button onClick={()=>setShowSubCart(true)}>
                        <img src='images/cart.png' />
                        <span className='count'>{getCartAmount()}</span>
                    </button>
                    <SubCart />
                </div>
            </div>
        </div>
    </div>
  )
}
