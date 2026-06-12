import React, { createContext, useState } from "react";
import callbackend from "../connection";
import Model from "../Model";

export const myContext = createContext();

const MyProvider = ({ children }) => {
  const [listening, setListening] = useState(false);
  const [speaking, setSpeaking] = useState(false);
 const [currentAnimation, setCurrentAnimation] = useState("hello");

 const sessionId = sessionStorage.getItem("sessionId");

if (!sessionId) {
  const newSessionId = crypto.randomUUID();
  sessionStorage.setItem("sessionId", newSessionId);
}

  const startListening = () => {
   setCurrentAnimation(`hello`);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-IN";

    recognition.start();
    setListening(true);
    recognition.onresult = async (e) => {
      
      const text = e.results[0][0].transcript;

      console.log(text);
      const data = await callbackend(text);

      sessionStorage.setItem("message", text);
    sessionStorage.setItem("response", data.aiResponse);

      setListening(false);
      console.log(data);
    
      startSpeaking(data.aiResponse);
    };
  };


  const startSpeaking = (aiResponse) => {
    
    const speech = new SpeechSynthesisUtterance(aiResponse);

    setCurrentAnimation("thinking");
    setSpeaking(true);
 const voices = window.speechSynthesis.getVoices();

   const indianVoice =
    voices.find(v => v.lang === "hi-IN") ||
    voices.find(v => v.lang.includes("en-IN")) ||
    voices.find(v => v.lang.includes("hi"));

  if (indianVoice) {
    speech.voice = indianVoice;
  }

  speech.lang = "hi-IN";
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;

  window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);
    
    speech.onend = (e) => {
      setSpeaking(false);
      
    };
  };

  return (
    <>
      <myContext.Provider
        value={{ listening, startListening, speaking, startSpeaking ,currentAnimation,setCurrentAnimation}}
      >
        {children}
      </myContext.Provider>
    </>
  );
};
export default MyProvider;
