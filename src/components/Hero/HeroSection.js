import "./HeroSection.css";
import RotatingImg from "../RotatingImg/RotatingImg.js";
import { motion } from "framer-motion";
function HeroSection() {
  return (
    <motion.div
      initial={{ translateX: -900 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 900 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <header className="hero-section">
        <section className="heroTextContainer">
          <h1 className="hero-text">TUSCANNY</h1>
          <h1 className="hero-text">
            MAKES
            <motion.div
              initial={{ translateX: 2000 }}
              animate={{ translateX: 0 }}
              exit={{ translateX: 900 }}
              transition={{ type: "spring", stiffness: 110, mass: 2 }}
            >
              <span>COOL</span>
            </motion.div>
          </h1>
          <h1 className="hero-text">THINGS!</h1>
          <img className="icons" src="/icons2.png"></img>
        </section>
        <section className="WidgetContainer">{/* <HueChatbot/> */}</section>
      </header>

      <RotatingImg />
    </motion.div>
  );
}

export default HeroSection;
