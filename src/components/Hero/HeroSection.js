import "./HeroSection.css";
// import "./RotatingImg";
import RotatingImg from "../RotatingImg/RotatingImg.js";
import HueChatbot from "../HueChatbot/HueChatbot.js";
function HeroSection() {
  return (
    <header className="hero-section">
      <h1 className="hero-text">TUSCANNY</h1>
      <h1 className="hero-text">MAKES COOL</h1>
      <h1 className="hero-text">THINGS!</h1>
      <RotatingImg />
      <HueChatbot/>
    </header>
  );
}

export default HeroSection;
