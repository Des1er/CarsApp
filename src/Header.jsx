import React , { useState } from 'react';
import './index.css'

import { Link } from 'react-router-dom';
function Header(){
   
    return(<div>
         <div className="navbar">
            <div>
                <Link to='/'>Cars</Link>
            </div>
            <nav>
                <ul id='MenuItems'>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </div>
    </div>)
}


export default Header