import React from "react";
import { PlayCircle } from "lucide-react";

const teamImg = "https://ik.imagekit.io/iufkpclvp/HItam%20Newgen/how-we-work.jpg";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/33.jpg",
  "https://randomuser.me/api/portraits/men/34.jpg",
  "https://randomuser.me/api/portraits/men/35.jpg",
];

const HowWeWork = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-20">
      {/* Top Row: Title + Paragraph */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-[36px] md:text-[42px] font-extrabold leading-tight text-[#101828]">
            Provide the best service <br />
            with out <br />
            of the box ideas
          </h2>
        </div>
        <div>
          <p className="text-gray-700 text-[15px] leading-relaxed max-w-[500px]">
            we are a passionate team of digital marketing enthusiasts dedicated to helping
            businesses succeed in the digital world. With years of experience and a deep
            understanding of the ever-evolving online landscape, we stay at the forefront
            of industry trends and technologies.
          </p>
        </div>
      </div>

      {/* Bottom Row: Stat + Video */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-12">
        {/* Card */}
        <div className="bg-gradient-to-br from-[#F4EDC4] to-[#E4DC91] p-6 rounded-xl shadow-md w-full max-w-sm">
          <h3 className="text-3xl font-bold text-black">920+</h3>
          <p className="text-sm mt-2 text-[#333]">Project finish with superbly</p>
          <div className="flex items-center mt-4 space-x-[-10px]">
            {avatars.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`avatar-${i}`}
                className="w-10 h-10 rounded-full border-2 border-white"
              />
            ))}
            <span className="ml-4 text-lg font-semibold">+</span>
          </div>
        </div>

        {/* Image with Overlay */}
        <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-md">
          <img
            src={teamImg}
            alt="How we work"
            className="w-full h-full object-cover"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-3xl font-bold tracking-widest">HOW WE WORK</p>
          </div>
          {/* Play Button */}
          <div className="absolute bottom-5 right-5">
            <button className="w-16 h-16 bg-gradient-to-br from-[#e4d88a] to-[#c6b94a] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition">
              <PlayCircle className="text-white w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
