import './Navbar.css';
import {useNavigate} from 'react-router-dom';

export const ROUTES = {
    HOME: '/',
    ABOUT: '/about-asdfadsf',
    WORKS: '/works-asdfadsf',
    CONTACT: '/contact-asdfadsf',
}

function Navbar() {
    const navigate = useNavigate();

    return (
      <>
   
      <nav className="navbar">
           {/* hamburger */}
     <div className="nav-hamburger">
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