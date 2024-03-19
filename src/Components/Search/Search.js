import React from 'react'
import Banner from "../Banner/Banner"
import searchImg from "../Assets/images/search.png"
import "./Search.css"
import { useShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item';

export default function Search() {
    
    const {all_product, searchInputVal, setSearchInputVal} = useShopContext();
    const items = searchInputVal !== "" ? all_product.filter(item => item.name.toLowerCase().includes(searchInputVal.toLowerCase())) : false;
    
  return (
    <div className='search'>
        <Banner 
        title={searchInputVal !== "" ? 'search for "' + searchInputVal + '"' : 'search'} 
        img = {searchImg}
        num = {items ? items.length : 0} 
        />
        <div className='container'>
            <div className='content'>
                <div className='input-content'>
                    <input 
                    type="search" 
                    placeholder='what are you looking for?' 
                    value = {searchInputVal} 
                    onChange={(e)=>setSearchInputVal(e.target.value)}
                    />
                </div>
                <div className='result'>
                    <div className='content'>
                        {searchInputVal !== "" ?
                            items.map(item => {
                                return (
                                    <Item key={item.id} {...item} />
                                )
                            })
                            : null
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
