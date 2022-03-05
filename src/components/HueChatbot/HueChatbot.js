import React, { useState, useCallback } from "react";
import "./InputBox.css";

const today = new Date();
let time =  today.toLocaleString('en-US', { hour: 'numeric', hour12: true })

const useChatbot = (userInput) => {
  if (userInput.includes("hi")) {
    return "hello";
  }
  else if (userInput.includes( "hello")) {
    return "hi";
  }
  else if (userInput.includes ("who")) {
    return "im hue, a chatbot";
  }

  else if (userInput.includes ("time")) {
    return time;
  }
  else if (userInput.includes ("you")) {
    return "I was built with React js and Framer Motion!";
  }

  return "i am a robot :D ";
};

function HueChatbot() {
  // state will need to be passed down from program file.
  const [userText, setUserText] = useState("test");

  const chatbotResponse = useChatbot(userText);

  const handleUserInput = useCallback(
    (userInput) => {
      setUserText(userInput);
      
    },
    [setUserText,userText]
  );
  return (
    <section className="inputBox-container">
      <h1 className="speakBox">{chatbotResponse}</h1>
      <form>
        <input className="mainInputBox" onChange={(e)=>{setUserText(e.target.value)}} placeholder="Say something..."></input>
        <button
          className="mainButton"
          onClick={(e) => {
            e.preventDefault();
            handleUserInput();
          }}
        ></button>
      </form>
    </section>
  );
}

export default HueChatbot;
