import React, { useState } from 'react';
import { FaUserCircle, FaUser, FaGlobe, FaEdit, FaTimes } from 'react-icons/fa';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState('Passionate writer and technology enthusiast. I love sharing my thoughts on modern web development and design.');
  const [website, setWebsite] = useState('https://johndoe.dev');
  const [role] = useState('Senior Editor');
  const [postsCount] = useState(24);
  const [viewsCount] = useState('1.2k');
  const [joinedDate] = useState('Jan 2024');

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log('Profile saved:', { name, bio, website });
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original values if needed
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Left Column - Identity Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {/* Avatar */}
              <div className="flex flex-col items-center mb-6">
                <div className="relative mb-4">
                  <FaUserCircle size={160} className="text-blue-600" />
                  <button
                    className="absolute bottom-2 right-2 bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition-colors shadow-lg"
                    aria-label="Change avatar"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{name}</h2>
                <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full">
                  {role}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{postsCount}</div>
                  <div className="text-xs text-gray-500 mt-1">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">{viewsCount}</div>
                  <div className="text-xs text-gray-500 mt-1">Views</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-800">{joinedDate}</div>
                  <div className="text-xs text-gray-500 mt-1">Joined</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Details Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Profile Information</h3>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaEdit /> Edit Profile
                  </button>
                ) : (
                  <button
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    <FaTimes /> Cancel
                  </button>
                )}
              </div>

              {/* Form */}
              <form onSubmit={handleSave} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaUser className="inline mr-2 text-gray-400" />
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-lg transition-all ${isEditing
                        ? 'bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                        : 'bg-transparent border-none text-gray-800 cursor-default'
                      }`}
                  />
                </div>

                {/* Bio Field */}
                <div>
                  <label htmlFor="bio" className="block text-sm font-semibold text-gray-700 mb-2">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Tell us about yourself..."
                    rows={4}
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-lg transition-all resize-none ${isEditing
                        ? 'bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                        : 'bg-transparent border-none text-gray-800 cursor-default'
                      }`}
                  />
                </div>

                {/* Website Field */}
                <div>
                  <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
                    <FaGlobe className="inline mr-2 text-gray-400" />
                    Website
                  </label>
                  <input
                    id="website"
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourwebsite.com"
                    disabled={!isEditing}
                    className={`w-full px-4 py-3 rounded-lg transition-all ${isEditing
                        ? 'bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                        : 'bg-transparent border-none text-gray-800 cursor-default'
                      }`}
                  />
                </div>

                {/* Save Button */}
                {isEditing && (
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Save Changes
                  </button>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;