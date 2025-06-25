import React, { useState } from 'react'

const ChatMessage = ({ text, sender }) => {
  const isMe = sender === 'me'
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`
          px-3 py-2 rounded-lg max-w-[75%] text-sm text-left
          whitespace-pre-wrap break-words relative
          ${isMe
            ? 'bg-green-500 text-white rounded-br-none'
            : 'bg-gray-200 text-gray-800 rounded-bl-none'}
        `}
      >
        <div className={expanded ? '' : 'line-clamp-5'}>
          {text}
        </div>

        {/* Tombol Expand / Collapse */}
        {text.split('\n').length > 5 || text.length > 200 ? (
          <div className="pt-1 text-right">
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs underline cursor-pointer"
            >
              {expanded ? 'Sembunyikan' : '... Lihat Selengkapnya'}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default ChatMessage
