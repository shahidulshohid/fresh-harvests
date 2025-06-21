"use client";

import axios from "axios";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Token not found. Please log in again.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.put(
        "https://code-commando.com/api/v1/auth/change-password",
        { 
          "oldPassword" : oldPassword,
          "newPassword" : newPassword,
         },
        {
          headers: {
            Authorization: token ? token : ""
          },
        }
      );

      alert("Password changed successfully!");
      console.log(response.data);
    } catch (error: any) {
      console.error("Change password error:", error);
      alert(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-30 text-center min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Change Password</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative">
          <div className="relative">
            <label className="text-[#212337] block text-left mb-1">Old Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter old password"
              className="p-2 border rounded-lg w-full"
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <label className="text-[#212337] block text-left mb-1">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter new password"
              className="p-2 border rounded-lg w-full"
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[38px] cursor-pointer"
            >
              {showPassword ? (
                <FaEyeSlash className="text-[#A6A6A6]" />
              ) : (
                <FaEye className="text-[#A6A6A6]" />
              )}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#FF6A1A] hover:bg-[#e05d18] transition text-white py-2 rounded-lg text-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Changing..." : "Change Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
