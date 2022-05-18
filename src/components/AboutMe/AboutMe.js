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
            Front End Developer and Graphic Designer.
          </h1>
          <p className="about-me-text">
            Creating cool things is my true passion. Ive been drawing and painting
            for as long as I can remember. In recent years, my creative curiosities
            have expanded to coding and photography. <br></br>
            <br></br>
            Ive always wondered how ideas and designs come together to make something that is practical and thechnically impressive. I enjoy challenging myself to make one-of-a-kind art and web applications; and I believe that combining my talents in this way is a true test of my natual interests and talents.
          </p>
        </section>
      </div>

    </motion.div>
  );
}

export default AboutMe;
