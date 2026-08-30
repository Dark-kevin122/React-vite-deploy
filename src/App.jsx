import React, { useState, useRef, useEffect } from 'react'
import Chatbot from './component/Chatboticon'

const App = () => {
  const [messages, setMessages] = useState([
    { text: 'Hi! Kuch bhi poochein.', sender: 'bot' },
  ])
  const inputRef = useRef(null)
  const chatEndRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mymessage = inputRef.current.value.trim()
    if (!mymessage) return

    // user ka message add karo
    setMessages((prev) => [...prev, { text: mymessage, sender: 'user' }])
    inputRef.current.value = ''

    // thoda delay ke baad bot ka reply
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: 'hello', sender: 'bot' }])
    }, 400)
  }

  // naya message aane par neeche scroll ho jaaye
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className='main-container'>
      <div className='chat-popup'>

        {/* ---header--- */}
        <div className='chat-header'>
          <div className="logo-info">
            <h2 className='logo-text'>Chatbot</h2>
          </div>
        </div>
        {/* --#header-- */}

        {/* ---chat-section1-- */}
        <div className="section-1">
          <div className='chatsection' id='ss'>
            {messages.map((msg, i) => (
              <div key={i} className={msg.sender === 'user' ? 'mychat' : ''}>
                <span>{msg.text}</span>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
        </div>
        {/* ---#chat-section---- */}

        <div className="section-3">
          <div className="chat-input-wrapper">
            <div className="chat-input">
              <form id='myform' onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="messageInput"
                  className="chat-input__field"
                  placeholder="Kuch bhi poochein — khaana, macros, workout..."
                  autoComplete='off'
                  ref={inputRef}
                />
                <Chatbot type="submit" />
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App