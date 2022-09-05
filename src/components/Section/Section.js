import "./Section.css";
import ScrollingHeader from "../ScrollingHeader/ScrollingHeader";

function Section() {
  return (
    <section className="content-section">
      <div className="section-text-container">
        <ScrollingHeader />
        <h2 className="section-text">
          Hi, my name is LOREM LOREM and I really love making cool LOREMS. My
          passion is Front End Web Development and Graphic Design. I love mixing my talents together to create impactful designs and user experiences. I enjoy taking a bare-bones approach to design and stripping concepts down to the ideas that make them the most LOREM.
        </h2>
      </div>
    </section>
  );
}

export default Section;
