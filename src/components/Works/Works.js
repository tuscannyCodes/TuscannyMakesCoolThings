// this change was made in the newworks_branch 
import { useRef, useEffect, useState } from "react";
import "./works.css";
import { motion } from "framer-motion";
// import { carousel } from "framer-motion-carousel";
import WebImages from "./WebImages.js";
import PhotoImages from "./PhotoImages.js";
function Works() {
  // const clientWidth = document.body.clientWidth;
  // const [Width, setWidth] = useState(0);
  // const carousel = useRef();
  // useEffect(() => {
  //   console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
  //   setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  // }, []);

  return (
    // this is a div for the page transition animation
    <motion.div
      
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      className="motion-div"
    >

    <h1 class="WDSectionHeader">Web Development</h1>  
     <section class="webWorksContainer">
<div class="IndividualImageContainer">
<img class= "Image"src="/portfolio.jpg"/>
<h1 class="ImageLabel">This Website!</h1>
<p>My portfolio site built with React JS and Fanmer motion.</p>
</div>


<div class="IndividualImageContainer">
<img class= "Image"src="/test1.jpg"/>
<h1 class="ImageLabel">Hue Chatbot</h1>
<p>This is a chatbot that I build using React JS</p>
</div>

</section>


     <section class="webWorksContainer">
<div class="IndividualImageContainer">
<img class= "Image"src="/test2.jpg"/>
<h1 class="ImageLabel">Fruit Trivia Game</h1>
<p>This is a fun fruit trivia game built using React JS.</p>
</div>


<div class="IndividualImageContainer">
<img class= "Image"src="/test3.jpg"/>
<h1 class="ImageLabel">Solar website</h1>
<p>This is a fully responsive webpage built with Javascript.</p>
</div>

</section>
    </motion.div>
  );
}

export default Works;
