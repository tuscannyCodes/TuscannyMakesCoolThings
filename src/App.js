import Navbar, { ROUTES } from "./components/Navbar/Navbar";
import {animatePresence, motion} from "framer-motion";
import HeroSection from "./components/Hero/HeroSection";
import Section from "./components/Section/Section";
import AboutMe from "./components/AboutMe/AboutMe";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <Router>
       <animatePresence exitBeforeEnter={false} initial={true} >
      <div>
        <Navbar />
       
        <Routes>
         
          <Route
            path={ROUTES.HOME}
            exact={true}
            element={
              <>
                <HeroSection />
                <Section />
              </>
            }
          />
          
          
          <Route
            path={ROUTES.ABOUT}
            element={
              <>
                <div>
                  <AboutMe />
                </div>
              </>
            }
          />
          <Route
            path={ROUTES.WORKS}
            element={
              <>
                <Works /> 
              </>
            }
          />
          <Route
            path={ROUTES.CONTACT}
            element={
              <>
              <div>
                <Contact/> 
                </div>
              </>
            }
          />
          
        </Routes>
        <Footer/>
      </div>
      </animatePresence>
    </Router>
    
  );
}

export default App;
