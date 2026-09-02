import React, { useState, useRef, useEffect } from 'react'
import Chatbot from './component/Chatbot'
import Landing from './component/Landing'




const input_selection = [
  {
    option1: 'life/Term Insurance'
  },
  {
    option2: 'Health Insurance'
  }
]
const App = () => {

const [page, setPage] = useState("Landing"); // "landing" | "chatbot"
  return (
<>
<Landing />

</>
  
)


}

export default App