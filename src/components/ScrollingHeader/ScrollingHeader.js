// import './ScrollingHeader.css';


// function ScrollingHeader() {
//     return (
        
// 	    <div class="marquee">
// 			<div class="marquee__inner" >
// 				<span> JACK OF ALL TRADES</span>
// 				<span> JACK OF ALL TRADES</span>
// 				<span> JACK OF ALL TRADES</span>
// 				<span> JACK OF ALL TRADES</span>
// 				<span> JACK OF ALL TRADES</span>
// 				<span> JACK OF ALL TRADES</span>
// 				<span> JACK OF ALL TRADES</span>
// 			</div>
// 			</div>
//     );
      
//   };
  
//   export default ScrollingHeader;


import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";

import './ScrollingHeader.css';

// 2. Defining Variants
const marqueeVariants = {
  animate: {
    x: [0, -1335],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 8,
        ease: "linear",
      },
    },
  },
};

const ScrollingHeader = () => {
  return (
    <div>
      <div className="marquee">
                {/* 3. Using framer motion */}
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
           JACK OF ALL TRADES. JACK OF ALL TRADES.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollingHeader;