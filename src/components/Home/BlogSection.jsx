import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
  

const posts = [
  {
    id: 1,
    category: "Digital Marketing",
    read: "5 min read",
    title: "How a Digital Marketing Agency Can Boost Your Business",
    excerpt:
      "We are the top digital marketing agency for branding corp. We offer end-to-end SEO, PPC, and social media services...",
    image:
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    category: "Strategy",
    read: "4 min read",
    title: "The Latest Trends and Strategies in Digital Marketing",
    excerpt:
      "Working with a digital marketing agency has been a true partnership that helped us scale...",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    category: "Growth",
    read: "5 min read",
    title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
    excerpt:
      "What sets this digital marketing agency apart is their commitment to measurable results...",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
];

// variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function CompactBlogSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-snug">
              Digital Marketing & SEO Services That Grow Traffic & Revenue
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              We help businesses improve search engine rankings, drive traffic,
              and convert visitors into customers with proven strategies.
            </p>
          </div>
          <Link
            to="/blogs"
            className="inline-flex items-center justify-center rounded-full border border-green-600 px-4 py-1.5 text-sm font-medium text-green-700 hover:bg-green-600 hover:text-white transition"
          >
            See more
          </Link>
        </motion.div>

        {/* Blog cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={card}
              whileHover={{ y: -6, rotateX: 0.5, rotateY: -0.5 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="group rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md transition will-change-transform overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                    {post.category}
                  </span>
                  <span>{post.read}</span>
                </div>

                <h3 className="mt-2 text-base font-semibold text-gray-900 leading-snug">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>

              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
