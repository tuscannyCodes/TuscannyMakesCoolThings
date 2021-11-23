import './Section.css';
import ScrollingHeader from './ScrollingHeader';

function Section() {
    return (
      <section className="content-section">
          <div className="section-text-container">
            <ScrollingHeader/>
      <h1 className="section-text">Hi, my name is Tuscanny and I really love creating cool things. My passions are Photography, Graphic Design, Drawing, and Coding. I love mixing my talents together to create minimal but impactful designs and experiences. I enjoy taking a bare bones approach to design and stripping concepts down to the ideas that make them the most meaningful.  </h1>
      </div>
    </section>
    );
      
  };
  
  export default Section;