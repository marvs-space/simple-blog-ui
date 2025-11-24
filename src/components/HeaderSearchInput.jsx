import React from 'react';
import { GoSearch } from 'react-icons/go';
import { IoMdClose } from 'react-icons/io';

const HeaderSearchInput = ({ searchTerm, onSearchChange }) => (
  <div className="flex items-center gap-2 bg-gray-100 border border-transparent rounded-full px-4 py-2.5 w-full transition-all duration-300 focus-within:bg-white focus-within:shadow-lg focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-200 hover:bg-gray-50">
    {/* Filter Badge */}
    <span className="hidden sm:inline-block px-2.5 py-0.5 bg-white text-gray-600 text-xs font-medium rounded-md select-none shadow-sm border border-gray-200">
      Filter
    </span>

    {/* Search Icon */}
    <GoSearch className="text-gray-500 flex-shrink-0" size={18} />

    {/* Search Input */}
    <input
      type="text"
      placeholder="Type to search..."
      className="outline-none w-full text-sm text-gray-900 bg-transparent placeholder:text-gray-500 font-medium"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      aria-label="Global search"
    />

    {/* Clear Button - Only visible when there's text */}
    {searchTerm && (
      <button
        onClick={() => onSearchChange('')}
        className="flex-shrink-0 p-1 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors duration-200 group"
        aria-label="Clear search"
        type="button"
      >
        <IoMdClose className="text-gray-600 group-hover:text-gray-800" size={14} />
      </button>
    )}

    {/* Command Icon (Visual only) */}
    <div className="hidden md:flex items-center gap-1 ml-2">
      <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-xs text-gray-400 bg-gray-50 border border-gray-200 rounded-md font-sans">⌘K</kbd>
    </div>
  </div>
);

export default HeaderSearchInput;
