import React from 'react';
import PropTypes from 'prop-types';

import {NavLink} from "react-router-dom"

export default function Navbar(props){
    return(
      <div className="navigation-bar py-2" >
        <div className="position-relative">
              <ul className="nav justify-content-center">
               
                <li className="nav-item ">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">{props.aboutText}</NavLink>
                </li>
                
              </ul>
        </div>
       </div>
    );
}

Navbar.propTypes={
    title:PropTypes.string,
    aboutText: PropTypes.string,
}

// Navbar.propTypes={
//     title: "ReactApp",
//     aboutText : "About Us",
// }