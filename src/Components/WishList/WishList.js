import React, { useState } from 'react'
import "./WishList.css"
import { useShopContext } from '../../Context/ShopContext'
import { RiDeleteBin2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import emptyWishlist from "../Assets/images/empty_wishlist.png"
import wishlistBanner from "../Assets/images/wishlist_banner.png"
import Banner from '../Banner/Banner';

export default function WishList() {

    const {all_product, wishlist, removeFromWishlist, getWishlistAmount} = useShopContext();

  return (
    <div className='wishlist'>
       <Banner img = {wishlistBanner} title = {"Your Wishlist"} />
        <div className='wishlist-items'>
            <div className='container'>
                <div className='content'>
                 {getWishlistAmount() > 0 ? <table class="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Description</th>
                        <th scope="col">Unit Price</th>
                        <th scope="col">Purchase</th>
                        <th scope="col">remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        all_product.map(item => {
                            if (wishlist[item.id] === "favorite") {
                                const {id, img, name, newPrice} = item;
                                return(
                                    <tr key={id}>
                                        <td className='imgbx'>
                                            <Link 
                                                className='link' 
                                                to={"/product/" + id} 
                                                onClick={()=>window.scroll(0,0)}>
                                                <img src={img} />
                                            </Link>
                                        </td>
                                        <td className='name'>
                                            <Link 
                                            className='link' 
                                            to={"/product/" + id} 
                                            onClick={()=>window.scroll(0,0)}>
                                            {name}
                                            </Link>
                                        </td>
                                        <td className='unit-price'><span>{newPrice}$</span></td>
                                        <td className='pruchase'>
                                            <div className='main-btn'>
                                                <Link 
                                                className='link special-btn' 
                                                to={"/product/" + id} 
                                                onClick={()=>window.scroll(0,0)}>
                                                select options
                                                </Link>
                                            </div>
                                        </td>
                                        <td className='remove-btn'>
                                            <button 
                                            onClick={()=>removeFromWishlist(id)}>
                                            <RiDeleteBin2Line />
                                            </button>
                                        </td>
                                    </tr>
                            )
                            }
                        })
                        }
                    </tbody>
                    </table>
                    : <div className='emty-wishlist'>
                        <h2>Nothing found in wishlist!</h2>
                        <img src={emptyWishlist} />
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
        </div>
    </div>
  )
}
