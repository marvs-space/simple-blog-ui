import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';


const RootLayout = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content Area - Constrained Width */}
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto py-8 px-10">

          <Header
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet context={{ searchTerm, setSearchTerm }} />
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Footer - Full Width */}
      <Footer />
    </div>
  );
};

export default RootLayout;