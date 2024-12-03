import React from "react"
import useGetConversations from "../../hooks/useGetConversations"
import { useSocketContext } from "../../context/SocketContext"
import useConversation from "../../zustand/useConversation"
import { formatTime } from "../../utils/formatTime"

const Coversations = () => {
  const { loading, conversations } = useGetConversations()
  const { selectedConversation, setSelectedConversation } = useConversation()
  const { onlineUsers } = useSocketContext()

  return (
    <div className="flex-1 overflow-auto space-y-2">
      {conversations.map((conversation) => {
        const isOnline = onlineUsers.includes(conversation._id)

        return (
          <div
            key={conversation._id}
            onClick={() => setSelectedConversation(conversation)}
            className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300
              ${selectedConversation?._id === conversation._id 
                ? 'bg-violet-500/10 hover:bg-violet-500/20' 
                : 'hover:bg-white/5'
              }`}
          >
            <div className="relative flex-shrink-0">
              <img
                src={conversation.profilePic}
                alt={`${conversation.username}'s profile`}
                className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
              />
              {isOnline && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-[#1E293B] rounded-full">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
                </span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold truncate">
                  {conversation.username}
                </h3>
                {conversation.lastMessage?.createdAt && (
                  <span className="text-xs text-gray-400">
                    {formatTime(conversation.lastMessage.createdAt)}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-400 truncate">
                {conversation.lastMessage?.message || "Start a new conversation"}
              </p>
            </div>

            {selectedConversation?._id === conversation._id && (
              <div className="w-1.5 h-1.5 rounded-full bg-violet-500"></div>
            )}
          </div>
        )
      })}

      {loading ? (
        <div className="flex items-center justify-center h-full">
          <span className="loading loading-spinner text-violet-500"></span>
        </div>
      ) : null}
    </div>
  )
}

export default Coversations
