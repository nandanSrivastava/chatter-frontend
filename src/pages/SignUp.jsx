import { useState } from "react"
import { Link } from "react-router-dom"
import useSignup from "../hooks/useSignup"
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline } from "react-icons/io5"
import GenderCheckbox from "../component/GenderCheckbox"

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const { loading, signup } = useSignup()

  const handleCheckboxChange = (gender) => {
    setFormData({ ...formData, gender })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(formData)
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#0F172A]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
      
      <div className="relative w-full max-w-md p-6 mx-4">
        <div className="relative bg-[#1E293B]/90 rounded-xl backdrop-blur-xl border border-white/10">
          <div className="relative p-8">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-200 to-indigo-300 bg-clip-text text-transparent">
                Create Account
              </h1>
              <p className="text-gray-400 mt-2">Join our community today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <IoPersonOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full pl-11 pr-4 py-3 bg-[#0F172A]/60 text-white rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-violet-500/70 
                           border border-white/5 placeholder:text-gray-500"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <IoMailOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full pl-11 pr-4 py-3 bg-[#0F172A]/60 text-white rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-violet-500/70 
                           border border-white/5 placeholder:text-gray-500"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <IoLockClosedOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-11 pr-4 py-3 bg-[#0F172A]/60 text-white rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-violet-500/70 
                           border border-white/5 placeholder:text-gray-500"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <IoLockClosedOutline className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full pl-11 pr-4 py-3 bg-[#0F172A]/60 text-white rounded-xl 
                           focus:outline-none focus:ring-2 focus:ring-violet-500/70 
                           border border-white/5 placeholder:text-gray-500"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>

              <GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={formData.gender} />

              <div className="flex items-center justify-center text-sm">
                <Link
                  to="/login"
                  className="text-gray-400 hover:text-violet-400 transition-colors"
                >
                  Already have an account? Sign in
                </Link>
              </div>

              <button
                className="w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 
                         text-white font-semibold rounded-xl hover:opacity-90 
                         focus:outline-none focus:ring-2 focus:ring-violet-500/70
                         transition-all duration-200"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  </div>
                ) : (
                  "Create Account"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
