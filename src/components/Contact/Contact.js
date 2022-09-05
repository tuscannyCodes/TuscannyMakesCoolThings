import "./Contact.css";

import {motion} from "framer-motion";
function Contact() {
  return (
    
    <motion.div class="contact-container"
    initial={{translateX:-900}} 
    animate={{translateX:0}}
    exit={{translateX:900}} 
    transition={{ type: "spring", stiffness: 90 }}
    >



      <div class="contact-Container">
 <div class="wrapper">
      <div class="lid one"></div>
      <div class="lid two"></div>
      <div class="envelope"></div>
      <div class="letter">
        <p class="note-Text">...</p>
        <p class="note-Text-Small-Screen">LOREMIPSUMLO@lorem.com</p>
      </div>
    </div>
    <div class="contact-Text">
    <h1 class="contact-Email">LOREM IPSUM LOREM LO!</h1>
    <p class="contact-Email"> <strong>E</strong> | LOREMIPSUMLO@lorem.com</p>
    </div>
    </div>
    </motion.div>
    
  );
}

export default Contact;