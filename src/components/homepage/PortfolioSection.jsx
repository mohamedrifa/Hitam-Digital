import React, { useState } from 'react';

const categories = [
  { name: 'All Work', count: 20 },
  { name: 'UI/UX Design', count: 10 },
  { name: 'Digital Marketing', count: 5 },
  { name: 'Branding', count: 5 },
];

const projects = [
  {
    id: 1,
    category: 'UI/UX Design',
    year: '2023',
    company: 'AI Corporation',
    title: 'AI Wave – AI Chatbot Mobile App',
    image: 'https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/aiwave.png?updatedAt=1689813130602',
  },
  {
    id: 2,
    category: 'UI/UX Design',
    year: '2023',
    company: 'Lancer Corporation',
    title: 'App Lancer – Freelance Mobile App',
    image: 'https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/freelancer.png?updatedAt=1689813130325',
  },
  // Add more projects if needed
];

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('UI/UX Design');

  const filteredProjects =
    selectedCategory === 'All Work'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section
      className="py-12 px-4 md:px-10 bg-cover bg-center rounded-[20px] shadow-lg mx-auto w-3/4 md:w-4/5"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Portfolio%20Container.png?updatedAt=1754572698441')",
      }}
    >
      <h2 className="text-center text-2xl md:text-3xl font-bold text-black mb-8 leading-snug">
        Real-world examples of how we have helped companies <br />
        achieve their marketing objectives.
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name)}
            className={`px-5 py-2 rounded-full border border-black font-semibold text-sm transition-all duration-200 ${
              selectedCategory === cat.name
                ? 'bg-[#018002] text-white'
                : 'bg-transparent text-black hover:bg-yellow-200'
            }`}
          >
            {cat.name} [{cat.count}]
          </button>
        ))}
      </div>

      {/* Cards Layout */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 overflow-hidden">
        {/* Left Circle Card */}
        <div className="relative w-[260px] h-[260px] rounded-full border-[6px] border-yellow-400 overflow-hidden flex items-center justify-center">
          <img
            src="https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/mobile_ui.png?updatedAt=1689813130599"
            alt="Highlight"
            className="w-full h-full object-cover"
          />
          <button className="absolute bg-yellow-400 text-black font-bold px-4 py-2 rounded-full text-sm shadow-xl hover:bg-yellow-300">
            See Details
          </button>
        </div>

        {/* Right Sliding Cards */}
        <div className="relative w-full md:w-[620px] overflow-hidden">
          <div className="flex gap-6 w-max transition-transform duration-300 ease-in-out">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-black rounded-[20px] border-[4px] border-yellow-400 w-[280px] flex-shrink-0 text-white shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[200px] object-cover"
                />
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-400 font-medium mb-1">
                    {project.company}. {project.year}
                  </p>
                  <h3 className="text-base font-semibold">
                    {project.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
