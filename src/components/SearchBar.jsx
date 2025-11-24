import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full md:flex-1 md:h-full flex items-center justify-between p-4 md:px-6 md:border-l border-gray-200">

      <input
        type="text"
        placeholder="Write here..."
        className="text-gray-600 placeholder-blue-500 font-poppins font-medium text-sm outline-none bg-transparent w-full mr-4"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        aria-label="Search posts"
      />

      <button
        onClick={() => navigate('/write')}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-9 h-9 shrink-0 flex items-center justify-center shadow-sm transition-colors border-none cursor-pointer"
        aria-label="Add new post"
      >
        <IoMdAdd size={20} />
      </button>

    </div>
  );
};

export default SearchBar;
