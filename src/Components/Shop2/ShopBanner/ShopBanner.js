import React from 'react'
import {Link} from "react-router-dom";
import all_product from '../../Assets/all_product';
import "./ShopBanner.css"

export default function ShopBanner({category, img}) {

    const categories = [...new Set(all_product.map(item => item.category)), "Shop"];
    const unChosenCategories = categories.filter(item => item !== category);

    return (
        <div className='banner'>
            <div className='container'>
            <div className='banner-content'>
                    <div className='text'>
                        <div className='categories'>
                            <h1 className='chosen-category'>{category}</h1>
                            <ul className='other-categories'>
                                {
                                    unChosenCategories.map((item, i) => {
                                        return (
                                            <li key={i}>
                                                <span className='slash'>/</span>
                                                <Link className='link' to={"/" + item.toLowerCase()}>{item}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
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
