import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import "./Hero.css"

export default function Hero() {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='content'>
                <div className='text'>
                   <h5>Winter Collection</h5>
                   <h1>New Winter <br/> Collection 2023</h1>
                   <h5>There is nothing like trend</h5>
                   <button><span>Shop Now</span><IoIosArrowRoundForward /></button>
                </div>
            </div>
            <img className='wave-img' src='images/wave.png' />
        </div>
    </div>
  )
}
