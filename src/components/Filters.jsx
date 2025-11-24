import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdAdd, IoIosArrowDown } from 'react-icons/io';

const Filters = ({ selectedCategory, onCategoryChange }) => {
  const navigate = useNavigate();

  const categories = [
    { id: 'TRENDS', label: 'Latest Trending' },
    { id: 'DESIGN', label: 'Popular Trending' },
    { id: 'TECH', label: 'Most Recent' },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 sticky top-[88px] z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">

          {/* Categories Scrollable Area */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">

            {/* All Category Dropdown Pill */}
            <button
              onClick={() => onCategoryChange('All')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-medium transition-all whitespace-nowrap border border-transparent hover:border-gray-300"
            >
              <span>All Categories</span>
              <IoIosArrowDown size={14} />
            </button>

            <div className="w-px h-6 bg-gray-200 mx-2 flex-shrink-0"></div>

            {/* Category Pills */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${selectedCategory === category.id
                  ? 'bg-gray-900 text-white shadow-md transform scale-105'
                  : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-900 border border-gray-100'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Add Post Button */}
          <div className="flex items-center justify-end">
            <button
              onClick={() => navigate('/write')}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 font-medium text-sm group"
            >
              <IoMdAdd size={18} className="group-hover:rotate-90 transition-transform duration-300" />
              <span>Create Post</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Filters;