import React from 'react'

export default function Banner({img, title, num}) {
  return (
    <div className='banner'>
        <div className='container'>
        <div className='banner-content'>
                <div className='text'>
                    <h1>{title}</h1>
                    {num !== "login" ?
                    <h2><span>{num}</span> items <span>in </span>{title}</h2>
                    : <h2><span>12</span> Hours <span>20</span> Mins</h2>
                    }
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
