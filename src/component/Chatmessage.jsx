import React from 'react'
import ReactMarkdown from 'react-markdown'
 
const Chatmessage = ({ chat }) => {
  const isThinking = chat.role === "bot" && chat.text === "thinking";
 
  return (
    <div
      className={`chat-message ${chat.role} ${isThinking ? "thinking" : ""}`}
    >
      {isThinking ? (
        <>
          <span></span>
          <span></span>
          <span></span>
        </>
      ) : chat.role === "bot" ? (
        
        <ReactMarkdown>{chat.text}</ReactMarkdown>
      ) : (
        chat.text
      )}
    </div>
  )
}
 
export default Chatmessage
 