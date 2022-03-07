import "./AboutMe.css";
import {motion} from "framer-motion";
function AboutMe() {
  return (
    <motion.div 
    initial={{translateX:900}} 
    animate={{translateX:0}}
    exit={{scaleY:0}} 
    transition={{ type: "spring", stiffness: 100 }}
    >
    <div className="about-me-main-container">
      <div className="about-me-container">
        <img
          className="meImage"
          src="../meIcon.png"
          alt="Cartoon of me"
        ></img>
      </div>
      <section className="about-me-section">
        <h1>
          Graphic designer, photographer, and front end developer based in
          Orlando, FL.
        </h1>
        <h1 className="about-me-text">
          Creating things is my true passion. Ive been drawing and painting for
          as long as I can remember. In recent years, my creative endevors has
          expanded to Photography and coding. Ive always been curious as to how
          ideas and designs come together to make somthing interesting and
          practical. I enjoy challenging myself to make art and design that is both
          aesticically pleasing and functional.{" "}
        </h1>
        <h1 className="about-me-text">
          In 2011, I graduated from Full Sail University. My time there taught
          me a buch about how to handle professional projects, and how
          important collaboration is when it comes to making an idea as strong
          as it can be.{" "}
        </h1>
        <h1 className="about-me-text">
         All forms of art inspire my work. I think that its so important to reference art that inspires you and then add on to it with your own ideas so that you come up with something new and fresh. Some of my main ispirations are the design work at Apple, the works of Andy Warhol and anything relating to Kanye West.{" "}
        </h1>


      </section>
    </div>
    </motion.div>
  );
}

export default AboutMe;
