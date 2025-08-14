// src/components/WhyDigitalMarketing.jsx
import React, { useEffect, useRef, useState } from "react";

function LeafIcon({ className = "h-5 w-5 shrink-0" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.94 4.06a1 1 0 0 0-1.07-.22C16.62 5.1 12.4 6.94 9.8 9.53c-3.27 3.27-3.7 7.36-2.7 10.1a1 1 0 0 0 1.28.6c2.73-1 6.82-.57 10.09-3.84 2.59-2.59 4.44-6.8 5.68-10.07a1 1 0 0 0-.21-1.06 1 1 0 0 0-1 .2c-1.32 1.14-2.92 2.24-4.58 3.04a24 24 0 0 1-3.94 1.53 23.9 23.9 0 0 1-3.19.66 1 1 0 1 0 .25 2c1.17-.15 2.29-.36 3.4-.64a26.1 26.1 0 0 0 4.32-1.68c1.3-.62 2.56-1.4 3.7-2.26-.92 2.3-2.15 4.85-3.9 6.6-2.73 2.73-6.02 2.96-8.83 3.21-.86.08-1.69.16-2.46.33-.37-1.63-.2-4.39 2.16-6.75 2.25-2.25 6-4.07 9.66-5.5a.99.99 0 0 0 .27-1.66Z" />
    </svg>
  );
}

const bulletsLeft = [
  "Save Time & Resources – From strategy to execution, we handle it all.",
  "Maximize ROI – Data-driven campaigns that convert.",
  "Target Precisely – Reach the right audience at the right time.",
  "Strong Brand Presence – Build trust across all channels.",
  "Boost Engagement – Increase interaction and loyalty.",
  "Track & Optimize – Monitor and improve performance.",
];

const bulletsRight = [
  "Custom Websites – Fast, secure, and SEO-friendly.",
  "Mobile Apps – High-performance for iOS & Android.",
  "eCommerce – Scalable, secure, and user-friendly stores.",
  "Web Apps & Portals – Automate and boost efficiency.",
  "UI/UX Design – Exceptional experiences that retain users.",
  "System Integration – Connect tools and platforms seamlessly.",
];

export default function WhyDigitalMarketing() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left side image */}
          <Reveal as="div">
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <img
                  src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Figure%20%E2%86%92%20Digital%20Marketing%20Services.png?updatedAt=1754903332926"
                  alt="Professional with laptop"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* Right side content */}
          <div>
            <Reveal as="h2" delay={60}>
              <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
                Why Your Business Should Invest in Digital Marketing & Development Solutions
              </h2>
            </Reveal>

            <Reveal as="p" delay={120}>
              <p className="mt-2 font-semibold text-emerald-700">
                Reach More Clients, Build Stronger Platforms, and Achieve Lasting Growth
              </p>
            </Reveal>

            <Reveal as="p" delay={180}>
              <p className="mt-6 text-neutral-700 leading-7">
                In today’s competitive landscape, having a strong online presence is no longer optional — it’s essential.
                At Hitam Digital, we combine innovative digital marketing strategies with powerful development solutions
                to help your business grow smarter, faster, and stronger.
              </p>
            </Reveal>

            <Reveal as="p" delay={240}>
              <p className="mt-4 text-neutral-700 leading-7">
                Whether you’re looking to attract more customers, improve your brand image, or build high-performing
                digital platforms, our integrated services are designed to deliver measurable results.
              </p>
            </Reveal>

            {/* Bullet points */}
            <div className="mt-10 grid gap-2 sm:grid-cols-2 ml-0 lg:-ml-[80%]">
              <ul className="space-y-3">
                {bulletsLeft.map((item, idx) => (
                  <Reveal as="li" key={item} delay={300 + idx * 70}>
                    <li className="flex items-start gap-3">
                      <LeafIcon className="text-emerald-600 h-5 w-5" />
                      <span className="text-neutral-800">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>

              <ul className="space-y-3">
                {bulletsRight.map((item, idx) => (
                  <Reveal as="li" key={item} delay={300 + (idx + 1) * 70}>
                    <li className="flex items-start gap-3">
                      <LeafIcon className="text-emerald-600 h-5 w-5" />
                      <span className="text-neutral-800">{item}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>

            {/* Footer note */}
            <Reveal as="p" delay={900}>
              <p className="mt-8 text-sm text-neutral-600 ml-0 lg:-ml-[105%]">
                Our mission is to equip your brand with the right tools, strategies, and platforms for
                sustainable growth in a fast-changing digital world.
              </p>
            </Reveal>

            <Reveal as="p" delay={960}>
              <p className="mt-3 text-sm text-neutral-600 ml-0 lg:-ml-[105%]">
                Partner with Hitam Digital today and experience the difference of having a team dedicated
                to your success — from the first click to long-term customer loyalty.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------
 * Reveal (scroll-in animation)
 * - Fades in + slides up when entering viewport
 * - No external libs, just IntersectionObserver
 * Props:
 *   - as: element tag to render (default 'div')
 *   - delay: ms to stagger (default 0)
 * --------------------------*/
function Reveal({ as: Tag = "div", delay = 0, children }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag
      ref={ref}
      className={`will-change-transform transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {children}
    </Tag>
  );
}
