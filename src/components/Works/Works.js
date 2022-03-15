// really want to rework this entire page. Its not cool enough and does not display the work in a flattering way. Not sure how to format it all.
//Translate horizontal ***
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
    >
      {/* MAKE IMAGES LARGER*/}
      {/* WEB DEV SECTION */}

      <section className="works-header-section">
        <h1 className="works-header">Web Development</h1>
      </section>
      <motion.div
        drag="x"
        dragConstraints={{ left: -(2400 - clientWidth) , right: 0 }}
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
          dragConstraints={{ right: 10, left: -200 }}
          className="inner-carousel-Photo"
        >
          {PhotoImages.map((image) => {
            return (
              <motion.div className="item" key={image}>
                {/* this div takes the PhotoImages array and makes smaller div's from each image and places them in a img tag.VERY COOL  */}
                <img className="Photo-Images" src={image}></img>
              </motion.div>
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
        ></img>
        <img
          className="work-example-graphics"
          src="/thomasthevegan.jpg"
          alt="GraphicDesignExample"
        ></img>
        <img
          className="work-example-graphics"
          src="/DEAF_LOGO.jpg"
          alt="GraphicDesignExample"
        ></img>
      </div>

      <div className="works-Container-Images">
        <img
          className="hoodie_progress"
          src="/hoodie_progress.jpg"
          alt="InfiniteUgly Hoodie Example"
        ></img>
        <img id="likeusImg" src="/likeus2.jpg" alt="Like button Example"></img>
        <img
          className="work-example-graphics"
          src="/DEAF_FACES.jpg"
          alt="GraphicDesignExample"
        ></img>
      </div>
    </motion.div>
  );
}

export default Works;
