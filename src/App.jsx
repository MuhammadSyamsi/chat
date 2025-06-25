import { useState } from 'react'
import './App.css'
import ChatMessage from '../component/ChatMessage'
import Sidebar from '../component/Sidebar'
import Login from '../component/login'
import InputChat from "../component/InputChat";
import axios from 'axios';

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [messages, setMessages] = useState([])
  const [showLogin, setLogin] = useState(true)

  const [input, setInput] = useState('')

  const sendMessage = () => {
    if (input.trim() === '') return
    setInput('')
    setMessages([...messages, { id: Date.now(), text: input, sender: 'me' }])
  }

  const handleLoginSuccess = () => {
    setShowLogin(false)
    setShowSidebar(true)
  }

  return (
    <div className="h-screen w-screen bg-gray-100 flex">
      {showSidebar && <Sidebar />}

      <div className="flex flex-col flex-1 bg-white">
        {showLogin && (
          <div className="fixed inset-0 z-50 bg-gray-100 flex items-center justify-center">
            <Login onLoginSuccess={handleLoginSuccess} />
          </div>
        )}
        <div className="w-full h-full flex flex-col bg-white">
          {/* Header */}
          <div className="bg-green-600 text-white p-4 font-semibold hidden">
            Kontak
          </div>
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-100 break-words">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} text={msg.text} sender={msg.sender} />
            ))}
          </div>

          {/* Input Area */}
          {!showLogin && (
            <InputChat input={input} setInput={setInput} sendMessage={sendMessage} />
          )}
        </div>
      </div>
    </div>
  )
}

export default App
