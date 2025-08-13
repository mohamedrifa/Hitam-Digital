import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
export default function WhyChooseHitam({
  image = "https://images.unsplash.com/photo-1598257006626-48b0c252070d?q=80&w=1600&auto=format&fit=crop",
}) {
  return (
    <section className="bg-white text-[#1B1B1B]">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
        {/* Title */}
        <Reveal as="h2">
          <h2 className="text-xl leading-tight font-extrabold tracking-tight text-[#1d2b1c] sm:text-2xl md:text-3xl text-justify">
            Why Choose <span className="text-[#2B5A2E]">Hitam Digital</span> as Your Growth Partner?
          </h2>
        </Reveal>

        {/* Top copy + image */}
        <div className="mt-6 grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {/* Copy Block */}
          <Reveal as="div" delay={80}>
            <div className="space-y-4 text-[13.5px] leading-6 text-[#333] text-justify">
              <p>
                At Hitam Digital, we go beyond ordinary marketing agencies — we’re your complete digital transformation partner,
                combining innovative marketing strategies with powerful development solutions to help your brand stand out, engage
                audiences, and achieve measurable growth.
              </p>

              <h3 className="text-[15px] font-extrabold tracking-tight text-[#2b2b2b]">
                Our End-to-End Digital Marketing Solutions
              </h3>
              <p className="text-[13px] leading-6 text-[#4a4a4a] text-justify">
                We design strategies that place your business in front of the right people, at the right time, on the right
                platforms. From search engine optimization that lifts your visibility and attracts qualified traffic, to social
                media optimization that builds an active brand presence, to app store optimization that improves discoverability
                and downloads — every tactic is engineered for outcomes. Our pay-per-click campaigns deliver measurable ROI,
                while branding and creative design craft a visual identity that connects and converts.
              </p>

              <h3 className="text-[15px] font-extrabold tracking-tight text-[#2b2b2b]">
                Our Expert Development Services
              </h3>
              <p className="text-[13px] leading-6 text-[#4a4a4a] text-justify">
                We create digital platforms that are beautiful, scalable, secure, and built to perform. Whether it’s fast,
                responsive, SEO-friendly websites; seamless mobile applications for iOS and Android; fully integrated eCommerce
                stores with frictionless checkout; or robust web applications that automate and scale your operations — our
                UI/UX craftsmanship ensures every experience is engaging and intuitive.
              </p>

              <p className="text-[13px] leading-6 text-[#4a4a4a] text-justify">
                Hitam Digital delivers the strategy, technology, and execution you need to grow smarter, faster, and stronger.
              </p>
            </div>
          </Reveal>

          {/* Image Card */}
          <Reveal as="figure" delay={160}>
            <figure className="relative overflow-hidden rounded-2xl border border-black/5 bg-[#F7F9F6] shadow-sm">
              <img src={image} alt="Hitam team" className="h-full w-full object-cover" />
              {/* subtle bottom info strip */}
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-white">
                <span className="block font-medium">The Hitam Digital Team</span>
                <span className="opacity-85">Collaboration • Strategy • Results</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "We Deliver Measurable Growth",
              text:
                "Every strategy we create is designed to produce real, trackable results — whether it’s boosting online visibility, increasing conversions, or building high-performing digital platforms.",
            },
            {
              title: "We Work with Integrity",
              text:
                "We believe in transparency, honesty, and long-term partnerships. Our team ensures you’re informed at every stage, with clear communication and ethical practices in both marketing and development.",
            },
            {
              title: "We Understand Marketing & Technology",
              text:
                "From SEO and PPC campaigns to website and app development, our combined expertise means you get a partner who understands how to connect creativity with technical excellence.",
            },
            {
              title: "We Put Your Success First",
              text:
                "Your growth is our top priority. We design solutions around your goals, ensuring every marketing campaign and development project delivers maximum value and long-term impact.",
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={200 + idx * 120}>
              <FeatureCard title={item.title} text={item.text} href="#" />
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal as="div" delay={760}>
         <div className="mt-10 flex justify-center">
          <Link
            to="/contactus"
            className="inline-flex items-center justify-center rounded-full bg-[#2B5A2E] 
                      px-4 py-2 
                      sm:px-6 sm:py-3 
                      text-xs sm:text-sm font-semibold text-white 
                      shadow-md shadow-[#2B5A2E]/20 
                      transition 
                      hover:bg-green-600 focus-visible:ring-[#2B5A2E]"
          >
            SPEAK WITH MARKETING CONSULTANT
          </Link>
        </div>

        </Reveal>
      </div>
    </section>
  );
}

function FeatureCard({ title, text, href }) {
  return (
    <div className="group rounded-xl border border-black/5 bg-[#FFFCEB] p-5 shadow-sm transition will-change-transform hover:-translate-y-0.5 hover:shadow-md h-full flex flex-col">
      <h4 className="inline-block rounded-full bg-[#F5F0C8] px-3 py-1 text-[12px] font-semibold text-[#2b2b2b]">
        {title}
      </h4>
      <p className="mt-3 text-[14px] leading-6 text-[#4a4a4a] text-justify flex-grow">{text}</p>
      <a href={href} className="mt-2 inline-flex items-center text-[13px] font-semibold text-[#2B5A2E]">
        Read More
        <svg className="mr-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M7.707 14.707a1 1 0 01-1.414-1.414L8.586 11H4a1 1 0 110-2h4.586L6.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4z" />
        </svg>
      </a>
    </div>
  );
}

/** ---------------------------
 *  Reveal
 *  --------------------------*/
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
      {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
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
