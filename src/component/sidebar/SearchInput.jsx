import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import { IoClose } from "react-icons/io5"

const SearchInput = () => {
  const [search, setSearch] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  return (
    <div className="relative">
      <div 
        className={`relative flex items-center bg-[#0F172A]/40 rounded-xl p-1
                   ${isFocused ? 'ring-2 ring-violet-500/50' : 'ring-1 ring-white/10'}
                   transition-all duration-300 group`}
      >
        <div className={`p-2 ${isFocused ? 'text-violet-400' : 'text-gray-500'} transition-colors`}>
          <IoSearch className="w-5 h-5" />
        </div>
        
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search chats..."
          className="w-full bg-transparent text-white py-2 pr-4
                   focus:outline-none placeholder:text-gray-500"
        />
        
        {search && (
          <button
            onClick={() => setSearch("")}
            className="p-2 hover:bg-white/5 rounded-lg transition-colors mr-1"
          >
            <IoClose className="w-4 h-4 text-gray-400" />
          </button>
        )}
      </div>

      {search && (
        <div className="absolute w-full mt-2 bg-[#1E293B]/95 backdrop-blur-sm border border-white/10 
                      rounded-xl shadow-lg overflow-hidden z-50">
          <div className="p-3">
            <div className="flex items-center justify-center gap-3 text-gray-400 py-4">
              <IoSearch className="w-5 h-5 text-violet-400/50" />
              <span className="text-sm">Searching for "{search}"</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchInput
