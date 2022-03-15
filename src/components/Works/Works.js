
import "./works.css";
import { motion } from "framer-motion";
import WebImages from "./WebImages.js";
import PhotoImages from "./PhotoImages.js";
function Works() {

  const clientWidth = document.body.clientWidth;

  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      className="motion-div"
    >
      {/* MAKE IMAGES LARGER*/}
      {/* WEB DEV SECTION */}

      <section className="works-header-section">
        <h1 className="works-header">Web Development</h1>
      </section>
      <motion.div
        drag="x"
        dragConstraints={{ left: -(2400 - clientWidth) , right: 10 }}
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
          dragConstraints={{ left: -(2400 - clientWidth) , right: 0  }}
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
