import React from "react"
import userAvatar from "../../assets/user.png"
import { useAuthContext } from "../../context/AuthContext"
import useConversation from "../../zustand/useConversation"
import { formatTime } from "../../utils/formatTime"

const Message = ({ message }) => {
  const { authUser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const messageFromMe = message.senderId === authUser._id
  const chatClassName = messageFromMe ? "chat-end" : "chat-start"
  const profilePic = messageFromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleColor = messageFromMe ? "bg-violet-500" : "bg-[#1E293B]"
  const formattedTime = formatTime(message.createdAt)

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full ring-1 ring-white/10">
          <img src={profilePic} alt="User Avatar" />
        </div>
      </div>

      <div className={`chat-bubble text-white ${bubbleColor} shadow-lg`}>
        {message.message}
      </div>

      <div className="chat-footer opacity-75 text-xs text-gray-300 mt-1">
        {formattedTime}
      </div>
    </div>
  )
}

export default Message
