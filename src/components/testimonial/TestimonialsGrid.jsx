// src/components/TestimonialsGrid.jsx
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop",
    name: "We Chai – Modern Tea Chain",
    badge: "“They deliver results beyond expectations!”",
    quote:
      "“With over 950+ outlets, our brand needed a digital partner who could manage scale and consistency. Hitam Digital’s SEO, social media, and design expertise helped us improve engagement, streamline brand presence, and boost our online reach. Their team is quick, reliable, and truly understands how to amplify a brand’s voice.”",
  },
  {
    avatar:
      "https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/girls.jpg?updatedAt=1752840496400",
    name: "Ramani Ventures Builders and Developers",
    badge: "“A trusted partner for our online presence”",
    quote:
      "“As a leading construction company, our online presence needed to reflect our reputation. Hitam Digital designed and optimized our responsive website, implemented SEO strategies, and improved our local search visibility. We’ve seen a noticeable increase in inquiries and client trust since partnering with them.”",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&auto=format&fit=crop",
    name: "DSR Sarees – Handcrafted Sarees Brand",
    badge: "“Creative, professional, and impactful”",
    quote:
      "“Our eCommerce journey accelerated with Hitam Digital’s help. From custom web design to targeted digital marketing campaigns, they ensured our products reached the right audience. We’ve seen a boost in sales and stronger brand engagement on social media.”",
  },
  // row 2
  {
    avatar:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Luxe Strap – Premium Watch Accessories",
    badge: "“Boosted sales and brand reach”",
    quote:
      "“Hitam Digital revamped our online store and implemented high-ROI paid ad campaigns. Our conversion rates improved significantly, and their team continuously monitors and optimizes campaigns to ensure consistent results.”",
  },
  {
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE6-KsNGUoKgyIAATW1CNPeVSHhZzS_FN0Zg&s",
    name: "Michm – Project Platform",
    badge: "“Smart solutions for a modern business”",
    quote:
      "“From initial concept to launch, Hitam Digital provided full-stack development and seamless UX design for our platform. Their attention to detail and ability to turn ideas into functional solutions made the process smooth and successful.”",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
    name: "Green Architects",
    badge: "“Reliable, efficient, and innovative”",
    quote:
      "“Hitam Digital designed our modern, responsive website and implemented local SEO strategies that brought in more project inquiries. Their combination of technical skills and creative thinking sets them apart from other agencies.”",
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
            Client Testimonials – Hear From Our Valued Partners
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
