import Sidebar from "../component/sidebar/Sidebar"
import MessageContainer from "../component/messages/MessageContainer"
import { useEffect, useState } from "react"

const Home = () => {
  const [isMobileView, setIsMobileView] = useState(false)
  const [showSidebar, setShowSidebar] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex h-screen w-screen max-w-full overflow-hidden bg-[#0F172A]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
      <div className="flex w-full h-full relative">
        {(!isMobileView || showSidebar) && (
          <Sidebar onClose={() => setShowSidebar(false)} isMobile={isMobileView} />
        )}
        <MessageContainer 
          onShowSidebar={() => setShowSidebar(true)} 
          isMobile={isMobileView}
          showSidebar={showSidebar}
        />
      </div>
    </div>
  )
}

export default Home
