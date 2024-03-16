import React from 'react'
import { useShopContext } from '../../Context/ShopContext';

export default function FilterTypes({filterTypes}) {
    const {productTypes} = useShopContext();
    return (
        <div className='category'>
            <h3>products types</h3>
            <ul className='product-types'>
                {
                    productTypes.map((type, i)=> {
                        return (
                            <li key={i} className='product-type'>
                                <input 
                                type="checkbox" 
                                id={type} 
                                value={type} 
                                onChange={filterTypes} 
                                />
                                <label for={type}>{type}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
