import React, { useEffect, useState } from 'react'
import all_product from '../../Components/Assets/all_product'
import Item from '../../Components/Item/Item'
import Banner from '../../Components/Banner/Banner'
import "./ShopCategory.css"
import { useShopContext } from '../../Context/ShopContext'

export default function ShopCategory({category, img }) {

    const products = all_product.filter(item => item.category === category);

  return (
    <div className='shop-category'>
        <Banner img={img} title={"For " + category} />
        <div className='container'>
            <div className='content'>
            {
                products.map(item => {
                    return(
                        <Item key={item.id} {...item} />
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}
