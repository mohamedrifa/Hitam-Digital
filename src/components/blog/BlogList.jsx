// src/components/BlogList.jsx
import React, { useMemo, useState } from "react";
import posts from "../../utils/blogs.json";
import { p } from "framer-motion/client";

function ListCard({ item }) {
  return (
    <article
      className="h-[164px] flex rounded-[12px] overflow-hidden border border-[rgba(0,0,0,0.15)]
                 bg-white/70 backdrop-blur-[6px] shadow-sm hover:shadow-md
                 transition-all duration-300 hover:scale-[1.01] cursor-pointer"
    >
      {/* Thumb */}
      <div className="w-36 sm:w-40 lg:w-44 xl:w-48 h-full sm:h-full flex-none overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Body */}
      <div className="flex-1 p-3 sm:p-4 bg-[linear-gradient(129deg,rgba(247,197,0,0.16)_1.9%,rgba(247,197,0,0.40)_98.62%)]">
        <p className="text-[12px] text-neutral-700">{item.date}</p>
        <h3 className="mt-1 text-[15px] sm:text-[16px] font-semibold text-[#0F2A10] leading-snug line-clamp-2">
          {item.title}
        </h3>
        <p className="mt-1 text-[12px] sm:text-[13px] text-[#0F2A10]/80 line-clamp-2">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function BlogList() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 8; // 3 columns × 3 rows

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        (p.description || "").toLowerCase().includes(term)
    );
  }, [q]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const current = Math.min(page, pageCount);
  const start = (current - 1) * pageSize;
  const shown = filtered.slice(start, start + pageSize);

  const go = (n) => setPage(Math.min(Math.max(1, n), pageCount));

  // simple page list like 1 2 3 … last
  const pagesToShow = useMemo(() => {
    if (pageCount <= 6) return Array.from({ length: pageCount }, (_, i) => i + 1);
    return [1, 2, 3, "…", pageCount];
  }, [pageCount]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
      {/* Top bar: search aligned RIGHT */}
      <div className="mb-5 flex justify-end">
        <div className="relative w-full sm:w-80 md:w-96">
          <label htmlFor="blog-search" className="sr-only">Search</label>
          <div
            className="
              flex items-center gap-2 h-10 px-3
              rounded-[12px]
              bg-[linear-gradient(129deg,rgba(247,197,0,0.16)_1.9%,rgba(247,197,0,0.40)_98.62%)]
              backdrop-blur-[8.9px]
              shadow-sm transition focus-within:ring-2 focus-within:ring-emerald-500
            "
          >
            <span className="text-[#0F2A10]/70">⌕</span>
            <input
              id="blog-search"
              type="text"
              value={q}
              onChange={(e) => { setQ(e.target.value); setPage(1); }}
              placeholder="Search"
              aria-label="Search posts"
              className="w-full bg-transparent text-sm text-[#0F2A10] placeholder-[#0F2A10]/60 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5">
        {shown.map((item) => (
          <ListCard key={item.id} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-center gap-2">
      {/* Prev */}
      {
        page > 1 && (
          <button
            onClick={() => go(page - 1)}
            disabled={page <= 1}
            aria-label="Previous page"
            className={`h-8 w-8 rounded-[10px] inline-flex items-center justify-center
                        bg-[#F5F5F5] ring-1 ring-neutral-200 hover:bg-[#ECECEC]
                        disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            ‹
          </button>
        )
      }
      {/* Pages */}
      {pagesToShow.map((n, i) =>
        n === "…" ? (
          <span
            key={`e${i}`}
            className="h-8 min-w-8 px-3 rounded-[10px] inline-flex items-center justify-center
                       bg-[#F5F5F5] ring-1 ring-neutral-200 text-neutral-600"
          >
            …
          </span>
        ) : (
          <button
            key={n}
            onClick={() => go(n)}
            aria-current={n === current ? "page" : undefined}
            className={`h-8 min-w-8 px-3 inline-flex items-center justify-center rounded-[10px] text-sm transition
              ${
                n === current
                  ? `text-[#0F2A10] font-medium
                     bg-[linear-gradient(129deg,rgba(247,197,0,0.16)_1.9%,rgba(247,197,0,0.40)_98.62%)]
                     backdrop-blur-[8.9px]`
                  : `bg-[#F5F5F5] ring-1 ring-neutral-200 hover:bg-[#ECECEC]`
              }`}
          >
            {n}
          </button>
        )
      )}

      {/* Next */}
      {
        page < pageCount && (
          <button
            onClick={() => go(page + 1)}
            disabled={page >= pageCount}
            aria-label="Next page"
            className={`h-8 w-8 rounded-[10px] inline-flex items-center justify-center
                        bg-[#F5F5F5] ring-1 ring-neutral-200 hover:bg-[#ECECEC]
                        disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            ›
          </button>
        )
      }
    </div>

    </section>
  );
}
