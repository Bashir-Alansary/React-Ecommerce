import React from 'react'
import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from "react-icons/io";
import {exploreData} from '../Assets/exploreData'
import "./Explore.css"

export default function Explore() {
  return (
    <div className='explore'>
        <div className='container'>
            <h1>Start exploring</h1>
            <div className='content'>
                {
                    exploreData.map(item=>{
                        const{id, path, img, bcImg, name, num} = item;
                        return(
                            <Link to={path} className='box'>
                                <div className='box-content'>
                                    <div className='img-num'>
                                        <div className='imgbx'>
                                            <img src={img} />
                                        </div>
                                        <div className='num'>
                                            <span>{num} products</span>
                                        </div>
                                    </div>
                                    <div className='title'>
                                        <span>Manufacturar</span>
                                        <h2>{name}</h2>
                                    </div>
                                    <span>see collection <IoIosArrowRoundForward /></span>
                                </div>
                                <div className='bc-img'>
                                    <img src={bcImg} />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
        <div className='blur-color'></div>
    </div>
  )
}
