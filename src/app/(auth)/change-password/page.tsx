import React from 'react';

const ChangePassword = () => {
    return (
        <div className='pt-30 text-center'>
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-4">
                    <label className="text-[#212337]">Old Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="p-2 border rounded-lg"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className="text-[#212337]">Old Password</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="p-2 border rounded-lg"
                      onChange={(e) => setPassword(e.target.value)}
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
                    <button
                      type="submit"
                      className="bg-[#FF6A1A] font-semibold text-white py-2 rounded-lg text-lg"
                    >
                      Change Password
                    </button>
                  </form>
        </div>
    );
};

export default ChangePassword;