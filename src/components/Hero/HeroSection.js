import "./HeroSection.css";
// import "./RotatingImg";
import RotatingImg from "../RotatingImg/RotatingImg.js";
import HueChatbot from "../HueChatbot/HueChatbot.js";
import {motion} from "framer-motion";
function HeroSection() {
  return (
    
    <motion.div 
    initial={{translateX:-900}} 
    animate={{translateX:0}}
    exit={{translateX:900}} 
    >
    <header className="hero-section">
      <h1 className="hero-text">TUSCANNY</h1>
      <h1 className="hero-text">MAKES COOL</h1>
      <h1 className="hero-text">THINGS!</h1>
      <RotatingImg />
      <HueChatbot/>
    </header>
    </motion.div>
    
  );
}

export default HeroSection;
