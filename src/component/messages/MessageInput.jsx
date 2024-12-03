import React, { useState } from "react"
import { BsSend } from "react-icons/bs"
import useSendMessage from "../../hooks/useSendMessage"

const MessageInput = () => {
  const [message, setMessage] = useState("")
  const { loading, sendMessage } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) return
    await sendMessage(message)
    setMessage("")
  }

  return (
    <form className="p-4 bg-[#1E293B]/60 border-t border-white/5" onSubmit={handleSubmit}>
      <div className="w-full relative max-w-4xl mx-auto">
        <input
          type="text"
          className="w-full px-4 py-3 bg-[#0F172A]/60 text-white rounded-xl 
                   focus:outline-none focus:ring-2 focus:ring-violet-500/70 
                   border border-white/5 placeholder:text-gray-400"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 
                   text-violet-300 hover:text-violet-200 rounded-lg 
                   hover:bg-violet-500/20 transition-all duration-200"
        >
          {loading ? (
            <div className="loading loading-spinner" />
          ) : (
            <BsSend size={20} />
          )}
        </button>
      </div>
    </form>
  )
}

export default MessageInput
