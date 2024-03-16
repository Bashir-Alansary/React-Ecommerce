import React from 'react'
import { useShopContext } from '../../Context/ShopContext'

export default function FilterColors({filterColors}) {
    const {colors} = useShopContext();
    return (
        <div className='category'>
            <h3>colors</h3>
            <ul className='colors'>
                {
                    colors.map((color, i)=> {
                        return (
                            <li key={i} className='color'>
                                <input
                                type="checkbox" 
                                id={color} 
                                value={color} 
                                onChange={filterColors} 
                                />
                                <label for={color}>{color}</label>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
  )
}
