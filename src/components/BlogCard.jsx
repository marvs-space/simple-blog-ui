import React from 'react';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ id, category, title, author, date, imageUrl, description, borderColor }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/post/${id}`);
  };

  // Calculate read time (assuming 200 words per minute)
  const readTime = Math.ceil(description.length / 200);

  return (
    <div className="h-full flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 shadow-md">

      <div className="relative cursor-pointer" onClick={handleNavigate}>
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100 transition-colors"
          role="button"
          aria-label="Watch video"
          onClick={(e) => e.stopPropagation()}
        >
          <BsFillCameraVideoFill className="text-blue-600" />
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <p className="text-blue-500 text-xs font-semibold uppercase">{category}</p>

        <p className="text-sm text-gray-500 mt-2">
          on {date} / by {author} <span className="text-gray-400">•</span> <span className="text-gray-400 text-xs">{readTime} min read</span>
        </p>

        <h3
          className="text-xl font-bold text-gray-900 mt-2 mb-3 cursor-pointer hover:text-blue-600 transition-colors line-clamp-2"
          onClick={handleNavigate}
        >
          {title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-3">
          {description}
        </p>

        <hr
          className="my-4 mt-auto"
          style={{ borderTop: `3px solid ${borderColor}` }}
        />

        <div className="flex justify-end">
          <span className="text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;