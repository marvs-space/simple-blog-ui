import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaXTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-10 py-12">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">SimpleBlog</h3>
            <p className="text-sm text-gray-300">
              Your destination for insightful articles on trends, design, and technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="X (formerly Twitter)"
              >
                <FaXTwitter size={22} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </div>

          {/* Discover Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Discover</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/?category=trends"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Trends
                </Link>
              </li>
              <li>
                <Link
                  to="/?category=design"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  to="/?category=tech"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Tech
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Help</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/faq"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter and never miss an update.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="px-4 py-2.5 text-sm bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-200"
              />
              <button
                type="submit"
                className="px-6 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} SimpleBlog. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
