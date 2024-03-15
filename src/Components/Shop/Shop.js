import React, { useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { useShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item';
import "./Shop.css"
import newArrivals from '../Assets/NewArrivals';
import PriceRange from '../PriceRange/PriceRange';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { sortBy, shownItemsNum } from '../Assets/DropDownMenu';

export default function Shop() {
    
    const {all_product, colors, productTypes} = useShopContext();
    const[products, setProducts] = useState(all_product);
    const[listView, setListView] = useState(false);
    const[isColorCheck, setIsColorCheck] = useState(false);
    const[isTypeCheck, setIsTypeCheck] = useState(false);
    const[chosenColors, setChosenColors] = useState([]);
    const[chosenTypes, setChosenTypes] = useState([]);
    const[valToSort, setValToSort] = useState(sortBy[0].value);

    const[range, setRange] = useState({
        minRange: 0,
        maxRange: 300,
    });

    const getFiltersList = () => {
        if (range.minRange === 0 && range.maxRange === 300) {
            return [...chosenColors, ...chosenTypes];
        } else {
            return [...chosenColors, ...chosenTypes,`$${range.minRange} - $${range.maxRange}`];
        }
    }

    const handleShownItemNum = (val) => {
        setItems(parseInt(val));
      }

    const handleDropdownSort = (val, list=products) => {
        setValToSort(val);
        if (val === "Featured") {
            const sortedProducts = [...list].sort((a, b) => {
                return a.id - b.id;
            });
            setProducts(sortedProducts);
        }
        else if (val === "Best selling") {
            const sortedProducts = [...list].sort((a, b) => {
                return (b.oldPrice - b.newPrice) - (a.oldPrice - a.newPrice);
            });
            setProducts(sortedProducts);
        }
        else if (val === "Alphabetically, A-Z") {
            const sortedProducts = [...list].sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
            setProducts(sortedProducts);
        }
        else if (val === "Alphabetically, Z-A") {
            const sortedProducts = [...list].sort((a, b) => {
                return b.name.localeCompare(a.name);
            });
            setProducts(sortedProducts);
        }
        else if (val === "Price, low to high") {
            const sortedProducts = [...list].sort((a, b) => {
                return a.newPrice - b.newPrice;
            });
            setProducts(sortedProducts);
        }
        else if (val === "Price, high to low") {
            const sortedProducts = [...list].sort((a, b) => {
                return b.newPrice - a.newPrice;
            });
            setProducts(sortedProducts);
        }
        else if (val === "Date, old to new") {
            const sortedProducts = [...list].sort((a, b) => {
                return a.id - b.id;
            });
            setProducts(sortedProducts);
        }
        else if (val === "Date, new to old") {
            const sortedProducts = [...list].sort((a, b) => {
                return b.id - a.id;
            });
            setProducts(sortedProducts);
        }
        else {
            console.log(val);
        }
    }

    const filterColors = (e) => {
        if(e.target.checked) {
            if (!isColorCheck) {
                if (!isTypeCheck) {
                    const newProducts = all_product.filter(item => item.color === e.target.value && (parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange));
                    handleDropdownSort(valToSort, newProducts);
                } else {
                    const newProducts = products.filter(item => item.color === e.target.value);
                    handleDropdownSort(valToSort, newProducts);
                }
                setIsColorCheck(true);
            } else {
                if (!isTypeCheck) {
                    const newProducts = all_product.filter(item => item.color === e.target.value && (parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange));
                    const finalProducts = [...products, ...newProducts];
                    handleDropdownSort(valToSort, finalProducts);
                } else {
                    let newProducts = [];
                    for (let i = 0; i < chosenTypes.length; i++) {
                        const newItem = all_product.filter(item => item.color === e.target.value && item.type === chosenTypes[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                    const finalProducts = [...products, ...newProducts].filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                    handleDropdownSort(valToSort, finalProducts);
                }
            }
            setChosenColors([...new Set([...chosenColors, e.target.value])]);
        } else {
            chosenColors.splice(chosenColors.indexOf(e.target.value), 1);
            const newProducts = products.filter(item => item.color !== e.target.value );
            console.log(newProducts);
            if (newProducts.length) {
                handleDropdownSort(valToSort, newProducts);
            } 
            if(!newProducts.length && isTypeCheck) {
                let newProducts = [];
                    for (let i = 0; i < chosenTypes.length; i++) {
                        const newItem = all_product.filter(item => item.type === chosenTypes[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                const finalProducts = [...newProducts].filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            }
            if (!newProducts.length && !isTypeCheck) {
                const newProducts = all_product.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, newProducts);
            } 
            if (!newProducts.length) {
                setIsColorCheck(false);
            }
        }
        
    }

    

    const filterTypes = (e) => {
        if(e.target.checked) {
            if (!isTypeCheck) {
                if (!isColorCheck) {
                    const newProducts = all_product.filter(item => item.type === e.target.value && (parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange));
                    handleDropdownSort(valToSort, newProducts);
                } else {
                    const newProducts = products.filter(item => item.type === e.target.value);
                    handleDropdownSort(valToSort, newProducts);
                }
                setIsTypeCheck(true);
            } else {
                if (!isColorCheck) {
                    const newProducts = all_product.filter(item => item.type === e.target.value && (parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange));
                    const finalProducts = [...products, ...newProducts];
                    handleDropdownSort(valToSort, finalProducts);
                } else {
                    let newProducts = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = all_product.filter(item => item.type === e.target.value && item.color === chosenColors[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                    const finalProducts = [...products, ...newProducts].filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                    handleDropdownSort(valToSort, finalProducts);
                }
            }
            setChosenTypes([...new Set([...chosenTypes, e.target.value])]);
        } else {
            chosenTypes.splice(chosenTypes.indexOf(e.target.value), 1);
            const newProducts = products.filter(item => item.type !== e.target.value );
            if (newProducts.length) {
                handleDropdownSort(valToSort, newProducts);
            } 
            if(!newProducts.length && isColorCheck) {
                let newProducts = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = all_product.filter(item => item.color === chosenColors[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                const finalProducts = [...newProducts].filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            }
            if (!newProducts.length && !isColorCheck) {
                const newProducts = all_product.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, newProducts);
            } 
            if (!newProducts.length) {
                setIsTypeCheck(false);
            }
        }
        
    }

    const filterPrices = () => {
        if (!isColorCheck && !isTypeCheck) {
            const newProducts = all_product.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
            handleDropdownSort(valToSort, newProducts);
        } else {
            const newProducts = products.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
            setProducts(newProducts);
            if (isColorCheck && !isTypeCheck) {
                let newProducts = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = all_product.filter(item => item.color === chosenColors[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                    const finalProducts = newProducts.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                    handleDropdownSort(valToSort, finalProducts);
            } 
            if (!isColorCheck && isTypeCheck) {
                let newProducts = [];
                    for (let i = 0; i < chosenTypes.length; i++) {
                        const newItem = all_product.filter(item => item.type === chosenTypes[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                const finalProducts = newProducts.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            } 
            if (isColorCheck && isTypeCheck) {
                let firstProducts = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = all_product.filter(item => item.color === chosenColors[i]);
                        firstProducts = [...firstProducts, ...newItem];
                    }
                console.log(firstProducts);
                let secondProducts = [];
                    for (let i = 0; i < chosenTypes.length; i++) {
                        const newItem = firstProducts.filter(item => item.type === chosenTypes[i]);
                        secondProducts = [...secondProducts, ...newItem];
                }
                const finalProducts = secondProducts.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            }
        }
    }

    // pagination
    const data = products;
    const [items, setItems] = useState(6);
    const [current, setCurrent] = useState(1);
    const paginationPages = Math.ceil(data.length / items);
    const startIndex = (current - 1) * items;
    const endIndex = startIndex + items;
    const dataPerPage = data.slice(startIndex, endIndex);

    const handleChevronLeft = () => {
        if (current > 1) {
            setCurrent(current - 1);
        }
    }

    const handleChevronRight = () => {
        if (current < paginationPages) {
            setCurrent(current + 1);
        }
    }

  return (
    <div className='shop'>
        <div className='container'>
            <div className='content'>
                <div className='left-box'>
                    <div className='filter'>
                        <ul className='chosen-filters'>
                            {
                                getFiltersList().map(item => {
                                    return (
                                        <li>
                                            <button className='remove-btn'><IoCloseSharp /></button>
                                            <span>{item}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
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
                    <div className='category'>
                        <h3>Pricr range</h3>
                        <PriceRange range = {range} setRange = {setRange} filterPrices = {filterPrices} />
                    </div>
                    <div className='category'>
                        <h3>New Arrivals</h3>
                        {
                            newArrivals.map(item => {
                                return (
                                    <Item key={item.id} newArrivalsView={"new-arrivals-view"} {...item} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className='right-box'>
                    <div className='top-filter'>
                        <div className='view'>
                            <button 
                            className={listView ? "view-btn": "view-btn active"} 
                            onClick={()=>setListView(false)}
                            >
                            <BsGridFill />
                            </button>
                            <button 
                            className={listView ? "view-btn active": "view-btn"}
                            onClick={()=>setListView(true)}
                            >
                            <FaList />
                            </button>
                        </div>
                        <div className='select-boxes'>
                            <div className='sort'>
                                <DropdownMenu data = {sortBy} dropAction = {handleDropdownSort}/>
                            </div>
                            <div className='show'>
                                <DropdownMenu data = {shownItemsNum} dropAction = {handleShownItemNum}/>
                            </div>
                        </div>
                    </div>
                    <div className='products'>
                        {products.length ? <div className='products-content'>
                            {
                                dataPerPage.map(item => {
                                    return (
                                        <Item listView = {listView} key = {item.id} {...item} />
                                    )
                                })
                            }
                        </div> :
                            <div className='no-products'>
                                <h2>No products</h2>
                                <ul className='chosen-filters'>
                                    {
                                        getFiltersList().map(item => {
                                            return (
                                                <li>
                                                    <button className='remove-btn'><IoCloseSharp /></button>
                                                    <span>{item}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        }
                        <div className='paginate-btns'>
                            <button 
                            className={current === 1 ? "btn chevron disabled" : "btn chevron"} 
                            onClick={handleChevronLeft}
                            >
                            <FaChevronLeft />
                            </button>
                            {
                                Array.from({length:paginationPages}, (v, i) => i + 1).map((page, i) => {
                                    if (page < 3 ) {
                                        return (
                                            <button 
                                            className={current === page ? 'btn active' : 'btn'} 
                                            onClick={()=> setCurrent(page)}
                                            >
                                            {page}
                                            </button>
                                        ) 
                                    }
                                    if (current === page ) {
                                        return (
                                            <button 
                                            className={current === page ? 'btn active' : 'btn'} 
                                            onClick={()=> setCurrent(page)}
                                            >
                                            {page}
                                            </button>
                                        ) 
                                    }
                                    if (page === paginationPages) {
                                        return (
                                            <button 
                                            className={current === page ? 'btn active' : 'btn'} 
                                            onClick={()=> setCurrent(page)}
                                            >
                                            {page}
                                            </button>
                                        )
                                    }

                                    return (
                                        <span className='dots'>.</span>
                                    ) 
                                    
                                })
                            }
                            <button 
                            className={current === paginationPages ? "btn chevron disabled" : "btn chevron"}
                            onClick={handleChevronRight}
                            >
                            <FaChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
