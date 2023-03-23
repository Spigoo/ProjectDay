import React from 'react';
import "../Styles/App.css"

import {MenuData} from '../data';

const Navbar = () => {
    return(
        <nav className='app-navbar'>
            <div class='foto'> <img  src="../../public/logoprojectday.png" type=''/></div>
        
            
            
            <ul className="navbar-items">
                {MenuData.map((item) =>{
                    return(
                        <li>
                            <a href={item.url} className="nav-links">
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
};

export default Navbar;