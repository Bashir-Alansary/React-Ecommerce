import React from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Pagination.css";

export default function Pagination({current, setCurrent, paginationPages}) {

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
        <div className='pagination'>
            {paginationPages !== 0 ? <button 
            className={current === 1 ? "btn chevron disabled" : "btn chevron"} 
            onClick={handleChevronLeft}
            >
            <FaChevronLeft />
            </button>
            : null
            }
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
            {paginationPages !== 0 ? <button 
            className={current === paginationPages? "btn chevron disabled" : "btn chevron"}
            onClick={handleChevronRight}
            >
            <FaChevronRight />
            </button>
            : null
            }
        </div>
    )
}
