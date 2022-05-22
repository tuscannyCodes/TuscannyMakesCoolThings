import './Navbar.css';
import {useNavigate} from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useState, useCallback } from "react";

export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    WORKS: '/work',
    CONTACT: '/contact',
}

function Navbar() {
    const navigate = useNavigate();
    const [toggleDirection, setToggleDirection] = useState(-900) 
    const toggleOn = () => {
      setToggleDirection(toggleDirection === -900 ? 0 : -900)
    
    
    }
    return (
      <>
         <motion.div onTap={toggleOn} className="HamburgerCard"
    animate={{x:toggleDirection}}
    >
      {/* <h1 id="HamNavbarTitle">I make cool things</h1> */}
      <section id="HamNavbarLinks">
      <div onClick={() => {navigate(ROUTES.HOME)}} className="HamNavbarLinks"><h1>HOME</h1></div>
      <div onClick={() => {navigate(ROUTES.ABOUT)}} className="HamNavbarLinks"><h1>ABOUT ME</h1></div>
      <div onClick={() => {navigate(ROUTES.WORKS)}} className="HamNavbarLinks"><h1>MY WORKS</h1></div>
      <div onClick={() => {navigate(ROUTES.CONTACT)}} className="HamNavbarLinks"><h1>CONTACT ME</h1></div>
      </section>
      
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
          <div onClick={() => {navigate(ROUTES.ABOUT)}} className="navbar-text">ABOUT ME</div>
          <div onClick={() => {navigate(ROUTES.WORKS)}} className="navbar-text">MY WORKS</div>
          <div onClick={() => {navigate(ROUTES.CONTACT)}} className="navbar-text">CONTACT ME</div>
    </nav>
    </>
    );
  };

  export default Navbar;