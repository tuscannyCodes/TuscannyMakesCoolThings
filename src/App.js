import Navbar, { ROUTES } from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Section from "./components/Section/Section";
import AboutMe from "./components/AboutMe/AboutMe";
import Works from "./components/Works/Works";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
                <div> This contact page is under construction</div>
              </>
            }
          />
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
