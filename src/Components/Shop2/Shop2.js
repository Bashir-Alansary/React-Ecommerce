import React, { useEffect, useState } from 'react'
import { FaList } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { useShopContext } from '../../Context/ShopContext'
import Item from '../Item/Item';
import "./Shop2.css"
import newArrivals from '../Assets/NewArrivals';
import PriceRange from './PriceRange/PriceRange';
import DropdownMenu from './DropdownMenu/DropdownMenu';
import { sortBy, shownItemsNum } from '../Assets/DropDownMenu';
import Pagination from './Pagination/Pagination';
import Banner from '../Banner/Banner';;
import FilterAllData from './FilterAllData';
import FilterMenData from './FilterMenData';
import FilterWomenData from './FilterWomenData';
import FilterKidsData from './FilterKidsData';

export default function Shop2({category, img}) {
    const {all_product, currentCategory, setCurrentCategory} = useShopContext();
    const categoryData = all_product.filter(item => item.category === category || category === "Shop");
    const[products, setProducts] = useState(categoryData);
    const[listView, setListView] = useState(false);
    const[isColorCheck, setIsColorCheck] = useState(false);
    const[isTypeCheck, setIsTypeCheck] = useState(false);
    const[chosenColors, setChosenColors] = useState([]);
    const[chosenTypes, setChosenTypes] = useState([]);
    const[valToSort, setValToSort] = useState(sortBy[0].value);
    const[paginationItems, setPaginationItems] = useState(6);
    const[range, setRange] = useState({
        minRange: 0,
        maxRange: 300,
    });


    // pagination
    const data = products;
    const [current, setCurrent] = useState(1);
    const paginationPages = Math.ceil(data.length / paginationItems);
    const startIndex = (current - 1) * paginationItems;
    const endIndex = startIndex + paginationItems;
    const dataPerPage = data.slice(startIndex, endIndex);

    useEffect(()=> {
        setProducts(categoryData);
        setChosenColors([]);
        setChosenTypes([]);
        setRange({minRange: 0, maxRange: 300})
        setValToSort(sortBy[0].value);
        setPaginationItems(6);
        setCurrent(1);
        setListView(false);
    }, [category]);

    const getFilterComp = () => {
        if (category === "Women") {
            return <FilterWomenData filterColors={filterColors} filterTypes = {filterTypes} categoryData = {categoryData} />
        } else if (category === "Men") {
            return  <FilterMenData filterColors={filterColors} filterTypes = {filterTypes} categoryData = {categoryData} />
        } else if (category === "Kids") {
            return <FilterKidsData filterColors={filterColors} filterTypes = {filterTypes} categoryData = {categoryData} />
        } else {
            return <FilterAllData filterColors={filterColors} filterTypes = {filterTypes} categoryData = {categoryData}/>
        }
    }

    const getFiltersList = () => {
        if (range.minRange === 0 && range.maxRange === 300) {
            return [...chosenColors, ...chosenTypes];
        } else {
            return [...chosenColors, ...chosenTypes,`$${range.minRange} - $${range.maxRange}`];
        }
    }

    const handleShownItemNum = (val) => {
        setPaginationItems(parseInt(val));
        setCurrent(1);
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
    }

    const filterColors = (e) => {
        if(e.target.checked) {
            if (!isColorCheck) {
                if (!isTypeCheck) {
                    const newProducts = categoryData.filter(item => item.color === e.target.value && (parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange));
                    handleDropdownSort(valToSort, newProducts);
                } else {
                    const newProducts = products.filter(item => item.color === e.target.value);
                    handleDropdownSort(valToSort, newProducts);
                }
                setIsColorCheck(true);
            } else {
                if (!isTypeCheck) {
                    const newProducts = categoryData.filter(item => item.color === e.target.value && (parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange));
                    const finalProducts = [...products, ...newProducts];
                    handleDropdownSort(valToSort, finalProducts);
                } else {
                    let newProducts = [];
                    for (let i = 0; i < chosenTypes.length; i++) {
                        const newItem = categoryData.filter(item => item.color === e.target.value && item.type === chosenTypes[i]);
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
                        const newItem = categoryData.filter(item => item.type === chosenTypes[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                const finalProducts = [...newProducts].filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            }
            if (!newProducts.length && !isTypeCheck) {
                const newProducts = categoryData.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, newProducts);
            } 
            if (!newProducts.length) {
                setIsColorCheck(false);
            }
        }
        setCurrent(1);
    }

    

    const filterTypes = (e) => {
        if(e.target.checked) {
            if (!isTypeCheck) {
                if (!isColorCheck) {
                    const newProducts = categoryData.filter(item => item.type === e.target.value && (parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange));
                    handleDropdownSort(valToSort, newProducts);
                } else {
                    const newProducts = products.filter(item => item.type === e.target.value);
                    handleDropdownSort(valToSort, newProducts);
                }
                setIsTypeCheck(true);
            } else {
                if (!isColorCheck) {
                    const newProducts = categoryData.filter(item => item.type === e.target.value && (parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange));
                    const finalProducts = [...products, ...newProducts];
                    handleDropdownSort(valToSort, finalProducts);
                } else {
                    let newProducts = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = categoryData.filter(item => item.type === e.target.value && item.color === chosenColors[i]);
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
                        const newItem = categoryData.filter(item => item.color === chosenColors[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                const finalProducts = [...newProducts].filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            }
            if (!newProducts.length && !isColorCheck) {
                const newProducts = categoryData.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, newProducts);
            } 
            if (!newProducts.length) {
                setIsTypeCheck(false);
            }
        }
        setCurrent(1);
    }

    const filterPrices = () => {
        if (!isColorCheck && !isTypeCheck) {
            const newProducts = categoryData.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
            handleDropdownSort(valToSort, newProducts);
        } else {
            const newProducts = products.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
            setProducts(newProducts);
            if (isColorCheck && !isTypeCheck) {
                let newProducts = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = categoryData.filter(item => item.color === chosenColors[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                    const finalProducts = newProducts.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                    handleDropdownSort(valToSort, finalProducts);
            } 
            if (!isColorCheck && isTypeCheck) {
                let newProducts = [];
                    for (let i = 0; i < chosenTypes.length; i++) {
                        const newItem = categoryData.filter(item => item.type === chosenTypes[i]);
                        newProducts = [...newProducts, ...newItem];
                    }
                const finalProducts = newProducts.filter(item => parseInt(item.newPrice) >= range.minRange && parseInt(item.newPrice) <= range.maxRange);
                handleDropdownSort(valToSort, finalProducts);
            } 
            if (isColorCheck && isTypeCheck) {
                let firstProducts = [];
                    for (let i = 0; i < chosenColors.length; i++) {
                        const newItem = categoryData.filter(item => item.color === chosenColors[i]);
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
        setCurrent(1);
    }

    const mapFiltersList = getFiltersList().map(item => {
        return (
            <li>
                <button className='remove-btn'><IoCloseSharp /></button>
                <span>{item}</span>
            </li>
        )
    })

  return (
    <div className='shop2'>
        <Banner title={category} img = {img} />
        <div className='container'>
            <div className='content'>
                <div className='left-box'>
                    <div className='filter'>
                        <ul className='chosen-filters'>
                            {mapFiltersList}
                        </ul>
                    </div>
                    {getFilterComp()}
                    <div className='category'>
                        <h3>Price range</h3>
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
                                <DropdownMenu data = {sortBy} dropAction = {handleDropdownSort} categoryData = {categoryData}/>
                            </div>
                            <div className='show'>
                                <DropdownMenu data = {shownItemsNum} dropAction = {handleShownItemNum} categoryData = {categoryData} />
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
                                    {mapFiltersList}
                                </ul>
                            </div>
                        }
                        <Pagination current={current} setCurrent={setCurrent} paginationPages = {paginationPages} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
