import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatMessage from './ChatMessage'

const App = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Halo!', sender: 'other' },
    { id: 2, text: 'Hai juga! Apa kabar?', sender: 'me' },
    { id: 3, text: 'Alhamdulillah baik, kamu?', sender: 'other' },
  ])

  const [input, setInput] = useState('')
  // const [isSuccess, setIsSuccess] = useState(false);

  const sendMessage = () => {
    if (input.trim() === '') return
    setInput('')
    setMessages([...messages, { id: Date.now(), text: input, sender: 'me' }])

  // const handleLogin = () => {
    // Simulasikan login berhasil
    // (Ganti dengan logika login asli kamu)
    // setIsSuccess(true);

    // Sembunyikan pesan setelah 3 detik
    // setTimeout(() => setIsSuccess(false), 3000);
  }

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full h-full flex flex-col bg-white">
    {/* {isSuccess && ( */}
        {/* Header */}
        <div className="bg-green-600 text-white p-4 font-semibold">
          Hai, $user.name
        </div>
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-100">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} text={msg.text} sender={msg.sender} />
          ))}
        </div>
      {/* )} */}

        {/* Input Area */}
        <div className="flex p-2 border-t">
          <input
            type="text"
            className="flex-1 px-3 py-2 border rounded-l-md focus:outline-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tulis pesan..."
          />
          <button
            onClick={sendMessage}
            className="bg-green-600 text-white px-4 rounded-r-md"
          >
            Kirim
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
