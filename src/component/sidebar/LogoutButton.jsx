import React from "react"
import { BiLogOut } from "react-icons/bi"
import useLogout from "../../hooks/useLogout"

const LogoutButton = ({ className }) => {
  const { loading, logout } = useLogout()

  return (
    <button
      onClick={logout}
      className={className || "flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors"}
    >
      {loading ? (
        <span className="loading loading-spinner" />
      ) : (
        <>
          <BiLogOut size={20} />
          <span>Logout</span>
        </>
      )}
    </button>
  )
}

export default LogoutButton
