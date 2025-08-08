import React from "react";
import { Link } from "react-router-dom";
import { CASE_STUDIES } from "../../utils/home";

export default function CaseStudySection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6 md:mb-8">
         <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
  Projects That We Have Done
</h2>
<p className="mt-1 text-sm text-gray-600">
  A showcase of diverse projects delivered across industries — all data and brands are fictional for demonstration purposes.
</p>
</div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {CASE_STUDIES.map((c) => (
            <Link
              to={`/projects/${c.slug}`}
              key={c.id}
              className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 group"
            >
              <img
                src={c.image}
                alt={`${c.company} projects`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between">
                <div className="flex items-center justify-between text-white/90">
                  <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-[10px] md:text-xs font-medium">{c.company}</span>
                </div>
                <div>
                  <div className="text-white text-xl md:text-3xl font-semibold drop-shadow-sm">
                    {c.metric}
                  </div>
                  <div className="mt-0.5 text-white/90 text-[11px] md:text-sm leading-snug">
                    {c.label}
                  </div>
                  <div className="mt-2 flex items-center gap-2 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition">
                    <span className="inline-flex items-center gap-1 text-[11px] md:text-xs text-white/90">
                      View overview →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
