import { useOutletContext } from 'react-router-dom';
import BlogGrid from './components/BlogGrid';
import Filters from './components/Filters';
import { HiOutlineAdjustments } from 'react-icons/hi';
import React, { useState } from 'react';

import { posts } from './data/posts';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { searchTerm, setSearchTerm } = useOutletContext();

  React.useEffect(() => {
    document.title = "React Blog UI - Home";
  }, []);

  const filteredPosts = React.useMemo(() => {
    return posts.filter(post => {
      const categoryMatch = selectedCategory === 'All' || post.category.toUpperCase().includes(selectedCategory);
      const searchMatch = post.title.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [selectedCategory, searchTerm]);

  return (

    <>
      <Filters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className="flex justify-between items-center mt-8 mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {selectedCategory === 'All' ? 'All POSTS' : selectedCategory}
        </h2>
        <HiOutlineAdjustments className="text-gray-400 text-2xl cursor-pointer" />
      </div>

      <BlogGrid posts={filteredPosts} />
    </>
  );

}

export default App;