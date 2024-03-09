import React from 'react'
import { Link } from 'react-router-dom';
import { footerIconsData, footerLinksData } from '../Assets/footerData'
import "./Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='content'>
                <div className='footer-logo'>
                    <img src='images/logo.png' />
                </div>
                <ul className='footer-links'>
                    {
                        footerLinksData.map(item=>{
                            const{id, name, link} = item;
                            return(
                                <li key={id}>
                                    <Link to={link} >{name}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className='footer-icons'>
                    {
                        footerIconsData.map(item=>{
                            const{id, icon, link} = item;
                            return(
                                <li key={id}>
                                    <a href={link} >
                                        <img src={icon} />
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
        {
            //<div className='blur-color'></div>
        }
    </div>
  )
}
