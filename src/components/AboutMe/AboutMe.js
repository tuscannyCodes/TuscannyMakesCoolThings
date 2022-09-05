import "./AboutMe.css";
import { motion } from "framer-motion";
function AboutMe() {
  return (
    <motion.div
      initial={{ translateX: 900 }}
      animate={{ translateX: 0 }}
      exit={{ scaleY: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <div className="about-me-main-container">
        <h1 className="aboutMeSectionHeader">About Me</h1>
        <div className="about-me-image-container">
          <img className="meImage" src="../meIcon.jpg" alt="Cartoon of me" />
        </div>
        <section className="about-me-section">
          <h1 className="aboutHeader">
            LOREM LOR LOREM LOREM IP LOREM IPSUM.
          </h1>
          <p className="about-me-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br>
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </section>
      </div>

    </motion.div>
  );
}

export default AboutMe;
