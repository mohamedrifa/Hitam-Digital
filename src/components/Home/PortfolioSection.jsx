import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import data from "../../utils/portfolioData.json";

export default function PortfolioSection() {
  
  const [selectedCategory, setSelectedCategory] = useState("Web Design");
  const categories = useMemo(() => {
   
    const counts = data.projects.reduce((acc, p) => {
      acc[p.category] = (acc[p.category] || 0) + 1;
      return acc;
    }, {});
    return data.filters.map((name) => ({
      name,
      count:
        name === "All Work"
          ? data.projects.length
          : (counts[name] || 0)
    }));
  }, []);

  const projects = data.projects;

  const filteredProjects =
    selectedCategory === "All Work"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const circleSrc =
    data.circleImages[selectedCategory] || data.circleImages["All Work"];

  return (
    <section
      className="py-12 px-4 md:px-10 bg-cover bg-center rounded-[20px] shadow-lg mx-auto w-[92%] md:w-[85%] lg:w-[70%] mt-10"
      style={{ backgroundImage: `url('${data.backgroundImage}')` }}
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
        {/* Left Circle Card (dynamic) */}
        <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] rounded-full border-[6px] border-yellow-400 overflow-hidden flex items-center justify-center">
          <img
            src={circleSrc}
            alt={`${selectedCategory} Highlight`}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <Link
  to="/projects"
  className="absolute bottom-4 bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-xs sm:text-sm shadow-xl hover:bg-yellow-300"
>
  See Details
</Link>
        </div>

        {/* Right: horizontal project list */}
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

          
        </div>
      </div>
    </section>
  );
}
