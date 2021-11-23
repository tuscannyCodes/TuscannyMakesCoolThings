import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-me-main-container">
      <div className="about-me-container">
        <img
          className="meImage"
          src="../meIcon.png"
          alt="Placeholder Image of me"
        ></img>
      </div>
      <section className="about-me-section">
        <h1>
          I'm a designer, photographer, and front end developer based in
          Orlando, FL.
        </h1>
        <h1 className="about-me-text">
          Creating things is my true passion. Ive been drawing and painting for
          as long as I can remember. In recent years, my creative endevors has
          expanded to Photography and coding. Ive always been curious as to how
          ideas and designs come together to make somthing interesting and
          useful. I enjoy challenging myself to make art and design that is both
          aesticically pleasing and functional.{" "}
        </h1>
        <h1 className="about-me-text">
          In 2011, I graduated from Full Sail University. My time there taught
          me a buch about how to handle professional projects, and how
          impoertant collaboration is when it comes to making an idea as strong
          as it can be.{" "}
        </h1>
      </section>
    </div>
  );
}

export default AboutMe;
