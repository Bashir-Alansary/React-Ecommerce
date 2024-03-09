import React, { useState } from 'react'
import "./ProductAbout.css"
import {parties} from "./ProductAboutData"

export default function ProductAbout({product}) {

  const [part, setPart] = useState(parties[0]);
  const [activeId, setActiveId] = useState(part.id);

  const filterParties = (id) => {
    const newPart = parties.find(part => part.id === id);
    setPart(newPart);
    setActiveId(id);
  }

  return (
    <div className='product-about'>
      <ul className='parties'>
        {
          parties.map(part => {
            const {id, name} = part;
            return(
              <li className='part' key={id}>
                <button className={id === activeId? 'active-part' : ''} onClick={()=>{filterParties(id)}}>{name}</button>
              </li>
            )
          })
        }
      </ul>
      <div className='part-content'>
        {part.comp}
      </div>
    </div>
  )
}
