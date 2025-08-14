import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

const BlogOverview = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogById(id);
  }, [id]);

  const fetchBlogById = async (blogId) => {
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const res = await axios.get(`${API_URL}/blogs/slug/${blogId}`);
      setBlog(res.data.blog);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (!blog) return <div className="text-center py-20">Blog not found.</div>;

  return (
    <motion.div
      className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 md:p-12 lg:p-20 bg-gray-50"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="relative z-10 w-full max-w-4xl bg-white shadow-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
      >
        <motion.img
          src={blog.cover_image_url}
          alt="Blog Cover"
          className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-xl"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        />

        <div className="mt-4 flex flex-col sm:flex-row justify-between text-gray-500 text-xs sm:text-sm">
          <span>{new Date(blog.created_at).toDateString()}</span>
        </div>

        <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
          {blog.title}
        </h1>

        <p className="mt-6 text-gray-700 text-sm sm:text-base leading-relaxed text-justify whitespace-pre-wrap">
          {blog.content}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default BlogOverview;
