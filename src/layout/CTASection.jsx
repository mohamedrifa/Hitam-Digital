import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-8 px-4">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="rounded-2xl bg-gradient-to-r from-yellow-100 to-yellow-200 px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-md">
          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Ready to grow your business with us?
            </h2>
            <p className="mt-2 text-sm md:text-base text-gray-700 max-w-2xl">
             Partner with Hitam Digital — a full-service digital marketing and development agency trusted for delivering real growth through SEO, SMO, PPC, AEO, and tailored web/app solutions. Whether you're a startup or an enterprise, we help you drive traffic, leads, and lasting results.
            </p>
          </div>

          {/* Button */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <a
              href="/contactus"
              className="inline-flex items-center gap-2 rounded-full bg-green-700 px-5 py-2 text-white text-sm font-medium hover:bg-green-800 transition"
            >
              Let's Get Started
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
