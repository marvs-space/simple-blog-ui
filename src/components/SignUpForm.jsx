import React from 'react';
import { FaEnvelope, FaLock, FaUser, FaGoogle, FaGithub } from 'react-icons/fa';

const SignUpForm = ({ onSwitchMode }) => {
  return (
    <>
      <form className="space-y-5">
        {/* Full Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 font-poppins" htmlFor="name">
            Full Name
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaUser className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200 font-poppins text-sm"
            />
          </div>
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 font-poppins" htmlFor="signup-email">
            Email Address
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaEnvelope className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="email"
              id="signup-email"
              placeholder="you@example.com"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200 font-poppins text-sm"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5 font-poppins" htmlFor="signup-password">
            Password
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FaLock className="text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="password"
              id="signup-password"
              placeholder="••••••••"
              className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all duration-200 font-poppins text-sm"
            />
          </div>
          <p className="mt-1.5 text-xs text-gray-500">Must be at least 8 characters</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold hover:bg-black hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-poppins text-sm"
        >
          Create Account
        </button>
      </form>

      {/* Divider */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase tracking-wide">
          <span className="px-4 bg-white text-gray-400 font-medium">Or continue with</span>
        </div>
      </div>

      {/* Social Login Buttons */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button
          type="button"
          className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
        >
          <FaGoogle className="text-red-500" size={18} />
          <span className="text-sm font-medium text-gray-700">Google</span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-2 py-2.5 px-4 border border-gray-200 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
        >
          <FaGithub className="text-gray-900" size={18} />
          <span className="text-sm font-medium text-gray-700">GitHub</span>
        </button>
      </div>

      {/* Switch Mode */}
      <p className="text-center text-gray-500 text-sm font-poppins">
        Already have an account?
        <button
          type="button"
          onClick={onSwitchMode}
          className="text-blue-600 hover:text-blue-700 ml-1.5 font-semibold hover:underline decoration-2 underline-offset-2 transition-all"
        >
          Sign in
        </button>
      </p>
    </>
  );
};

export default SignUpForm;