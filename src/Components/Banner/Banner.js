import React from 'react'
import "./Banner.css"

export default function Banner({img, title}) {
  return (
    <div className='banner'>
        <div className='container'>
        <div className='banner-content'>
                <div className='text'>
                    <h1>{title}</h1>
                    <h2><span>12</span> Hours <span>20</span> mins</h2>
                    <button className='banner-btn'>Explore now</button>
                </div>
                <div className='imgbx'>
                    <img src={img} />
                </div>
        </div>
        </div>
    </div>
  )
}
