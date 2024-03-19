import React from 'react'
import {Link} from "react-router-dom";
import all_product from '../../Assets/all_product';
import "./ShopBanner.css"

export default function ShopBanner({category, img}) {

    const categories = [...new Set(all_product.map(item => item.category)), "Shop"];
    const unChosenCategories = categories.filter(item => item !== category);
    const categoryItemsLength = category !== "Shop" ? all_product.filter(item => item.category === category).length : false;

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
                        {categoryItemsLength ?
                          <h2><span>{categoryItemsLength}</span> items<span> for </span>{category}</h2>
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
