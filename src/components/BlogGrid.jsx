import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogCard from './BlogCard';


const BlogGrid = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <AnimatePresence mode="popLayout">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            className="h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            layout
          >
            <BlogCard
              id={post.id}
              category={post.category}
              title={post.title}
              author={post.author}
              date={post.date}
              imageUrl={post.imageUrl}
              description={post.description}
              borderColor={post.borderColor}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default BlogGrid;