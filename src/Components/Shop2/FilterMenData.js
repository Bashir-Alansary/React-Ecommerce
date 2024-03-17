import React from 'react'

export default function FilterMenData({filterColors, filterTypes ,categoryData}) {
    const colors = [...new Set(categoryData.map(item => item.color))];
    const types = [...new Set(categoryData.map(item => item.type))];
    return (
        <>
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
        <div className='category'>
            <h3>products types</h3>
            <ul className='product-types'>
                {
                    types.map((type, i)=> {
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
        </>
  )
}
