// src/components/TestimonialsGrid.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    name: "Marci Wiersma",
    role: "Broker – Abbot Realty Real Estate",
    badge: "“They do everything they say… no BS”",
    quote:
      "Hitam is much-needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do. No BS.",
  },
  {
    avatar:
      "https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/girls.jpg?updatedAt=1752840496400",
    name: "Whitney Wells Lewis",
    role: "Practice Manager – PARC Urology",
    badge: "“These guys are incredible!”",
    quote:
      "These guys are incredible. They’ve helped us to grow our business and have the biggest problem we seem to come across is having too much business – which is the ideal problem to have. We’re right where we wanted to be and Hitam made that possible. Thanks guys!",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop",
    name: "Chad Montgomery",
    role: "CEO – Accurate Lock and Line",
    badge: "“Unrivaled customer support”",
    quote:
      "Working with Hitam has been the most pleasant experience! Their dedication and passion for what they do are exemplified by their unrivaled customer support and attentiveness to the specific needs of our business. We look forward to a long-lasting and prosperous relationship!",
  },
  // row 2
  {
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    name: "Marci Wiersma",
    role: "Broker – Abbot Realty Real Estate",
    badge: "“They do everything they say… no BS”",
    quote:
      "Hitam is much-needed blessing and exceeded our expectations in every way. They are honest, straightforward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do. No BS.",
  },
  {
    avatar:
      "https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/girls.jpg?updatedAt=1752840496400",
    name: "Whitney Wells Lewis",
    role: "Practice Manager – PARC Urology",
    badge: "“These guys are incredible!”",
    quote:
      "These guys are incredible. They’ve helped us to grow our business and have the biggest problem we seem to come across is having too much business – which is the ideal problem to have. We’re right where we wanted to be and Hitam made that possible. Thanks guys!",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop",
    name: "Chad Montgomery",
    role: "CEO – Accurate Lock and Line",
    badge: "“Unrivaled customer support”",
    quote:
      "Working with Hitam has been the most pleasant experience! Their dedication and passion for what they do are exemplified by their unrivaled customer support and attentiveness to the specific needs of our business. We look forward to a long-lasting and prosperous relationship!",
  },
];

// animation presets
const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const gridContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const card = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const TestimonialsGrid = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold leading-tight">
            Looking for Quality, Accuracy and Consistency?
          </h2>
          <p className="mt-2 text-[13px] text-[#6f6f6f]">
            We Pay Attention to the Tiniest Details to Provide You With Reliable Solutions
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridContainer}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              variants={card}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="text-center max-w-[460px] mx-auto"
            >
              {/* Avatar */}
              <motion.img
                src={t.avatar}
                alt={t.name}
                className="mx-auto h-16 w-16 rounded-full object-cover ring-2 ring-[#e6e6e6]"
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              />

              {/* Name + role */}
              <h3 className="mt-3 text-[14px] font-semibold text-[#2b2b2b]">
                {t.name}
              </h3>
              <p className="mt-0.5 text-[12px] text-[#7a7a7a]">{t.role}</p>

              {/* Yellow badge */}
              <motion.div
                initial={{ x: -14, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="mt-3 inline-block bg-[#FFD72F] px-3 py-1 rounded-sm"
              >
                <span className="text-[12.5px] font-semibold text-[#1e1e1e]">
                  {t.badge}
                </span>
              </motion.div>

              {/* Quote */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
                className="mt-3 text-[13px] leading-6 text-[#444]"
              >
                “{t.quote}”
              </motion.p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;
