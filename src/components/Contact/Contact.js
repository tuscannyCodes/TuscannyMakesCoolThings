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
<div class="contactDiv">
<h1>Contact Me</h1>
{/* <p class="contact-text"></p> */}
<form>
<input class="form-email" placeholder="Your email"></input>
<input class="form-name" placeholder="Your name"></input>
<textarea class="form-message" placeholder="How can I help you?"></textarea>
<button class="form-submit">SEND</button>
</form>
</div>
    </motion.div>
    
  );
}

export default Contact;