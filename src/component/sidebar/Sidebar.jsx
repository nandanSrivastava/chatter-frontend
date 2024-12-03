import PropTypes from 'prop-types'
import SearchInput from "./SearchInput"
import Coversations from "./Coversations"
import LogoutButton from "./LogoutButton"
import { IoMdClose } from "react-icons/io"
import { BsThreeDotsVertical } from "react-icons/bs"
import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext"

const Sidebar = ({ onClose, isMobile }) => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { authUser } = useAuthContext()

  return (
    <div className={`${
      isMobile ? 'absolute z-50 h-full' : 'relative'
    } w-[280px] min-w-[280px] md:w-[320px] md:min-w-[320px] 
    bg-[#1E293B] backdrop-blur-xl p-4 flex flex-col gap-4 shadow-2xl border-r border-white/5`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full opacity-75 group-hover:opacity-100 blur transition duration-200" />
            <div className="relative">
              <img 
                src={authUser.profilePic} 
                alt="profile" 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20 group-hover:ring-violet-500/50 transition duration-200"
              />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-violet-200 to-indigo-300 bg-clip-text text-transparent capitalize">
              {authUser.fullName || authUser.username}
            </h1>
            <p className="text-sm text-gray-400">Online</p>
          </div>
        </div>

        <div className="relative">
          <button 
            onClick={() => setShowDropdown(!showDropdown)}
            className={`p-2 text-gray-400 hover:text-white rounded-lg 
                     hover:bg-white/5 transition-all duration-200
                     border border-white/10 shadow-lg backdrop-blur-sm
                     ${showDropdown ? 'bg-white/10 text-white ring-2 ring-violet-500/50' : ''}
                     hover:border-violet-500/30 hover:shadow-violet-500/20`}
          >
            <BsThreeDotsVertical size={20} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#1E293B]/95 border border-white/10 shadow-lg py-1 z-50 backdrop-blur-lg">
              <button 
                className="w-full px-4 py-2 text-left text-gray-300 hover:bg-white/5 transition-colors flex items-center gap-2"
                onClick={() => {/* Handle Profile */}}
              >
                <span className="p-1 rounded-md bg-violet-500/10">
                  👤
                </span>
                Profile Settings
              </button>
              <button 
                className="w-full px-4 py-2 text-left text-gray-300 hover:bg-white/5 transition-colors flex items-center gap-2"
                onClick={() => {/* Handle Theme */}}
              >
                <span className="p-1 rounded-md bg-violet-500/10">
                  🎨
                </span>
                Change Theme
              </button>
              <button 
                className="w-full px-4 py-2 text-left text-gray-300 hover:bg-white/5 transition-colors flex items-center gap-2"
                onClick={() => {/* Handle Notifications */}}
              >
                <span className="p-1 rounded-md bg-violet-500/10">
                  🔔
                </span>
                Notifications
              </button>
              <div className="h-[1px] w-full bg-white/10 my-1" />
              <LogoutButton className="w-full px-4 py-2 text-left text-red-400 hover:bg-white/5 transition-colors flex items-center gap-2" />
            </div>
          )}
        </div>

        {isMobile && (
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg 
                     hover:bg-white/5 transition-all duration-200
                     border border-white/10 hover:border-violet-500/30"
          >
            <IoMdClose size={20} />
          </button>
        )}
      </div>
      <SearchInput />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-transparent" />
        <div className="h-[1px] w-full bg-white/5" />
      </div>
      <Coversations />
    </div>
  )
}

Sidebar.propTypes = {
  onClose: PropTypes.func.isRequired,
  isMobile: PropTypes.bool.isRequired
}

export default Sidebar
