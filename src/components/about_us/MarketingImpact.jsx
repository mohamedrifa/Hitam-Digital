// src/components/MarketingImpact.jsx
import React, { useEffect, useRef, useState } from "react";

const Eyebrow = ({ children }) => (
  <p className="text-emerald-700 font-medium text-xs sm:text-sm">{children}</p>
);

const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-base sm:text-lg font-extrabold tracking-tight">{value}</div>
    <div className="text-[11px] sm:text-xs text-neutral-600">{label}</div>
  </div>
);

const ResultCard = ({
  image,
  title,
  subtitle,
  footer,
  stats = [],
  bg = "bg-amber-100",
  bar = "bg-amber-200",
}) => (
  <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm flex flex-col">
    <div className="aspect-[16/11] w-full overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover" loading="lazy" />
    </div>

    <div className={`${bg} px-3 py-2`}>
      <p className="text-center text-[12px] font-semibold leading-tight">{title}</p>
      <p className="mt-0.5 text-center text-[11px] text-neutral-700">{subtitle}</p>
    </div>

    <div className={`${bar} h-px w-full`} />

    {footer ? (
      <div className="px-3 py-2 text-center text-[12px] text-neutral-800">{footer}</div>
    ) : null}

    <div className="grid grid-cols-2 gap-3 px-3 pb-4 pt-2">
      {stats.map((s, i) => (
        <Stat key={i} value={s.value} label={s.label} />
      ))}
    </div>
  </div>
);

export default function MarketingImpact() {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop",
      title: "E-Commerce Fashion Brand",
      subtitle: "Conversion Rate Optimization (CRO) & Website Redesign",
      stats: [
        { value: "+230%", label: "Top 5 Keyword Rankings" },
        { value: "+125%", label: "Monthly Leads" },
      ],
      footer:
        "We optimized the brand’s online store, improved user experience, and implemented targeted CRO strategies to significantly boost visibility and lead generation.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      title: "B2B SaaS Company",
      subtitle:
        "Search Engine Optimization, Targeted PPC Campaigns, and Bespoke Web Application Development",
      stats: [
        { value: "+550%", label: "Conversion Rate" },
        { value: "+11,500%", label: "Live Chat Engagement" },
      ],
      footer:
        "Our team combined precise ad targeting with an SEO overhaul and a tailored web application, resulting in record-breaking engagement and conversions.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop",
      title: "Tech & Electronics Retailer",
      subtitle: "Amazon Advertising & Mobile App Development",
      stats: [
        { value: "+355%", label: "Sales Volume" },
        { value: "+460%", label: "Unit Sales" },
      ],
      footer:
        "Through data-driven Amazon campaigns and a custom-built shopping app, we elevated product visibility, enhanced the buying experience, and drove massive growth in sales.",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-3 py-8 md:px-5 lg:px-6">
        {/* top split */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          {/* left text */}
          <div>
            <Reveal as="h2">
              <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                How Our Digital Marketing & Development Solutions Drive Business Growth
              </h2>
            </Reveal>

            <Reveal as="div" delay={80}>
              <div className="mt-1">
                <Eyebrow>
                  Engage Your Audience at the Right Time, on the Right Platform, with the Right Tools
                </Eyebrow>
              </div>
            </Reveal>

            <Reveal as="div" delay={160}>
              <div className="prose prose-neutral mt-4 max-w-none text-[13px] leading-6">
                <p>
                  At <span className="font-semibold text-emerald-700">Hitam Digital</span>, we help businesses of all sizes build a strong and lasting digital presence.
                  From startups to enterprises, our strategies connect you with the right audience, strengthen brand trust, and drive measurable results.
                </p>
                <p>
                  Our <strong>digital marketing services</strong> — including SEO, SMO, PPC, branding, and content strategy —
                  ensure your message reaches the right audience at the perfect moment, through the most effective channels.
                </p>
                <p>
                  Our <strong>development solutions</strong> — spanning custom websites, mobile applications,
                  and scalable eCommerce platforms — are built to empower your business growth.
                </p>
                <p>By combining creative marketing with powerful technology, we help you:</p>
                <ul>
                  <li>Expand your reach and engage your ideal customers globally.</li>
                  <li>Build a professional, high-performing digital platform for your brand.</li>
                  <li>Increase leads, conversions, and customer loyalty.</li>
                </ul>
                <p>
                  We don’t just aim for short-term wins — our focus is on creating sustainable growth that lasts.
                  With Hitam Digital as your partner, your brand is always ready to meet evolving market demands.
                </p>
              </div>
            </Reveal>
          </div>

          {/* right hero image */}
          <Reveal as="div" delay={120}>
            <div className="relative">
              <div className="rounded-xl rounded-tl-[160px]">
                <img
                  src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Figure%20%E2%86%92%20Digital%20Marketing%20Services%20Drive%20Business%20Growth.png?updatedAt=1754896998003"
                  alt="Smiling professional"
                  className="h-auto w-[420px] md:w-[380px] lg:w-[520px] mb-6 object-contain"
                />
              </div>
            </div>
          </Reveal>
        </div>

        {/* results cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <Reveal key={c.title} delay={200 + idx * 120}>
              <ResultCard {...c} />
            </Reveal>
          ))}
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

    // Respect reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
            // cleanup timeout if unmounted early
            el.__revealTimeoutId = id;
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (el?.__revealTimeoutId) clearTimeout(el.__revealTimeoutId);
    };
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
