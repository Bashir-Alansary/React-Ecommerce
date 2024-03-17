import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useShopContext } from '../../../Context/ShopContext';
import "./DropdownMenu.css";

export default function DropdownMenu({data, dropAction, categoryData}) {

  const {currentCategory} = useShopContext();
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

  useEffect(() => {
    setChosenName(data[0].name);
    setIsChevronUp(false);
  }, categoryData)

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
