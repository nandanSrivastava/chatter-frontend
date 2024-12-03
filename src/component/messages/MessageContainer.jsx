import PropTypes from 'prop-types'
import { useEffect } from "react"
import Messages from "./Messages"
import MessageInput from "./MessageInput"
import useConversation from "../../zustand/useConversation"
import { TiMessages } from "react-icons/ti"
import { IoMenuOutline } from "react-icons/io5"
import { IoCall } from "react-icons/io5"
import { IoVideocam } from "react-icons/io5"

const MessageContainer = ({ onShowSidebar, isMobile, showSidebar }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  const handleVoiceCall = () => {
    // Implement voice call functionality
    console.log("Voice call with:", selectedConversation?.username)
  }

  const handleVideoCall = () => {
    // Implement video call functionality
    console.log("Video call with:", selectedConversation?.username)
  }

  useEffect(() => {
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className="flex-1 w-full min-w-0 flex flex-col bg-[#1E293B]/40">
      {!selectedConversation ? (
        <NoChatSelected onShowSidebar={onShowSidebar} isMobile={isMobile} />
      ) : (
        <>
          {/* Header */}
          <div className="bg-[#1E293B]/80 backdrop-blur-lg px-6 py-4 shadow-lg border-b border-white/5">
            <div className="flex items-center justify-between max-w-4xl mx-auto">
              <div className="flex items-center gap-4">
                {isMobile && !showSidebar && (
                  <button 
                    onClick={onShowSidebar}
                    className="text-gray-100 hover:text-white transition-colors"
                  >
                    <IoMenuOutline size={24} />
                  </button>
                )}
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10">
                    <img 
                      src={selectedConversation?.profilePic} 
                      alt="profile" 
                      className="rounded-full object-cover w-full h-full ring-2 ring-violet-500/20"
                    />
                    <div className="absolute bottom-0 right-0">
                      <div className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-[#1E293B]" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500 absolute inset-0 animate-ping opacity-75" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg tracking-wide">
                      {selectedConversation?.username}
                    </h3>
                    <p className="text-xs text-emerald-400">Online</p>
                  </div>
                </div>
              </div>

              {/* Call Actions */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handleVoiceCall}
                  className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                  title="Voice Call"
                >
                  <IoCall size={20} />
                </button>
                <button 
                  onClick={handleVideoCall}
                  className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                  title="Video Call"
                >
                  <IoVideocam size={20} />
                </button>
              </div>
            </div>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  )
}

const NoChatSelected = ({ onShowSidebar, isMobile }) => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-[#1E293B]/20">
      {isMobile && (
        <button 
          onClick={onShowSidebar}
          className="absolute top-4 left-4 text-gray-200 hover:text-white"
        >
          <IoMenuOutline size={24} />
        </button>
      )}
      <div className="px-8 py-12 text-center flex flex-col items-center gap-8 mx-4">
        <div className="p-6 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full ring-1 ring-white/10">
          <TiMessages className="text-5xl md:text-7xl text-violet-300" />
        </div>
        <div className="space-y-1">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-200 to-indigo-300 bg-clip-text text-transparent">
            Welcome to ChatApp
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Choose a conversation to start messaging
          </p>
        </div>
      </div>
    </div>
  )
}

MessageContainer.propTypes = {
  onShowSidebar: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired,
  showSidebar: PropTypes.bool.isRequired
}

NoChatSelected.propTypes = {
  onShowSidebar: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired
}

export default MessageContainer
