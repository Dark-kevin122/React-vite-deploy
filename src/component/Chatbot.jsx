import React, { useState, useRef } from 'react'

import Chatmessage from './Chatmessage'
import './Chatbot.css'
import Chatboticon from './Chatboticon'

// 👉 Change this to your actual backend endpoint.
const API_URL = "http://localhost:5000/api/chat";

const Chatpopuscreen = () => {
  const [chathistory, sethistory] = useState([]);
  const inputref = useRef();


  const generatebotresponse = async (history) => {
    try {
      // ---------- 1. DATA YOU SEND TO THE BACKEND ----------
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
         
          messages: history.map((chat) => ({
            role: chat.role,       
            content: chat.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      // backend response
      const data = await response.json();
      const botReply = data.reply;

   
      sethistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "bot", text: botReply };
        return updated;
      });
    } catch (err) {
      console.error("Failed to get bot response:", err);

      sethistory((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "bot",
          text: "Something went wrong try again later",
        };
        return updated;
      });
    }
  };

  function Submitmesaage(e) {
    e.preventDefault();
    const usermessage = inputref.current.value.trim();

    if (!usermessage) return;
    inputref.current.value = "";

   
    const updatedHistory = [...chathistory, { role: "user", text: usermessage }];
    sethistory(updatedHistory);

    setTimeout(() => {
      sethistory((prev) => [...prev, { role: "bot", text: "thinking" }]);
      generatebotresponse(updatedHistory);
    }, 600);
  }

  return (
    <div className='main-container'>
      <div className='chat-popup'>

        {/* ---header--- */}
        <div className='chat-header'>
          <div className="logo-info">
            <h2 className='logo-text'>Insurix</h2>
          </div>
        </div>
        {/* --#header-- */}

        {/* ---chat-section1-- */}
        <div className="section-1">
          {chathistory.map((chat, index) => (
            <Chatmessage key={index} chat={chat} />
          ))}
        </div>
        {/* ---#chat-section---- */}

        <div className="section-3">
          <div className="chat-input-wrapper">
            <div className="chat-input">
              <form id='myform' onSubmit={Submitmesaage}>
                <input
                  type="text"
                  id="messageInput"
                  className="chat-input__field"
                  placeholder="Ask any thing"
                  autoComplete='off'
                  ref={inputref}
                />
                <Chatboticon type='submit' />
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Chatpopuscreen