import React, { useState } from "react";

const categories = [
  { name: "All Work", count: 20 },
  { name: "UI/UX Design", count: 10 },
  { name: "Digital Marketing", count: 5 },
  { name: "Branding", count: 5 },
];

const projects = [
  {
    id: 1,
    category: "UI/UX Design",
    year: "2023",
    company: "AI Corporation",
    title: "AI Wave – AI Chatbot Mobile App",
    image:
      "https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/aiwave.png?updatedAt=1689813130602",
  },
  {
    id: 2,
    category: "UI/UX Design",
    year: "2023",
    company: "Lancer Corporation",
    title: "App Lancer – Freelance Mobile App",
    image:
      "https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/freelancer.png?updatedAt=1689813130325",
  },
  // Add more projects as needed
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("UI/UX Design");

  const filteredProjects =
    selectedCategory === "All Work"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      className="py-12 px-4 md:px-10 bg-cover bg-center rounded-[20px] shadow-lg mx-auto w-[92%] md:w-[85%] lg:w-[70%] mt-10"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Portfolio%20Container.png?updatedAt=1754572698441')",
      }}
    >
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-black mb-8 leading-snug">
        Real-world examples of how we have helped companies{" "}
        <br className="hidden sm:block" />
        achieve their marketing objectives.
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-4 sm:px-5 py-2 rounded-full border border-black font-semibold text-xs sm:text-sm ${
              selectedCategory === cat.name
                ? "bg-[#018002] text-white"
                : "bg-white/70 backdrop-blur hover:bg-yellow-200"
            }`}
          >
            {cat.name} [{cat.count}]
          </button>
        ))}
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-6 md:gap-8">
        {/* Left Circle Card (static) */}
        <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] rounded-full border-[6px] border-yellow-400 overflow-hidden flex items-center justify-center">
          <img
            src="https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/mobile_ui.png?updatedAt=1689813130599"
            alt="Highlight"
            className="w-full h-full object-cover"
          />
          <button className="absolute bottom-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-xs sm:text-sm shadow-xl hover:bg-yellow-300">
            See Details
          </button>
        </div>

        {/* Right: simple horizontal list (no animation) */}
        <div className="relative w-full md:w-[620px]">
          <div className="overflow-x-auto snap-x snap-mandatory no-scrollbar">
            <div className="flex gap-4 md:gap-8 w-max px-1">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-black rounded-[20px] border-[4px] border-yellow-400 w-[240px] sm:w-[260px] md:w-[280px] flex-shrink-0 text-white shadow-lg snap-start"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[160px] sm:h-[180px] md:h-[200px] object-cover"
                  />
                  <div className="px-4 py-3">
                    <p className="text-xs sm:text-sm text-gray-300 font-medium mb-1">
                      {project.company}. {project.year}
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Optional dots removed to keep it “no animation” */}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

/* Optional (global CSS):
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
*/
