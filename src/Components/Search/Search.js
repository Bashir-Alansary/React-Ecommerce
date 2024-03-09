import React from 'react'
import "./Search.css"
import {FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

export default function Search({showSearch, setShowSearch}) {
  return (
    <div className={showSearch? 'search show' : 'search hide'}>
      <div className='content'>
        <div className='input-content'>
          <FiSearch className='search-icon icon' />
          <input type="search" placeholder='what are you looking for?'/>
          <button onClick={()=>setShowSearch(false)}><IoCloseSharp className='close-icon icon' /></button>
        </div>
      </div>
    </div>
  )
}
