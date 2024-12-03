import React, { useEffect, useRef } from "react"
import Message from "./Message"
import useGetMessages from "../../hooks/useGetMessages"
import useListenMessages from "../../hooks/useListenMessages"

const Messages = () => {
  const { messages, loading } = useGetMessages()

  // console.log(messages)

  useListenMessages()

  const lastMessageRef = useRef()

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" })
    })
  }, [messages])

  return (
    <div className="px-4 flex-1 overflow-auto py-4 space-y-4 scrollbar-thin scrollbar-thumb-violet-500 scrollbar-track-transparent">
      {!loading && messages.length === 0 && (
        <div className="flex items-center justify-center h-full">
          <p className="text-violet-200 text-center bg-slate-800/50 px-6 py-4 rounded-lg backdrop-blur-sm border border-violet-500/20">
            Start conversation by sending a message ✨
          </p>
        </div>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div 
            key={message._id} 
            ref={lastMessageRef}
            className="hover:translate-y-[-2px] transition-transform duration-200"
          >
            <Message message={message} />
          </div>
        ))}
    </div>
  )
}

export default Messages
