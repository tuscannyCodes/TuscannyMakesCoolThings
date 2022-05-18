import "./Section.css";
import ScrollingHeader from "../ScrollingHeader/ScrollingHeader";

function Section() {
  return (
    <section className="content-section">
      <div className="section-text-container">
        <ScrollingHeader />
        <h2 className="section-text">
          Hi, my name is Tuscanny and I really love making cool things. My
          passion is Front End Web Development and Graphic Design. I love mixing
          my talents together to create impactful designs and user experiences.
          I enjoy taking a bare-bones approach to design and stripping concepts
          down to the ideas that make them the most meaningful.
        </h2>
      </div>
    </section>
  );
}

export default Section;
