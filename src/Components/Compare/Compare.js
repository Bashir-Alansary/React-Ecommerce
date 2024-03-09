import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useShopContext } from '../../Context/ShopContext';
import compareBanner from "../Assets/images/compare_banner.png"
import {RiDeleteBin2Line} from "react-icons/ri"
import Banner from '../Banner/Banner';
import "./Compare.css"

export default function Compare() {

    const {all_product, compareList, removeFromCompareList, getCompareListAmount} = useShopContext();
    console.log(compareList);

  return (
    <div className='compare'>
        <Banner img = {compareBanner} title = {"let's compare"} />
        <div className='container'>
          {getCompareListAmount() > 0 ? <div className='content'>
            {
              all_product.map(item => {
                if (compareList[item.id] === "compare") {
                  const {id, img, name, newPrice} = item;
                  return (
                    <div className='box'>
                      <div className='imgbx'>
                      <Link className='imgbx link' to={"/product/"+ id}  onClick={()=>window.scroll(0,0)}>
                        <img src={img} />
                      </Link>
                      </div>
                      <div className='text'>
                      <Link className='link' to={"/product/"+ id}  onClick={()=>window.scroll(0,0)}>
                        <h3>{name}</h3>
                      </Link>
                        <span>{newPrice}$</span>
                        <div className='main-btn'>
                          <Link className='link special-btn' to={"/product/"+id}>select options</Link>
                        </div>
                        <button onClick={()=>removeFromCompareList(id)}className="remove">
                          <RiDeleteBin2Line className='remove-icon' />
                        </button>
                      </div>
                    </div>
                  )
                }
              })
            }
            
          </div>
       : <div className='empty-compare'>
            <h2>Nothing found in wishlist!</h2>
            <div className='main-btn'>
                <Link 
                className='link special-btn' 
                to="/" onClick={()=>window.scroll(0,0)}>
                continue shopping
                </Link>
            </div>
       </div>}
        </div>
    </div>
  )
}
