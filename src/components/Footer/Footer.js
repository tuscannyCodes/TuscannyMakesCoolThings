import './Footer.css';
import {useNavigate} from 'react-router-dom';

export const ROUTES = {
    HOME: '/',
    ABOUT: '/about-asdfadsf',
    WORKS: '/works-asdfadsf',
    CONTACT: '/contact-asdfadsf',
}

function Footer() {
    const navigate = useNavigate();
// const routesArray = [HOME,ABOUT,WORKS,CONTACT] 


    return (
       
      <footer className="footer">
          <div onClick={() => {navigate(ROUTES.HOME)}} className="footer-text">HOME</div>
          <div onClick={() => {navigate(ROUTES.ABOUT)}} className="footer-text">ABOUT ME</div>
          <div onClick={() => {navigate(ROUTES.WORKS)}} className="footer-text">WORKS</div>
          <div onClick={() => {navigate(ROUTES.CONTACT)}} className="footer-text">CONTACT</div>
          
          <p className="footer-text-header"> I make cool things</p>
          
    </footer>
    
   
    
    );
  };

  export default Footer;