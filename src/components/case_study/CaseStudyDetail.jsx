import React from "react";
import {  Link } from "react-router-dom";


export default function CaseStudyDetail({cs}) {
  

  if (!cs) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16">
        <p className="text-gray-700">Case study not found.</p>
        <Link to="/case-studies" className="text-emerald-700 underline">Back to all</Link>
      </div>
    );
  }

  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Hero-ish header (you already have a hero; keep this subtle) */}
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">{cs.company}</h1>
          <p className="mt-1 text-sm text-gray-600">{cs.label}</p>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center">
          <img
            src={cs.image}
            alt={`${cs.company} project`}
            className="rounded-xl shadow-md max-h-96 object-cover"
            loading="lazy"
          />
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-3">
            Overview of the Project
          </h2>
          <p className="text-gray-700 leading-relaxed">{cs.overview}</p>
        </div>

        {/* Results */}
        {cs.results?.length > 0 && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-4">The Results</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cs.results.map((r, i) => (
                <div key={i} className="bg-yellow-100 rounded-lg p-4 text-center shadow">
                  <div className="text-2xl font-bold text-gray-900">{r.value}</div>
                  <div className="text-sm text-gray-700">{r.label}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-gray-500 italic">
              All data on this page is fictional for demo purposes.
            </p>
          </div>
        )}

        {/* Execution */}
        {cs.execution?.length > 0 && (
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-emerald-700 mb-4">The Execution</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cs.execution.map((e, i) => (
                <div key={i} className="bg-yellow-100 rounded-lg p-4 shadow">
                  <h3 className="text-lg font-semibold text-gray-900">{e.title}</h3>
                  <p className="text-gray-700 text-sm mt-1">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="pt-4">
          <Link to="/projects" className="text-emerald-700 underline">← Back to all Projects</Link>
        </div>
      </div>
    </section>
  );
}
