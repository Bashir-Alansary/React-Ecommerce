import React, { useState } from 'react'
import "./ProductImgs.css"

export default function ProductImgs({product}) {

    const {imgs} = product;
    const [mainImg, setMainImg] = useState(imgs[0]);
    const [showZoomImg, setShowZoomImg] = useState(false);
    const [zoomImgPosition, setZoomImgPosition] = useState({x: 0, y: 0});
    const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});

    const showMainImg = (index) => {
        const newMainImg = imgs.find((img, i) => i === index);
        setMainImg(newMainImg);
    }

    const handleZoomImg = (e) => {
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = ((e.pageX - left) / width) * 100;
        const y = ((e.pageY - top) / height) * 100;
        setZoomImgPosition({x, y});
        setCursorPosition({x: e.pageX - left, y: e.pageY-top});
    }

  return (
    <div className='product-imgs'>
        <ul className='imgs-btns'>
            {
                imgs.map((item, index) => {
                    return(
                        <li className='img-btn'>
                            <button onClick={()=> showMainImg(index)}>
                                <img src = {item} />
                            </button>
                        </li>
                    )
                })
            }
        </ul>
        <div className='main-img'>
            <img
            src = {mainImg}
            onMouseEnter = {()=>{setShowZoomImg(true); window.scrollTo(0,0);}}
            onMouseLeave = {()=>setShowZoomImg(false)}
            onMouseMove = {handleZoomImg}
            />
            {showZoomImg && <div
            className = "zoom-img"
            style = {{
                left: `${cursorPosition.x - 120}px`,
                top: `${cursorPosition.y - 120}px`,
                backgroundImage: `url(${mainImg})`,
                backgroundPosition: `${zoomImgPosition.x}% ${zoomImgPosition.y}%`,
            }}
            ></div>
             }
        </div>
    </div>
  )
}
