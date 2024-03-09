import React from 'react'
import Item from '../Item/Item'
import new_collections from '../Assets/new_collections'
import "./Popular.css"

export default function Popular() {
  return (
    <div className='popular'>
        <div className='container'>
            <h1>Popular Products</h1>
            <div className='content'>
                {
                    new_collections.map(item => {
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
