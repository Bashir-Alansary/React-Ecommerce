import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DiGitCompare } from "react-icons/di";
import { FiHeart } from "react-icons/fi";
import { FaHeart, FaDollarSign } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import "./Item.css"
import { useShopContext } from '../../Context/ShopContext';

export default function Item({id, img, name, oldPrice, newPrice, desc, listView, type, color, newArrivalsView}) {
  const{
    increaseItemAmount, 
    setAddedMsg, 
    setDisabledBtn, 
    addToWishlist, 
    wishlist, 
    compareList, 
    addToCompareList
  } = useShopContext();

  const linkClick = () => {
    window.scrollTo(0,0);
    setAddedMsg({text: "10 in stock", class: "msg done", availablity: true});
    setDisabledBtn(false);
  }

  const getItemClass = () => {
    if (listView) {
      return"item-list-view";
    } else if (newArrivalsView) {
      return newArrivalsView;
    } else {
      return "item";
    }
  }

  return (
    <div className={getItemClass()}>
      <div className='item-div'>
        <div className='content'>
          <Link className='imgbx link' to={"/product/"+ id}  onClick={linkClick}>
            <img src={img} />
          </Link>
          <div className='item-details'>
            <div className='text'>
              <Link className='link' to={"/product/"+ id}  onClick={linkClick}>
                <h3>{name}</h3>
              </Link>
              <div className='price'>
                <span className='new-price'>&#0036;{newPrice}</span>
                <span className='old-price'>&#0036;{oldPrice}</span>
              </div>
              {listView && <p className='description'>{desc}</p>}
            </div>
            <div className='interact'>
              <div className='item-icons compare-btn'>
                {!listView && <span className='icon-name'>
                  {compareList[id] === "compare" ? "it is in compare" : "Add to compare"}
                </span>}
                {compareList[id] === "compare"? <Link to="/compare" className="link icon-btn"><MdDoneOutline/> </Link>
                :<button onClick={()=>{addToCompareList(id)}} className='icon-btn'>
                  <DiGitCompare />
                </button>}
              </div>
              <div className='item-icons wishlist-btn'>
                {!listView && <span className='icon-name'>
                  {wishlist[id] === "favorite"? "it is in wishlist" : "Add to wishlist"}
                </span>}
                {wishlist[id] === "favorite"? <Link to="/wishlist" className="link icon-btn"><FaHeart /> </Link>
                :<button onClick={()=>{addToWishlist(id)}} className='icon-btn'>
                  <FiHeart />
                </button>}
              </div>
            </div>

            <div className="main-btn">
              <button className='special-btn' onClick={()=>increaseItemAmount(id)}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
