import { useState } from 'react'
import './App.css'
import ChatMessage from './ChatMessage'
import Sidebar from './Sidebar'
import Login from './login'

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [messages, setMessages] = useState([])
<<<<<<< Updated upstream
  const [showLogin, setLogin] = useState(true);
=======
  const [showLogin, setLogin] = useState(true)

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <div className="fixed inset-0 z-50 bg-gray-100 flex items-center justify-center">
            <Login onLoginSuccess={handleLoginSuccess} />
=======
          <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
            <Login />
>>>>>>> Stashed changes
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
          <div className="flex items-center gap-2 p-3 bg-gray-100">
            <textarea
              className="flex-1 px-4 py-2 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none overflow-hidden text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tulis pesan..."
              rows={1}
            />
            <button
              onClick={sendMessage}
              className="text-green-600 hover:text-green-700"
              title="Kirim"
            >
              {/* Ikon kirim pakai Unicode atau bisa ganti SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
