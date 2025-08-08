// CaseStudySection.jsx
import React from "react";

// ⚠️ All numbers and companies below are fabricated for demo purposes.
const CASE_STUDIES = [
  {
    id: 1,
    metric: "+48%",
    label: "organic traffic in 90 days",
    company: "PulseFoods",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    metric: "+105%",
    label: "app installs after UA revamp",
    company: "SwiftFit",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    metric: "+265%",
    label: "MRR after pricing experiment",
    company: "ClearLedger",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    metric: "+557%",
    label: "IG engagement via creators",
    company: "HavenLiving",
    image:
      "https://images.unsplash.com/photo-1520975682031-a94005a23d5e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    metric: "+276",
    label: "new signups in 60 days",
    company: "NimbleDocs",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    metric: "+1.1K",
    label: "B2B leads from LinkedIn",
    company: "FreightOne",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    metric: "+558%",
    label: "email list growth",
    company: "Sunrise Skincare",
    image:
      "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    metric: "+35%",
    label: "churn reduction QoQ",
    company: "StackPilot",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 9,
    metric: "+217%",
    label: "webinar attendance",
    company: "BrightCRM",
    image:
      "https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 10,
    metric: "+546%",
    label: "retargeting ROAS",
    company: "KiteTravel",
    image:
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 11,
    metric: "+1.4K",
    label: "new product reviews",
    company: "LoopShop",
    image:
      "https://images.unsplash.com/photo-1484980859177-5ac1249fda6f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 12,
    metric: "+100K",
    label: "monthly visitors post-launch",
    company: "NovaBank",
    image:
      "https://images.unsplash.com/photo-1523958203904-cdcb402031fd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 13,
    metric: "+41%",
    label: "checkout conversion",
    company: "BentoKit",
    image:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 14,
    metric: "+17M",
    label: "ad impressions in a quarter",
    company: "OrbitTech",
    image:
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 15,
    metric: "+80%",
    label: "returning visitors",
    company: "ZenFinance",
    image:
      "https://images.unsplash.com/photo-1529336953121-4f1d09f03384?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 16,
    metric: "+30×",
    label: "seasonal Google Ads ROI",
    company: "MossOutdoors",
    image:
      "https://images.unsplash.com/photo-1515169067865-5387ec356754?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CaseStudySection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Recent Results & Case Studies
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Realistic demo metrics from startups we “worked with” — data is fictional for showcase purposes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {CASE_STUDIES.map((c) => (
            <article
              key={c.id}
              className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 group"
            >
              {/* Image */}
              <img
                src={c.image}
                alt={`${c.company} case study`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-white/90">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] md:text-xs font-medium">
                    {c.company}
                  </span>
                </div>

                <div>
                  <div className="text-white text-xl md:text-3xl font-semibold drop-shadow-sm">
                    {c.metric}
                  </div>
                  <div className="mt-0.5 text-white/90 text-[11px] md:text-sm leading-snug">
                    {c.label}
                  </div>

                  {/* CTA dot/chevron on hover */}
                  <div className="mt-2 flex items-center gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[11px] md:text-xs text-white/90 hover:text-white"
                    >
                      View details
                      <span className="inline-block">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
