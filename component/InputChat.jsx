// src/components/InputChat.jsx
import React from "react";

export default function InputChat({ input, setInput, sendMessage }) {
  return (
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  );
}
