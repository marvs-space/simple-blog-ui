import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { FaArrowLeft } from 'react-icons/fa';

const SinglePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = posts.find(p => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Post Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
      >
        <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium">Back to Posts</span>
      </button>

      {/* Full-width Image */}
      <div className="w-full h-96 rounded-xl overflow-hidden shadow-2xl mb-8">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Category Badge */}
      <div className="mb-4">
        <span className="text-blue-600 text-sm font-semibold uppercase tracking-wide">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
        {post.title}
      </h1>

      {/* Author and Date */}
      <div className="flex items-center gap-4 text-gray-600 mb-8 pb-6 border-b-2" style={{ borderColor: post.borderColor }}>
        <span className="font-medium">By {post.author}</span>
        <span className="text-gray-400">•</span>
        <span>{post.date}</span>
      </div>

      {/* Body Content */}
      <div className="prose prose-lg max-w-none">
        {post.content && post.content.map((block, index) => {
          switch (block.type) {
            case 'paragraph':
              return (
                <p key={index} className="text-gray-700 text-lg leading-relaxed mb-6">
                  {block.text}
                </p>
              );
            case 'heading':
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {block.text}
                </h2>
              );
            case 'quote':
              return (
                <blockquote
                  key={index}
                  className="border-l-4 pl-6 py-4 my-8 italic text-gray-600 text-xl"
                  style={{ borderColor: post.borderColor }}
                >
                  "{block.text}"
                </blockquote>
              );
            case 'list':
              return (
                <ul key={index} className="list-disc pl-6 mb-6 space-y-2 text-gray-700 text-lg">
                  {block.items.map((item, i) => (
                    <li key={i} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}

        {!post.content && (
          <p className="text-gray-500 italic">No content available for this post.</p>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
