
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div>
      <form className="flex flex-col gap-3 mt-4">
        <label className="text-[#212337]">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-4 border rounded"
        />
        <label className="text-[#212337]">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="p-4 border rounded"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="btn btn-xs absolute right-10 top-64"
        >
          {showPassword ? (
            <FaEyeSlash className="text-[#A6A6A6]" />
          ) : (
            <FaEye className="text-[#A6A6A6]" />
          )}
        </span>
        <div className="flex justify-between items-center">
          <p className="flex items-center gap-2">
            <Checkbox className="border-[#FF6A1A]" />
            Remember me
          </p>
          <span className="border-b-2 border-gray-600">Forget Password</span>
        </div>
        <button
          type="submit"
          className="bg-[#FF6A1A] font-semibold text-white py-4 rounded text-lg"
        >
          Login
        </button>
        <div className="createDivider text-center py-6 text-4 text-[#4A4A52] font-semibold">Or Sign in with</div>
        <div>
            <button>dfsd</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
