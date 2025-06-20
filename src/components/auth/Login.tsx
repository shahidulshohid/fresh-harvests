
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const loginData = {
      email,
      password
    }
    axios.post("https://code-commando.com/api/v1/auth/login", loginData)
    .then((res) => {
      console.log(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
        <label className="text-[#212337]">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border rounded-lg"
          onChange={(e)=> setEmail(e.target.value)}
        />
        <label className="text-[#212337]">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="p-2 border rounded-lg"
          onChange={(e)=> setPassword(e.target.value)}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="btn btn-xs absolute right-10 top-58"
        >
          {showPassword ? (
            <FaEyeSlash className="text-[#A6A6A6]" />
          ) : (
            <FaEye className="text-[#A6A6A6]" />
          )}
        </span>
        <div className="flex justify-between items-center my-2">
          <p className="flex items-center gap-2">
            <Checkbox className="border-[#FF6A1A]" />
            Remember me
          </p>
          <span className="border-b-2 border-gray-600">Forget Password</span>
        </div>
        <button
          type="submit"
          className="bg-[#FF6A1A] font-semibold text-white py-2 rounded-lg text-lg"
        >
          Login
        </button>
        <div className="createDivider text-center py-2 text-4 text-[#4A4A52] font-semibold">Or Sign in with</div>
        <div className="flex justify-between items-center gap-4">
            <button className="flex items-center gap-3 border-2 border-[#D9D9D9] w-full justify-center py-2 rounded-lg"><FcGoogle className="w-6 h-6"/> <span className="text-[#212337] font-bold text-xl ">Google</span></button>
            <button className="flex items-center gap-3 border-2 border-[#D9D9D9] w-full justify-center py-2 rounded-lg"><FaFacebook className="w-6 h-6"/> <span className="text-[#212337] font-bold text-xl ">Facebook</span></button>
        </div>
        <div className="flex justify-center items-center gap-1">
            <p className="text-black text-4 font-bold">Don’t have an account? </p> 
            <Link href="/register" className="text-[#FF6A1A] font-bold text-4">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
