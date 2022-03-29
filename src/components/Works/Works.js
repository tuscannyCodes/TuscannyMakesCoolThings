import { useRef, useEffect, useState } from "react"; 
import "./works.css";
import { motion } from "framer-motion";
import WebImages from "./WebImages.js";
import PhotoImages from "./PhotoImages.js";
function Works() {

  const clientWidth = document.body.clientWidth;
const [Width, setWidth] = useState(0); 
const carousel = useRef();
useEffect(()=>{
  console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);

},[]);

  return (
    <motion.div 
    ref ={carousel}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      className="motion-div"
    >
    
      {/* WEB DEV SECTION */}

      <section className="works-header-section">
        <h1 className="works-header">Web Development</h1>
      </section>
      <motion.div
        drag="x"
        // the numerical drag constraint needs to change in order to make the drag responsive */
        dragConstraints={{ left: -Width , right: 0}}
        className="inner-carousel-Web"
      >
        {WebImages.map((image) => {
          return (
            <img onDragStart={e => e.preventDefault()} className="Web-Images" src={image} />
            
          );
        })}
      </motion.div>

      {/* WEB DEV SECTION END*/}

      {/* PHOTOGRAPHY SECTION */}
      <section className="works-header-section">
        <h1 className="works-header">PHOTOGRAPHY</h1>
      </section>

      <motion.div className="carousel">
        {/* this div is the actual moving div */}
        <motion.div
          drag="x"
        // the numerical drag constraint needs to change in order to make the drag responsive */
          dragConstraints={{ left: -(2000  - clientWidth) , right: 0 }}
          className="inner-carousel-Photo"
        >
          {PhotoImages.map((image) => {
            return (
             
                <img onDragStart={e => e.preventDefault()} className="Photo-Images" src={image} />
             
            );
          })}
        </motion.div>
      </motion.div>

      {/* PHOTOGRAPHY SECTION END*/}
      <section className="works-header-section">
        <h1 className="works-header">GRAPHIC DESIGN</h1>
      </section>
      <div className="works-Container-Images">
        <img
          className="work-example-graphics"
          src="/DeafApe.jpg"
          alt="GraphicDesignExample"
        />
        <img
          className="work-example-graphics"
          src="/thomasthevegan.jpg"
          alt="GraphicDesignExample"
        />
        <img
          className="work-example-graphics"
          src="/DEAF_LOGO.jpg"
          alt="GraphicDesignExample"
        />
      </div>

      <div className="works-Container-Images">
        <img
          className="hoodie_progress"
          src="/hoodie_progress.jpg"
          alt="InfiniteUgly Hoodie Example"
        />
        <img id="likeusImg" src="/likeus2.jpg" alt="Like button Example"></img>
        <img
          className="work-example-graphics"
          src="/DEAF_FACES.jpg"
          alt="GraphicDesignExample"
        />
      </div>
    
    </motion.div>
    
  );
}

export default Works;
