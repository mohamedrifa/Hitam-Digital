import React from "react";
import { motion } from "framer-motion";

const LEFT_IMG =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop";
const RIGHT_IMG =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.08 },
  }),
};

const cardHover = { scale: 1.02, translateY: -4 };

const GrowthResults = () => {
  return (
    <section className="bg-white text-[#1c1c1c]">
      {/* Top copy */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-5xl px-5 md:px-8 pt-12 md:pt-16"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-[34px] font-semibold text-center leading-tight"
        >
          Client Success Stories in Digital Marketing & Development
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={1}
          className="mt-4 text-justify md:text-center text-sm md:text-[13.5px] leading-relaxed text-[#6b6b6b]"
        >
          Client Success Stories – Digital Marketing & Development Excellence
        </motion.p>


        <motion.p
          variants={fadeUp}
          custom={2}
          className="mt-5 text-justify md:text-center text-[12.5px] md:text-[13px] leading-relaxed text-[#6b6b6b]"
        >
          At Hitam Digital, we don’t just deliver services — we deliver measurable results that transform businesses. Our expertise spans across high-impact digital marketing and cutting-edge development solutions, helping brands grow, scale, and lead their industries.
        </motion.p>

        <motion.p
          variants={fadeUp}
          custom={3}
          className="mt-2 text-justify md:text-center text-[12.5px] md:text-[13px] leading-relaxed text-[#6b6b6b]"
        >
          From SEO and PPC campaigns that drive qualified traffic, to custom websites and applications that convert visitors into loyal customers, our work is powered by data, creativity, and innovation.
        </motion.p>
      </motion.div>

      {/* Two result cards */}
      <div className="mx-auto max-w-5xl px-5 md:px-8 pb-12 md:pb-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* LEFT CARD */}
          <motion.article
            variants={fadeUp}
            whileHover={cardHover}
            className="border border-[#e8e8e8] rounded-md overflow-hidden shadow-sm bg-white"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-[#f4f4f4]">
              <motion.img
                src={LEFT_IMG}
                alt="Analytics screen"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            {/* Yellow ribbon slides in */}
            <motion.div
              initial={{ x: "-8%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#FFD72F] px-4 py-3"
            >
              <p className="text-sm md:text-[14px] font-semibold text-[#2b2b2b] text-center">
                “Why Businesses Choose Hitam Digital”
              </p>
            </motion.div>

            <div className="px-5 md:px-6 pt-6 pb-4">
              <div className="grid grid-cols-2 gap-4">
                {/* stat counters pop-in */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="text-center"
                >
                  <div className="text-[28px] sm:text-[32px] font-extrabold text-[#00A83A]">
                    +250%
                  </div>
                  <div className="mt-1 text-[11.5px] uppercase tracking-wide text-[#6b6b6b]">
                    Organic Traffic
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="text-center"
                >
                  <div className="text-[28px] sm:text-[32px] font-extrabold text-[#00A83A]">
                    +200%
                  </div>
                  <div className="mt-1 text-[11.5px] uppercase tracking-wide text-[#6b6b6b]">
                    Online Leads
                  </div>
                </motion.div>
              </div>

              <p className="mt-5 text-[12.5px] leading-relaxed text-[#5a5a5a]">
                •	Proven Digital Marketing Success – Delivered up to +250% organic traffic growth and +200% increase in online leads through targeted SEO, PPC, and social media campaigns.<br/>
                •	High-Impact Development – Our WordPress, eCommerce, and custom-built solutions have achieved up to +200% higher conversion rates across industries.<br/>
                •	Complete Growth Solutions – We blend strategy, creative design, and cutting-edge technology to produce sustainable business results.
              </p>
            </div>
          </motion.article>

          {/* RIGHT CARD */}
          <motion.article
            variants={fadeUp}
            custom={1}
            whileHover={cardHover}
            className="border border-[#e8e8e8] rounded-md overflow-hidden shadow-sm bg-white"
          >
            <div className="aspect-[16/10] w-full overflow-hidden bg-black">
              <motion.img
                src={RIGHT_IMG}
                alt="Team reviewing dashboards at night"
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>

            <motion.div
              initial={{ x: "8%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-[#FFD72F] px-4 py-3"
            >
              <p className="text-sm md:text-[14px] font-semibold text-[#2b2b2b] text-center">
                “Our Impact in Numbers”
              </p>
            </motion.div>

            <div className="px-5 md:px-6 pt-6 pb-4">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45 }}
                  className="text-center"
                >
                  <div className="text-[28px] sm:text-[32px] font-extrabold text-[#00A83A]">
                    +700%
                  </div>
                  <div className="mt-1 text-[11.5px] uppercase tracking-wide text-[#6b6b6b]">
                    Online Leads
                  </div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.08 }}
                  className="text-center"
                >
                  <div className="text-[28px] sm:text-[32px] font-extrabold text-[#00A83A]">
                    +200%
                  </div>
                  <div className="mt-1 text-[11.5px] uppercase tracking-wide text-[#6b6b6b]">
                    Conversion Rate
                  </div>
                </motion.div>
              </div>

              <p className="mt-5 text-[12.5px] leading-relaxed text-[#5a5a5a]">
                •	Over 700 %conversions driven for SEO clients.<br/>
                •	200% in eCommerce revenue generated for our partners.<br/>
                •	25 + websites and applications successfully launched for brands worldwide.<br/>
              </p>
            </div>
          </motion.article>
        </motion.div>


        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <motion.a
            href="#"
            className="inline-flex items-center bg-[#018002] hover:bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            WORK WITH A TRUSTED MARKETING AGENCY
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthResults;
