const Sidebar = () => {
  const chats = [
    { id: 1, name: 'Asisten Kerja', lastMessage: 'Pembantu Kerja' },
    { id: 2, name: 'Ustadz Fulan', lastMessage: 'Mohon info seragam.' },
    { id: 3, name: 'User lain', lastMessage: 'Anak saya sakit, izin.' },
  ]

  return (
    <div className="w-80 h-full bg-grey flex flex-col border-r border-gray-200">
      {/* Header Profile */}
      <div className="p-4 border-b bg-green-600 text-white font-semibold">
        Yayasan Darul Hijrah
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`m-4 rounded-full px-4 py-3 hover:bg-white text-left cursor-pointer ${isDisabled ? 'pointer-events-none bg-white/50' : 'bg-white/70'}`}
          >
            <div className="font-medium">{chat.name}</div>
            <div className="text-sm text-gray-500 truncate">
              {chat.lastMessage}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
