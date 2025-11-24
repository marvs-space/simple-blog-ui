import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { TbCircleDashed } from 'react-icons/tb';

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-screen bg-white flex">

      {/* Left Side - Artistic Background (Desktop Only) */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-black">
        {/* Abstract Gradient Orbs */}
        <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-purple-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob"></div>
        <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-blue-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[80%] h-[80%] bg-pink-600 rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-blob animation-delay-4000"></div>

        {/* Glass Overlay Pattern */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>

        {/* Content Overlay */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-16 text-white">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <TbCircleDashed size={40} className="text-white" />
              <span className="text-2xl font-bold tracking-tight">SimpleBlog</span>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-bold leading-tight mb-6"
            >
              Discover the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                extraordinary.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-300 max-w-md leading-relaxed"
            >
              Join a community of creators, thinkers, and innovators sharing their stories with the world.
            </motion.p>
          </div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-md"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
              <div>
                <p className="font-semibold">Alex Morgan</p>
                <p className="text-sm text-gray-400">Product Designer</p>
              </div>
            </div>
            <p className="text-gray-200 italic">"The most intuitive platform I've used for sharing my design process. The community here is simply unmatched."</p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">

          {/* Mobile Logo */}
          <div className="lg:hidden flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <TbCircleDashed size={32} className="text-blue-600" />
              <span className="text-xl font-bold text-gray-900">SimpleBlog</span>
            </div>
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {activeTab === 'login' ? 'Welcome back' : 'Create an account'}
            </h2>
            <p className="text-gray-500">
              {activeTab === 'login' ? 'Please enter your details to sign in.' : 'Start your 30-day free trial.'}
            </p>
          </div>

          {/* Custom Tab Switcher */}
          <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'login'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Log In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`flex-1 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${activeTab === 'signup'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Sign Up
            </button>
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'login' ? (
              <motion.div
                key="login"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
              >
                <LoginForm onSwitchMode={() => setActiveTab('signup')} />
              </motion.div>
            ) : (
              <motion.div
                key="signup"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                <SignUpForm onSwitchMode={() => setActiveTab('login')} />
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default AuthPage;