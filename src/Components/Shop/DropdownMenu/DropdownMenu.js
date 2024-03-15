import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import all_product from '../../Assets/all_product';
import "./DropdownMenu.css";

export default function DropdownMenu({data, dropAction}) {

  const[chosenName, setChosenName] = useState(data[0].name);
  const [isChevronUp, setIsChevronUp] = useState(false);
  
  const handleToggleBtn = () => {
    setIsChevronUp(!isChevronUp);
  }

  const handleDropItemBtn = (val, name) => {
    dropAction(val);
    setChosenName(name);
    setIsChevronUp(false);
  }

  return (
    <div className='drop-menu'>
      <button 
      className='toggle-btn'
      onClick={handleToggleBtn}
      >
        <span className='val'>{chosenName}</span>
        <span className='chevron'>{isChevronUp ? <FaChevronUp color='rebeccapurple'/> : <FaChevronDown/> }</span>
      </button>
      <ul className={isChevronUp ? 'drop-items show' : 'drop-items hide'}>
        {
          data.map(item => {
            const{id, name, value} = item;
            return (
              <button 
              key={id}
              className = "drop-item"
              onClick={()=>handleDropItemBtn(value, name)}
              >
                {name}
              </button>
            )
          })
        }
      </ul>
    </div>
  )
}
