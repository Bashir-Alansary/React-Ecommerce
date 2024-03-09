import React, {createContext, useContext, useEffect, useState} from 'react'
import all_product from "./../Components/Assets/all_product"
import { reviews } from './../Components/ProductAbout/ProductReviews/ProductReviewsData'

export const ShopContext = createContext();

const colors =  [...new Set(all_product.map(item => item.color))];
const productTypes =  [...new Set(all_product.map(item => item.type))];

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = ({children}) => {

    const[products, setProducts] = useState(all_product);
    const[cartItems, setCartItems] = useState(getDefaultCart());
    const[addedAmount, setAddedAmount] = useState(1);
    const[addedMsg, setAddedMsg] = useState({text: "10 in stock", class: "msg done", availablity: true});
    const[disabledBtn, setDisabledBtn] = useState(false);
    const[showSubCart, setShowSubCart] = useState(false);
    const[reviewsList, setReviewsList] = useState(reviews);
    const[clickRate, setClickRate] = useState(null); // reviews rate val
    const[starColor, setStarColor] = useState(true); // to reset stars inputs to defult color
    const[wishlist, setWishlist] = useState(getDefaultCart());
    const[compareList, setCompareList] = useState(getDefaultCart());

    const increaseItemAmount = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }

    const decreseItemAmount = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:0}))
    }
    
    const getCartTotal = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let product = all_product.find(product => product.id === Number(item));
                total += cartItems[item] * product.newPrice;
            }
        }
        return total;
    }

    const getCartAmount = () => {
        let amount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                amount += cartItems[item];
            }
        }
        return amount;
    }

    const addAddedAmount = (itemId) => {
        if (addedAmount > 0) {
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + Number(addedAmount)}))
            setAddedMsg({text: "items added successfully", class: "msg done", availablity: false});
            setAddedAmount(1);
        } else {
            setAddedMsg({text: "doesn't accept 0 or Negative values", class: "msg warning", availablity: false})
        }
    }

    const addToWishlist = (itemId) => {
        setWishlist((prev) => ({...prev, [itemId]:"favorite"}));
    }

    const removeFromWishlist = (itemId) => {
        setWishlist((prev) => ({...prev, [itemId]:0}));
    }

    const getWishlistAmount = () => {
        let amount = 0;
        for (const item in wishlist) {
            if (wishlist[item] === "favorite") {
                amount += 1;
            }
        }
        return amount;
    }

    const addToCompareList = (itemId) => {
        setCompareList((prev) => ({...prev, [itemId]:"compare"}));
    }

    const removeFromCompareList = (itemId) => {
        setCompareList((prev) => ({...prev, [itemId]:0}));
    }

    const getCompareListAmount = () => {
        let amount = 0;
        for (const item in compareList) {
            if (compareList[item] === "compare") {
                amount += 1;
            }
        }
        return amount;
    }
    
    const contextValue =
    {
        all_product,
        products,
        cartItems,
        increaseItemAmount,
        decreseItemAmount,
        removeFromCart,
        getCartTotal,
        getCartAmount,
        addedAmount,
        setAddedAmount,
        addAddedAmount,
        addedMsg,
        setAddedMsg,
        showSubCart,
        setShowSubCart,
        clickRate,
        setClickRate,
        starColor,
        setStarColor,
        disabledBtn,
        setDisabledBtn,
        wishlist,
        addToWishlist,
        reviewsList,
        setReviewsList,
        removeFromWishlist,
        getWishlistAmount,
        compareList,
        addToCompareList,
        removeFromCompareList,
        getCompareListAmount,
        colors,
        productTypes,
        setProducts,
    };

    return(
        <ShopContext.Provider value = {contextValue}>
            {children}
        </ShopContext.Provider>
    )
}

export const useShopContext = () => {
    return useContext(ShopContext);
}
