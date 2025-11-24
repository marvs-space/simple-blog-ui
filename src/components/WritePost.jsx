import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdAdd, IoMdClose } from 'react-icons/io';
import { FiImage } from 'react-icons/fi';

const WritePost = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: 'TRENDS',
    imageUrl: '',
    content: ''
  });

  const [showImageInput, setShowImageInput] = useState(false);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const categories = [
    { value: 'TRENDS', label: 'Trends' },
    { value: 'DESIGN', label: 'Design' },
    { value: 'TECH', label: 'Technology' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCategorySelect = (categoryValue) => {
    setFormData(prev => ({
      ...prev,
      category: categoryValue
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement post creation logic
  };

  const handleRemoveCover = () => {
    setFormData(prev => ({
      ...prev,
      imageUrl: ''
    }));
    setShowImageInput(false);
  };

  // Auto-grow textarea for title
  const autoGrowTitle = (element) => {
    if (element) {
      element.style.height = 'auto';
      element.style.height = element.scrollHeight + 'px';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Top Action Bar */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-gray-700 font-medium text-sm transition-colors"
          >
            ← Back
          </button>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-5 py-2 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="px-6 py-2 bg-gray-900 hover:bg-black text-white font-medium text-sm rounded-full transition-all shadow-sm hover:shadow-md"
            >
              Publish
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto pt-10 pb-20 px-6">
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Cover Image Section */}
          {formData.imageUrl ? (
            <div className="relative group -mx-6 mb-12">
              <img
                src={formData.imageUrl}
                alt="Cover"
                className="w-full h-[400px] object-cover"
              />
              <button
                type="button"
                onClick={handleRemoveCover}
                className="absolute top-4 right-4 bg-white hover:bg-gray-100 text-gray-700 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <IoMdClose size={20} />
              </button>
            </div>
          ) : showImageInput ? (
            <div className="space-y-3 mb-12">
              <input
                type="url"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                placeholder="Paste image URL..."
                className="w-full text-base text-gray-700 placeholder-gray-400 border-b border-gray-200 focus:border-gray-900 outline-none pb-2 transition-colors"
                autoFocus
              />
              <button
                type="button"
                onClick={() => setShowImageInput(false)}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Cancel
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setShowImageInput(true)}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 text-sm transition-colors mb-12"
            >
              <FiImage size={18} />
              <span>Add cover image</span>
            </button>
          )}

          {/* Title Input */}
          <textarea
            ref={titleRef}
            name="title"
            value={formData.title}
            onChange={(e) => {
              handleChange(e);
              autoGrowTitle(e.target);
            }}
            placeholder="Title"
            className="w-full text-5xl font-bold placeholder-gray-300 text-gray-900 border-none focus:ring-0 outline-none resize-none overflow-hidden font-poppins leading-tight"
            rows="1"
            style={{ fontWeight: 800 }}
            required
          />

          {/* Category Pills */}
          <div className="flex items-center gap-3 py-2">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => handleCategorySelect(category.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${formData.category === category.value
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Content Textarea */}
          <textarea
            ref={contentRef}
            name="content"
            value={formData.content}
            onChange={handleChange}
            placeholder="Tell your story..."
            className="w-full text-xl leading-relaxed text-gray-800 placeholder-gray-400 border-none focus:ring-0 outline-none resize-none font-poppins"
            style={{ height: '60vh' }}
            required
          />
        </form>
      </div>
    </div>
  );
};

export default WritePost;
