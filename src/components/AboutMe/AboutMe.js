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
        <div className="about-me-container">
          <img className="meImage" src="../meIcon.jpg" alt="Cartoon of me" />
        </div>
        <section className="about-me-section">
          <h1>
            Front End Developer, Photographer, Graphic designer based in
            Orlando, FL.
          </h1>
          <h1 className="about-me-text">
            Creating things is my true passion. Ive been drawing and painting
            for as long as I can remember. In recent years, my creative endevors
            has expanded to Photography and coding. Ive always been curious as
            to how ideas and designs come together to make something interesting
            and thechnically impressive. I enjoy challenging myself to make art
            and design that is both aesticically pleasing and functional.{" "}
          </h1>
        </section>
      </div>

      <section className="expand-about-me-section">
      <div className="about-me-container">
<img  className="FullSailImage" src="../fullSail_placeholder.jpg"></img>
        </div>
        <div class="expand-about-me-container">
          <h1 className="about-me-text">
            <h1>In 2011, I graduated from Full Sail University.</h1>
            My time there taught me a buch about how to handle professional
            projects, and how important collaboration is when it comes to making
            an idea as strong as it can be. The ciriculum was crazy, It seemed
            as if I never had a second to breath or take a break. Some of the
            classes required students to work on massive projects that would
            take all day to finish once class was over. We worked hard once we
            got home for the day and needed to finish assingments to turn in by
            the next day. I cant say that it was easy. But you know what? All the late nights and crazy hours taught me how much work was required to persue your
            dreams and what it really means to build ideas on a professional level.
          </h1>
        </div>
        {/* <h1 className="about-me-text">
         All forms of art inspire my work. I think that it is so important to reference art that inspires you and then add on to it with your own ideas so that you come up with something new and fresh. Some of my main ispirations are the design work at Apple, the works of Andy Warhol, and anything relating to Kanye West.{" "}
        </h1> */}
      </section>
    </motion.div>
  );
}

export default AboutMe;
