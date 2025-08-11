// src/components/BlogAutoRow.jsx
import React, { useEffect, useRef, useMemo, useState } from "react";

const posts = [
  {
    id: 1,
    title:
      "Why Is My Organic Traffic Dropping? How to Identify and Recover From SEO Decline",
    date: "Jul 10, 2025",
    excerpt:
      "A steady dip in organic traffic can be a silent alarm. Learn quick diagnostics and recovery actions.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 2,
    title: "From Clicks to Clients Turn Website Visitors into Sales Conversations",
    date: "Jun 22, 2025",
    excerpt:
      "Map intent to content, fix leaks in your funnel, and measure what actually moves revenue.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80&auto=format&fit=crop",
    href: "#",
  },
  {
    id: 3,
    title: "Design Systems for Speed Ship Pages Faster Without Breaking Brand",
    date: "May 30, 2025",
    excerpt:
      "A lightweight component library that keeps marketing agile and engineering sane.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80&auto=format&fit=crop",
    href: "#",
  },
];

export default function BlogAutoRow({
  items = posts,
  intervalMs = 1000, // 1 card / sec
}) {
  const viewportRef = useRef(null);
  const cardWRef = useRef(0);
  const indexRef = useRef(0);
  const [paused, setPaused] = useState(false);

  // duplicate so the loop is seamless
  const loopItems = useMemo(() => [...items, ...items], [items]);

  // keep card width updated (resizes, orientation changes)
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const setWidth = () => (cardWRef.current = el.offsetWidth);
    setWidth();

    const ro = new ResizeObserver(setWidth);
    ro.observe(el);
    window.addEventListener("orientationchange", setWidth);

    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", setWidth);
    };
  }, []);

  // auto-advance one card at a time
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let timer;
    const tick = () => {
      if (paused || prefersReduced) return;
      indexRef.current += 1;

      if (indexRef.current >= items.length) {
        indexRef.current = 0;
        el.scrollTo({ left: 0, behavior: "auto" });
      } else {
        el.scrollTo({
          left: indexRef.current * cardWRef.current,
          behavior: "smooth",
        });
      }
    };

    timer = setInterval(tick, intervalMs);

    // pause when tab is hidden to save CPU
    const onVis = () => setPaused((p) => document.hidden ? true : p);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [items.length, intervalMs, paused]);

  return (
    <div
      className="relative bg-white px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mt-10 sm:mt-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={viewportRef} className="flex overflow-x-hidden no-scrollbar">
        {loopItems.map((post, i) => (
          <article
            key={`${post.id}-${i}`}
            className="flex w-full shrink-0 flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 rounded-2xl bg-white p-1 md:p-4"
          >
            {/* Image: below on mobile, left on desktop */}
            <a
              href={post.href}
              className="order-2 md:order-1 block w-full md:w-1/2 shrink-0"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-[260px] sm:h-[300px] md:h-[340px] rounded-2xl object-cover"
              />
            </a>

            {/* Text: first on mobile, right on desktop */}
            <div className="order-1 md:order-2 flex-1 min-w-0 md:pl-6 text-left">
              <a href={post.href} className="group block">
                <h3 className="font-semibold text-[#0F2A10] leading-tight text-3xl xs:text-4xl sm:text-5xl md:text-2xl">
                  {post.title}
                </h3>
              </a>
              <time className="mt-2 block text-xs sm:text-sm text-neutral-500 text-center">
                {post.date}
              </time>
              {/* hidden on mobile, show from md up */}
              <p className="hidden md:block mt-3 text-sm text-neutral-600 md:line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
