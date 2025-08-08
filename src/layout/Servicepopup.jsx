import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// IMAGES
const LEFT_BG =
  "https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/PIC.png?updatedAt=1754639780169";
const GIRL =
  "https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/attractive-enthusiastic-armenian-young-woman-curly-hair-pointing-looking-intrigued-left-show-index-fingers-awesome-blank-space-advertisement-smirking-joyfully-introducing-product-white-background%201.png?updatedAt=1754639780425";
const RIGHT_FLORAL =
  "https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Background%20Vector%20(1).png?updatedAt=1754639892982";

// DATA
const CATEGORIES = [
  {
    title: "Web & App Development",
    items: ["Website Creation", "Website Development", "Mobile App Development"],
  },
  {
    title: "Creative Services",
    items: ["Brand Identity", "UI/UX Design", "Graphic & Motion"],
  },
  {
    title: "Software Solutions",
    items: ["SaaS Products", "Custom ERP/CRM", "Automation"],
  },
  {
    title: "Project & Business Consulting",
    items: ["IT Roadmap", "Cloud Consulting", "Process Optimization"],
  },
  {
    title: "Digital Marketing",
    items: ["SEO/Content", "Paid Ads", "Social & AEO"],
  },
];

const ServicePopup = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full h-auto md:h-[490px] flex justify-center bg-transparent py-6">
      <div className="w-[92%] md:w-3/4 xl:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-[360px_1fr_320px] gap-6 md:gap-8 items-start">
          
          {/* LEFT PANEL */}
          {/* Mobile: plain text, Desktop: original green background + girl */}
          <div className="relative">
            {/* Mobile view */}
            <div className="block md:hidden">
              <h3 className="text-black text-xl font-semibold leading-tight">
                Experience <br /> Real Results
              </h3>
              <p className="text-gray-600 text-sm mt-2 max-w-[280px] leading-relaxed">
                Partner with Hitam Digital Marketing Agency and scale your
                Business
              </p>
            </div>

            {/* Desktop view */}
            <div className="hidden md:block relative rounded-2xl overflow-hidden bg-[#4C7F3B] min-h-[440px]">
              <img
                src={LEFT_BG}
                alt="Green background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative p-7 flex flex-col h-full">
                <div className="mt-2 z-10">
                  <h3 className="text-white text-2xl font-semibold leading-tight">
                    Experience <br /> Real Results
                  </h3>
                  <p className="text-white/80 text-xs mt-3 max-w-[220px] leading-relaxed">
                    Partner with Hitam Digital Marketing Agency and scale your
                    Business
                  </p>
                </div>
                <img
                  src={GIRL}
                  alt="Girl pointing"
                  className="absolute -bottom-64 left-2 w-[300px] select-none pointer-events-none z-10"
                />
              </div>
            </div>
          </div>

          {/* CENTER LIST */}
          <div className="pt-3">
            <h4 className="md:hidden text-sm font-semibold text-black/70 mb-2">
              Explore Services
            </h4>
            <ul className="space-y-3 md:space-y-4">
              {CATEGORIES.map((cat, i) => (
                <li key={cat.title} className="group">
                  <button
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="text-[15px] md:text-base font-medium tracking-wide text-black">
                      {cat.title}
                    </span>
                    <ArrowRight
                      size={18}
                      className={`transition-opacity ${
                        active === i
                          ? "opacity-100"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                  <div className="h-[1px] bg-black/20 md:bg-black/30 mt-2 md:mt-3" />
                  {active === i && (
                    <div className="md:hidden pt-3 pl-1">
                      {(CATEGORIES[i].items || []).map((item) => (
                        <p key={item} className="text-[12.5px] text-gray-700 mb-2">
                          {item}
                        </p>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT DETAILS + FLORAL */}
          <div className="relative min-h-[0] md:min-h-[260px]">
            <img
              src={RIGHT_FLORAL}
              alt="Floral"
              className="hidden md:block absolute -right-48 -bottom-52 w-[360px] object-contain pointer-events-none select-none"
            />
            <div className="hidden md:block pt-2 pl-3">
              {(CATEGORIES[active]?.items || []).map((item) => (
                <p key={item} className="text-[12.5px] text-gray-700 mb-3">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePopup;
