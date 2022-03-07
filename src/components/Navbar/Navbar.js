import './Navbar.css';
import {useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useState, useCallback } from "react";

export const ROUTES = {
    HOME: '/',
    ABOUT: '/about-asdfadsf',
    WORKS: '/works-asdfadsf',
    CONTACT: '/contact-asdfadsf',
}

function Navbar() {
    const navigate = useNavigate();
    const [toggleDirection, setToggleDirection] = useState(-900) 
    const toggleOn = () => {
      setToggleDirection(toggleDirection === -500 ? 0 : -500)
    
    
    }
    return (
      <>
         <motion.div onTap={toggleOn} className="HamburgerCard"
    animate={{x:toggleDirection}}
    >
      <h1>hello</h1>
      
      </motion.div>


      <nav className="navbar" onTap={toggleOn}>
           {/* hamburger start */}
     
     <div className="nav-hamburger" onClick={(toggleOn)}>
<div className="nav-hamburger-line"></div>
<div className="nav-hamburger-line"></div>
<div className="nav-hamburger-line"></div>
</div>

   {/* hamburger end*/}
 
          <div onClick={() => {navigate(ROUTES.HOME)}} className="navbar-text">HOME</div>
          <div onClick={() => {navigate(ROUTES.ABOUT)}} className="navbar-text">ABOUT</div>
          <div onClick={() => {navigate(ROUTES.WORKS)}} className="navbar-text">WORKS</div>
          <div onClick={() => {navigate(ROUTES.CONTACT)}} className="navbar-text">CONTACT</div>
    </nav>
    </>
    );
  };

  export default Navbar;