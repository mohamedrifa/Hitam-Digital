// src/components/EditorPicks.jsx
import React, { useEffect, useRef, useState } from "react";
import posts from "../../utils/blogs.json";

function Card({ item }) {
  return (
    <article
      className="rounded-[12px] overflow-hidden 
        bg-[linear-gradient(129deg,rgba(247,197,0,0.16)_1.9%,rgba(247,197,0,0.40)_98.62%)]
        backdrop-blur-[8.9px]
        shadow-sm hover:shadow-lg hover:scale-[1.02]
        transition-all duration-300 ease-in-out
        h-full flex flex-col cursor-pointer"
    >
      <div className="h-40 sm:h-44 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col flex-1 p-4">
        <p className="text-[12px] text-neutral-700">{item.date}</p>
        <h3 className="mt-2 text-[16px] sm:text-[17px] font-semibold text-[#0F2A10]">
          {item.title}
        </h3>
        <p className="mt-1 text-[13px] text-[#0F2A10]/80 line-clamp-3">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function EditorPicks() {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);          // leftmost visible index
  const [visible, setVisible] = useState(1);      // cards visible at once (1 on mobile, 3 on ≥sm)
  const total = posts.length;

  // responsive card width: full on mobile, 1/3 on sm+
  const cardCls = "card-item basis-full sm:basis-1/3 shrink-0 px-2";

  // set visible count based on breakpoint
  useEffect(() => {
    const setV = () => setVisible(window.innerWidth >= 640 ? 3 : 1);
    setV();
    window.addEventListener("resize", setV);
    return () => window.removeEventListener("resize", setV);
  }, []);

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = ((i % total) + total) % total;
    const target = el.children[clamped];
    if (target) el.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    setIndex(clamped);
  };

  const next = () => scrollToIndex(index + visible);
  const prev = () => scrollToIndex(index - visible);

  // keep dots in sync when user swipes
  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth / visible;
    const i = Math.round(el.scrollLeft / cardWidth);
    setIndex(((i % total) + total) % total);
  };

  // auto-scroll
  useEffect(() => {
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, visible]);

  // initial position
  useEffect(() => scrollToIndex(0), []);

  return (
    <>
      <div className="relative bg-white px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto mt-10 sm:mt-16">
        <header className="mb-4 sm:mb-6 hidden sm:block">
          <h2 className="text-center text-2xl sm:text-[28px] font-extrabold tracking-tight text-[#0F2A10]">
            Editor’s Picks
          </h2>
        </header>

        <div className="relative">
          {/* Arrows (desktop) */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white transition"
          >
            ›
          </button>

          {/* Track */}
          <div className="-mx-2 overflow-hidden">
            <div
              ref={trackRef}
              onScroll={handleScroll}
              className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth scrollbar-hide"
            >
              {posts.map((p) => (
                <div key={p.id} className={`${cardCls} snap-start`}>
                  <Card item={p} />
                </div>
              ))}
            </div>

            {/* Pagination dots (mobile only) */}
            <div className="flex justify-center mt-3 sm:hidden">
              {posts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  className={`mx-1 h-2 w-2 rounded-full transition-all duration-300 ${
                    index === i ? "bg-black" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* divider */}
      <div
        className="w-full h-[1px] flex justify-center items-center mt-8"
        style={{
          background:
            "linear-gradient(129deg, rgba(247, 197, 0, 0.16) 1.9%, rgba(247, 197, 0, 0.40) 98.62%)",
          backdropFilter: "blur(8.9px)",
          WebkitBackdropFilter: "blur(8.9px)",
          flexShrink: 0,
        }}
      />
    </>
  );
}
