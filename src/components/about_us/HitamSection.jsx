import React, { useEffect, useRef, useState } from "react";

/* Icons */
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 text-white" aria-hidden="true">
    <path fill="currentColor" d="M9.55 17.3 4.8 12.55l1.4-1.4 3.35 3.35 7.25-7.25 1.4 1.4z" />
  </svg>
);
const CogIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 text-white" aria-hidden="true">
    <path fill="currentColor" d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zm8-3.5c0-.47-.05-.93-.14-1.37l2.02-1.57-2-3.46-2.41.98a7 7 0 0 0-2.36-1.37l-.36-2.56H9.25l-.36 2.56a7 7 0 0 0-2.36 1.37l-2.41-.98-2 3.46 2.02 1.57c-.09.44-.14.9-.14 1.37s.05.93.14 1.37L2.12 14.9l2 3.46 2.41-.98c.69.57 1.49 1.03 2.36 1.37l.36 2.56h4.78l.36-2.56c.87-.34 1.67-.8 2.36-1.37l2.41.98 2-3.46-2.02-1.53c.09-.46.14-.92.14-1.41z" />
  </svg>
);
const GridIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 text-white" aria-hidden="true">
    <path fill="currentColor" d="M10 3H3v7h7V3zm11 0h-7v7h7V3zM10 14H3v7h7v-7zm11 0h-7v7h7v-7z" />
  </svg>
);
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 text-white" aria-hidden="true">
    <path fill="currentColor" d="M12 7a5 5 0 1 1-5 5H5a7 7 0 1 0 7-7v2zm0 3a2 2 0 1 1-2 2H8a4 4 0 1 0 4-4v2z" />
  </svg>
);
const ChartIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 text-white" aria-hidden="true">
    <path fill="currentColor" d="M3 3h2v18H3V3zm4 10h2v8H7v-8zm4-6h2v14h-2V7zm4 4h2v10h-2V11zm4-6h2v16h-2V5z" />
  </svg>
);
const TagIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 text-white" aria-hidden="true">
    <path fill="currentColor" d="M21.41 11.58 12.42 2.59A2 2 0 0 0 11 2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 .59 1.41l8.99 8.99a2 2 0 0 0 2.83 0l7-7a2 2 0 0 0 0-2.82zM6.5 8A1.5 1.5 0 1 1 8 6.5 1.5 1.5 0 0 1 6.5 8z" />
  </svg>
);

/* Exact palette (dark header → light body) */
const PALETTE = {
  blue: { dark: "#2C6AA6", light: "#E3F2FD" },
  teal: { dark: "#1F7A8C", light: "#E0F7FA" },
  deepTeal: { dark: "#0F766E", light: "#E0F2F1" },
  lime: { dark: "#65A30D", light: "#F1F8E9" },
  green: { dark: "#166534", light: "#E8F5E9" },
  amber: { dark: "#D97706", light: "#FFF8E1" },
};

/* Updated content */
const FEATURES = [
  {
    title: "Data-Driven Marketing & Development",
    body:
      "Every choice we make is guided by data-driven insights and strategic thinking. From identifying high-converting marketing channels to optimizing website performance, we fine-tune campaigns and platforms for maximum ROI.",
    color: PALETTE.blue,
    icon: CheckIcon,
  },
  {
    title: "Industry-Leading Experts",
    body:
      "Our specialists bring years of combined experience in marketing and technology. We track trends in SEO, PPC, branding, app development, eCommerce, and UI/UX to keep your brand ahead of the competition.",
    color: PALETTE.teal,
    icon: CogIcon,
  },
  {
    title: "Custom Growth Frameworks",
    body:
      "We take a 360° approach: personalized marketing campaigns aligned with your goals and custom-built websites, apps, and tools that deliver consistent brand experiences across all touchpoints.",
    color: PALETTE.deepTeal,
    icon: GridIcon,
  },
  {
    title: "Omnichannel Presence",
    body:
      "Your customers interact with your brand across search, social, mobile apps, and online stores. We ensure visibility everywhere with targeted campaigns and connected platforms for consistency and loyalty.",
    color: PALETTE.lime,
    icon: TargetIcon,
  },
  {
    title: "Continuous Monitoring & Optimization",
    body:
      "We don’t just launch — we refine. From ad targeting to website speed and app upgrades, we track, analyze, and optimize so your marketing and technology deliver ongoing value.",
    color: PALETTE.green,
    icon: ChartIcon,
  },
  {
    title: "Transparent & Competitive Pricing",
    body:
      "Get high-quality marketing and development without hidden costs. We offer clear, competitive pricing tailored to your needs, delivering enterprise-level solutions within budget.",
    color: PALETTE.amber,
    icon: TagIcon,
  },
];

export default function HitamSection() {
  return (
    <section className="relative isolate">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal as="h2">
            <h2 className="font-semibold text-[#0f2a10] text-2xl sm:text-3xl">
              Why Choose Hitam Digital as Your Growth Partner
            </h2>
          </Reveal>
          <Reveal as="p" delay={80}>
            <p className="mt-2 text-sm sm:text-base text-emerald-700">
              Increase your profits, elevate your brand presence, and create solutions designed for tomorrow.
            </p>
          </Reveal>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ title, body, color, icon: Icon }, idx) => (
            <Reveal key={title} delay={140 + idx * 120}>
              <article
                className="rounded-xl shadow-sm overflow-hidden border border-black/5 transform transition-transform duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-md flex flex-col h-full min-h-[300px]"
                style={{
                  background: `linear-gradient(to bottom, ${color.dark} 0%, ${color.dark} 28%, ${color.light} 28%, ${color.light} 100%)`,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-2.5 px-4 py-10">
                  <span className="inline-flex items-center justify-center rounded-md p-1.5 bg-white/20">
                    <Icon />
                  </span>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                </div>

                <div className="h-px bg-white/20 mx-4" />

                {/* Body */}
                <div className="px-4 pt-6 pb-8 flex-grow flex items-start">
                  <p className="text-[13px] leading-6 text-[#233123]">{body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal as="div" delay={140 + FEATURES.length * 120}>
          <div className="mt-8 flex justify-center">
            <a
              href="/contactus"
              className="rounded-full bg-[#F8BD3C] hover:bg-[#f4ad16] text-[#0f2a10] text-xs sm:text-sm font-semibold px-6 py-3 shadow ring-1 ring-amber-900/10"
            >
              Start Growing with Hitam Digital
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Reveal animation */
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
            const id = setTimeout(() => setVisible(true), delay);
            observer.unobserve(entry.target);
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
