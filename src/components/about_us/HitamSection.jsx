import React from "react";

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
  blue:     { dark: "#2C6AA6", light: "#E3F2FD" },
  teal:     { dark: "#1F7A8C", light: "#E0F7FA" },
  deepTeal: { dark: "#0F766E", light: "#E0F2F1" },
  lime:     { dark: "#65A30D", light: "#F1F8E9" },
  green:    { dark: "#166534", light: "#E8F5E9" },
  amber:    { dark: "#D97706", light: "#FFF8E1" },
};

/* Content */
const FEATURES = [
  {
    title: "Data-Driven Digital Marketing Services",
    body:
      "We use research and real-time analytics to send the right message on the right channel. Our team audits strengths, gaps, and opportunities (SWOT) and turns metrics into clear, actionable insights.",
    color: PALETTE.blue,
    icon: CheckIcon,
  },
  {
    title: "Industry Experts",
    body:
      "A senior team with 10+ years across performance, brand, and product marketing. We track trends, build goal-oriented strategies, and execute to proven guidelines across Shopify, marketplaces, and more.",
    color: PALETTE.teal,
    icon: CogIcon,
  },
  {
    title: "Custom Digital Marketing Framework",
    body:
      "360° audit → KPIs → messaging → integrated customer journey. We design a structured framework that aligns your brand personality and optimizes every digital touchpoint.",
    color: PALETTE.deepTeal,
    icon: GridIcon,
  },
  {
    title: "Omnichannel Personalization",
    body:
      "Customers expect tailored experiences. We analyze audiences and craft personalized journeys across web, search, social, email, and ads to increase revenue and loyalty.",
    color: PALETTE.lime,
    icon: TargetIcon,
  },
  {
    title: "Campaign Monitoring & Evaluation",
    body:
      "We benchmark, monitor, and iterate. With analytics and regular reporting, we refine targeting, creatives, and budgets so every sprint moves KPIs forward.",
    color: PALETTE.green,
    icon: ChartIcon,
  },
  {
    title: "Competitive Pricing",
    body:
      "Get an expert, customer-centric team without breaking the bank. Transparent scopes, flexible plans, and white-label options available for agencies.",
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
          <h2 className="font-semibold text-[#0f2a10] text-2xl sm:text-3xl">
            Why Choose Hitam As Your Digital Marketing Agency
          </h2>
          <p className="mt-2 text-sm sm:text-base text-emerald-700">
            Boost Your Revenue Growth Rate and Achieve Online Success
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ title, body, color, icon: Icon }) => (
            <article
              key={title}
              className="rounded-xl shadow-sm overflow-hidden border border-black/5"
              style={{
                // single gradient for the whole card
                background: `linear-gradient(to bottom, ${color.dark} 0%, ${color.dark} 28%, ${color.light} 28%, ${color.light} 100%)`,
              }}
            >
              {/* Top (dark) */}
              <div className="flex items-center gap-2.5 px-4 py-3">
                <span className="inline-flex items-center justify-center rounded-md p-1.5 bg-white/20">
                  <Icon />
                </span>
                <h3 className="text-sm font-semibold text-white">{title}</h3>
              </div>

              {/* Divider (soft) */}
              <div className="h-px bg-white/20 mx-4" />

              {/* Bottom (light) */}
              <div className="px-4 py-4">
                <p className="text-[13px] leading-6 text-[#233123]">
                  {body}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="rounded-full bg-[#F8BD3C] hover:bg-[#f4ad16] text-[#0f2a10] text-xs sm:text-sm font-semibold px-6 py-3 shadow ring-1 ring-amber-900/10"
          >
            GROW MY LEADS NOW
          </a>
        </div>
      </div>
    </section>
  );
}
