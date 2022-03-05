import React, { useState, useCallback } from "react";
import "./InputBox.css";

const useChatbot = (userInput) => {
  if (userInput === "hi") {
    return "hello";
  }
  else if (userInput === "hello") {
    return "hi";
  }
  return "i am a robot ";
};

function HueChatbot() {
  // state will need to be passed down from program file.
  const [userText, setUserText] = useState("test");

  const chatbotResponse = useChatbot(userText);

  const handleUserInput = useCallback(
    (userInput) => {
      setUserText(userInput);
      console.log(userText)
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
