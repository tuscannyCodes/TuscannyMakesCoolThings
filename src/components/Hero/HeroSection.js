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
    transition={{ type: "spring", stiffness: 100 }}
    >


    <header className="hero-section">
    
    


      <section id="heroTextContainer">
      <h1 className="hero-text">TUSCANNY</h1>
      <h1 className="hero-text">MAKES COOL</h1>
      <h1 className="hero-text">THINGS!</h1>
      <img class="icons" src="/icons.png"></img>
      </section>
      <section className="WidgetContainer">
      {/* <HueChatbot/> */}
      </section>
     
    </header>

   
    <RotatingImg />
    </motion.div>
    
  );
}

export default HeroSection;
