import React, { useRef, useState } from 'react'
import "./PriceRange.css"

export default function PriceRange({range, setRange, filterPrices}) {

    const sliderBar = useRef(null);
    const minRangeInputRef = useRef(null);
    const maxRangeInputRef = useRef(null);
    const priceGap = 40;

    const handleRange = (e) => {

        const minRangeInput = minRangeInputRef.current;
        const maxRangeInput = maxRangeInputRef.current;
        const minRange = parseInt(minRangeInput.value);
        const maxRange = parseInt(maxRangeInput.value);
        
        if (maxRange - minRange < priceGap) {
            if (e.target === minRangeInput) {
                minRangeInput.value = maxRange - priceGap;
            } else {
                maxRangeInput.value = minRange + priceGap;
            }
        } else {
            setRange({minRange, maxRange});
            sliderBar.current.style.left = (minRange / minRangeInput.max) * 100 + "%";
            sliderBar.current.style.right = 100 - (maxRange / maxRangeInput.max) * 100 + "%";
        }
        filterPrices();
    }

    return (
        <div className="price-range">
            <div className='slider'>
                <div className='bar' ref={sliderBar}></div>
                <div className='range-inputs'>

                    <input 
                    type="range" 
                    name="minRange" 
                    min="0" 
                    max="300" 
                    step="2"
                    defaultValue={range.minRange} 
                    ref={minRangeInputRef}
                    onChange={handleRange}
                    />

                    <input 
                    type="range" 
                    name="maxRange" 
                    min="0" 
                    max="300" 
                    step="2"
                    defaultValue={range.maxRange} 
                    ref={maxRangeInputRef}
                    onChange={handleRange}
                    />

                </div>
            </div>
            <div className='num-inputs'>
                <div className='num-input'>
                    <label>Min price</label>
                    <input type="number" name='maxNum' disabled value={range.minRange}/>
                </div>
                <div className='num-input'>
                    <label>Max price</label>
                    <input type="number" name='minNum' disabled value={range.maxRange}/>
                </div>
            </div>
        </div>
    )
}
