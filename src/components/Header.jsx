import React, { useState, useEffect, useRef } from 'react';
import { TbCircleDashed } from 'react-icons/tb';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import HeaderSearchInput from './HeaderSearchInput';

const Header = ({ searchTerm, onSearchChange }) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm py-3'
          : 'bg-white border-b border-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-4">

        <Link to="/" className="flex items-center gap-2.5 no-underline group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <TbCircleDashed size={36} className="text-blue-600 relative z-10 transform group-hover:rotate-90 transition-transform duration-500" />
          </div>
          <div className="flex flex-col leading-none font-poppins">
            <span className="text-gray-900 font-bold text-2xl tracking-tight">Simple<span className="text-blue-600">Blog</span></span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 relative" ref={dropdownRef}>
          <div className="w-80 transition-all duration-300 focus-within:w-96">
            <HeaderSearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="border-none bg-transparent cursor-pointer p-1 rounded-full hover:bg-gray-100 transition-colors flex items-center"
            aria-label="User menu"
            aria-expanded={isDropdownOpen}
          >
            <FaUserCircle size={42} className="text-gray-300 hover:text-blue-600 transition-colors shadow-sm rounded-full bg-white" />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl py-2 z-50 border border-gray-100 overflow-hidden transform origin-top-right transition-all duration-200 animate-in fade-in zoom-in-95">
              <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
                <p className="text-sm font-semibold text-gray-900">My Account</p>
                <p className="text-xs text-gray-500 truncate">user@example.com</p>
              </div>
              <Link to="/profile" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 no-underline transition-colors">
                Profile
              </Link>
              <Link to="/settings" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 no-underline transition-colors">
                Settings
              </Link>
              <div className="border-t border-gray-100 my-1"></div>
              <Link to="/login" className="block px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 no-underline transition-colors font-medium">
                Log Out
              </Link>
            </div>
          )}
        </div>

        <div className="flex md:hidden relative ml-auto" ref={dropdownRef}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(!isDropdownOpen);
            }}
            className="border-none bg-transparent cursor-pointer p-0 flex items-center"
            aria-label="User menu"
            aria-expanded={isDropdownOpen}
          >
            <FaUserCircle size={40} className="text-gray-400 hover:text-gray-500 transition-colors" />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 z-50 border border-gray-100">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline">
                Profile
              </Link>
              <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 no-underline">
                Settings
              </Link>
              <div className="border-t border-gray-100 my-1"></div>
              <Link to="/login" className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 no-underline">
                Log Out
              </Link>
            </div>
          )}
        </div>

        <div className="w-full md:hidden mt-2">
          <HeaderSearchInput searchTerm={searchTerm} onSearchChange={onSearchChange} />
        </div>

      </div>
    </nav>
  );
};

export default Header;