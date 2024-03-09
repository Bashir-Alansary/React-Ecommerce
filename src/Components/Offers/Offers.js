import React from 'react'
import { useShopConntext } from '../../Context/ShopContext'
import "./Offers.css"

export default function Offers() {
  return (
    <div className='offers'>
        <div className='container'>
            <div className='content'>
                <div className='text'>
                    <h1>Exclusive<br />offers for you</h1>
                    <span>only on best sellers products</span>
                    <button className='offers-btn'>check now</button>
                </div>
                <div className='imgbx'>
                    <img src='images/offers.png' />
                </div>
            </div>
        </div>
        <img className='wave-img-top' src='images/wave.png' />
        <div className='blur-color'></div>
    </div>
  )
}
