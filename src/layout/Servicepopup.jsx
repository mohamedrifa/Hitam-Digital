import React, { useState, useMemo } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import markImage from "../assets/servicesection/contactus/digital_logo.png";
import personImage from "../assets/servicesection/contactus/desk_lady.png";
import mobilePerson from "../assets/servicesection/contactus/mobile_lady.png";

// IMAGES
const RIGHT_FLORAL =
  "https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Background%20Vector%20(1).png?updatedAt=1754639892982";
  

// DATA (Merged into "IT Solutions")
const CATEGORIES = [
  {
    title: "IT Solutions",
    items: [
      "Website Creation",
      "Website Development",
      "Mobile App Development",
      "SaaS Products",
      "Custom ERP/CRM",
      "Automation",
    ],
  },
  {
    title: "Creative Services",
    items: ["Brand Identity", "UI/UX Design", "Graphic & Motion"],
  },
  {
    title: "Digital Marketing",
    items: ["SEO/Content", "Paid Ads", "Social & AEO"],
  },
];

// turn "Digital Marketing" -> "digital-marketing"
const toSlug = (s) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const ServicePopup = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  // precompute slugs
  const categoryLinks = useMemo(
    () =>
      CATEGORIES.map((c) => ({
        title: c.title,
        to: `/services/${toSlug(c.title)}`,
      })),
    []
  );

  return (
    <section className="relative w-full h-auto md:h-[490px] flex justify-center bg-transparent py-6">
      <div className="w-[92%] md:w-3/4 xl:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr_320px] gap-6 md:gap-8 items-start">
          {/* LEFT PANEL (mobile + desktop) */}
          <div className="w-full">
            <div className="relative rounded-2xl bg-[#6A8238] overflow-hidden px-6 py-8 h-[400px] md:h-full md:min-h-[420px]">
              {/* Watermark */}
              {markImage && (
                <img
                  src={markImage}
                  alt=""
                  className="absolute pointer-events-none select-none opacity-30 right-2 top-1/2 -translate-y-1/2 w-[200px] md:w-[260px]"
                />
              )}

              {/* Text */}
              <div className="relative z-10 text-white">
                <h2 className="font-extrabold tracking-tight text-left text-[32px] leading-[36px] md:text-[34px] md:leading-[38px]">
                  Experience<br />Real Results
                </h2>
                <p className="mt-4 max-w-[280px] md:max-w-[330px] text-white/90 leading-7 text-left">
                  Partner with Hitam Digital Marketing Agency and scale your Business
                </p>
              </div>

              {/* Person (mobile) */}
              {mobilePerson && (
                <img
                  src={mobilePerson}
                  alt="Person"
                  className="absolute bottom-0 left-4 h-[200px] object-contain z-10 pointer-events-none select-none md:hidden"
                />
              )}

              {/* Person (desktop) */}
              {personImage && (
                <img
                  src={personImage}
                  alt="Person"
                  className="hidden md:block absolute bottom-0 left-4 h-[250px] object-contain z-10 pointer-events-none select-none"
                />
              )}
            </div>
          </div>

          {/* CENTER LIST — title click navigates */}
          <div className="pt-3">
            <ul className="space-y-3 md:space-y-4">
              {CATEGORIES.map((cat, i) => (
                <li key={cat.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="w-full flex items-center gap-3 text-left rounded-xl border border-black/10 bg-white/70 backdrop-blur-[6px] px-4 py-3 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-[1px] focus:outline-none focus:ring-2 focus:ring-[#6A8238]/30"
                  >
                    {/* index chip */}
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[#6A8238]/10 text-[#6A8238] text-sm font-semibold shrink-0">
                      {i + 1}
                    </span>

                    {/* Title as Link (navigates) */}
                    <Link
                      to={categoryLinks[i].to}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(categoryLinks[i].to);
                      }}
                      className="flex-1 text-[15px] md:text-base font-medium tracking-wide text-black hover:underline underline-offset-4"
                    >
                      {cat.title}
                    </Link>

                    <ArrowRight
                      size={18}
                      className={`transition-opacity ${active === i ? "opacity-100" : "opacity-60"}`}
                    />
                  </button>

                  {/* Mobile sub-items as pills */}
                  {active === i && (
                    <div className="md:hidden pt-3 pl-1 flex flex-wrap gap-2">
                      {(CATEGORIES[i].items || []).map((item) => (
                        <span
                          key={item}
                          className="inline-block text-[12px] px-3 py-1 rounded-full bg-black/5 text-gray-800"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT DETAILS + FLORAL — enhanced items UI */}
          <div className="relative min-h-[0] md:min-h-[260px]">
            <img
              src={RIGHT_FLORAL}
              alt="Floral"
              className="hidden md:block absolute -right-48 -bottom-52 w-[360px] object-contain pointer-events-none select-none"
            />

            {/* desktop items panel: pretty cards */}
            <div className="hidden md:block pt-2 pl-1 pr-2">
              <div className="grid grid-cols-1 gap-2">
                {(CATEGORIES[active]?.items || []).map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/80 backdrop-blur-[4px] px-3 py-2 shadow-sm hover:shadow transition"
                  >
                    <span className="mt-[2px] inline-block size-2 rounded-full bg-[#6A8238]" />
                    <span className="text-[13px] text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>
    </section>
  );
};

export default ServicePopup;
