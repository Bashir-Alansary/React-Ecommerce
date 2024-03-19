import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import "./SubSearch.css"
import {FiSearch } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useShopContext } from '../../Context/ShopContext';
import Item from '../Item/Item';

export default function SubSearch({showSearch, setShowSearch}) {

  const {all_product, setSearchInputVal} = useShopContext();
  const [inputVal, setInputVal] = useState("");
  const[searchItems, setSearchItems] = useState([]);

  const handleSearchInput = (e) => {
    const {value} = e.target;
    setInputVal(value);
    setSearchInputVal(value);
    if (value !== "") {
      const items = all_product.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
      setSearchItems(items);
    } else {
      setSearchItems([]);
    }
  }

  const handleCloseBtn = () => {
    setShowSearch(false);
    setInputVal("");
    setSearchItems([]);
  }

  return (
    <div className={showSearch? 'sub-search show' : 'sub-search hide'}>
      <div className='content'>
        <div className='search-content'>
          <div className='input-content'>
            <input 
            type="search" 
            placeholder='what are you looking for?' 
            onChange={handleSearchInput} 
            value = {inputVal}
            />
            <Link 
            className="link" 
            to="/search" 
            onClick={handleCloseBtn}
            >
              <FiSearch className='search-icon icon' />
            </Link>
          </div>
          {searchItems.length ? 
          <div className='result'>
            <h6 className='title'>products</h6>
            <ul className='search-items'>
              {
                searchItems.map((item, i) => {
                  const {id} = item;
                  return (
                    <>
                      {i < 4 ?
                      <li key = {id} >
                        <Link className='link' to={"/product/"+ id} onClick={handleCloseBtn}>
                          <Item searchView={"search-view"} {...item} />
                        </Link>
                      </li>
                      : null
                      }
                    </>
                  )
                })
              }
            </ul>
          </div>
          : null
          }
        </div>
        <button className='close' onClick={handleCloseBtn}><IoCloseSharp className='close-icon icon' /></button>
      </div>
    </div>
  )
}
