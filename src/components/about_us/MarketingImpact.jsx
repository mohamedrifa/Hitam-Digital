import React from "react";

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
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>

    <div className={`${bg} px-3 py-2`}>
      <p className="text-center text-[12px] font-semibold leading-tight">{title}</p>
      <p className="mt-0.5 text-center text-[11px] text-neutral-700">{subtitle}</p>
    </div>

    <div className={`${bar} h-px w-full`} />

    {footer ? (
      <div className="px-3 py-2 text-center text-[12px] text-neutral-800">
        {footer}
      </div>
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
      title: "Multiple-Location Orthodontic Practice Group",
      subtitle: "Conversion Rate Optimization (CRO)",
      footer: "",
      stats: [
        { value: "+226%", label: "Top 5 Keyword Rankings" },
        { value: "+122%", label: "Monthly Leads" },
      ],
      bg: "bg-amber-100",
      bar: "bg-amber-200",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
      title: "Business Factors",
      subtitle: "SEO and Pay-Per-Click (PPC) Marketing",
      footer: "",
      stats: [
        { value: "+546%", label: "Conversion Rate" },
        { value: "+11,400%", label: "Live Chat" },
      ],
      bg: "bg-amber-100",
      bar: "bg-amber-200",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop",
      title: "Image 3D",
      subtitle: "Amazon Advertising",
      footer: "",
      stats: [
        { value: "+350.26%", label: "Sales Volume" },
        { value: "+451%", label: "Unit Sales" },
      ],
      bg: "bg-amber-100",
      bar: "bg-amber-200",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto max-w-6xl px-3 py-8 md:px-5 lg:px-6">
        {/* top split */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
          {/* left text */}
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              How Digital Marketing Services Drive{" "}
              <span className="block">Business Growth</span>
            </h2>

            <div className="mt-1">
              <Eyebrow>
                Engage Your Target Customers at the Right Time on the Right Platform
              </Eyebrow>
            </div>

            <div className="prose prose-neutral mt-4 max-w-none text-[13px] leading-6">
              <p>
                Digital marketing services provide businesses of all sizes with an
                opportunity to market their brand 24/7 at a low cost. From startups
                to medium-sized enterprises to multiple-location companies, a
                digital marketing company helps you expand your niche market reach
                to offer goods and services to your target customers, irrespective
                of time differences or location.
              </p>
              <p>
                Hiring an internet marketing agency is one of the best ways to
                reach your prospects while maintaining a robust relationship with
                your existing clients. As long as your business has a strong digital
                presence, your customers will always find you.
              </p>
              <p>
                Since 2005, our digital marketing company has been partnering with{" "}
                <span className="font-semibold text-emerald-700">hundreds of businesses</span>{" "}
                in the United States to achieve their conversion goals. Throughout
                the years, we’ve provided an array of custom digital marketing
                services to our clients and generated the following results:
              </p>
            </div>
          </div>

          {/* right hero (smaller) */}
          <div className="relative">
            <div className="rounded-xl rounded-tl-[160px]">
              <img
                src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Figure%20%E2%86%92%20Digital%20Marketing%20Services%20Drive%20Business%20Growth.png?updatedAt=1754896998003"
                alt="Smiling professional"
                className="h-auto w-[420px] md:w-[380px] lg:w-[520px] mb-6 object-contain"
              />
            </div>
          </div>
        </div>

        {/* results cards (denser) */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, idx) => (
            <ResultCard key={idx} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
