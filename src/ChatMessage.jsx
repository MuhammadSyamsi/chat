import React from 'react'

const ChatMessage = ({ text, sender }) => {
  const isMe = sender === 'me'
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`px-3 py-2 rounded-lg max-w-[75%] text-sm ${
          isMe
            ? 'bg-green-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'
        }`}
      >
        {text}
      </div>
    </div>
  )
}

export default ChatMessage
