import React, { useRef, useState } from "react";
import { PlayCircle, Pause, Volume2, VolumeX } from "lucide-react";

const videoUrl =
  "https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Hitam%20Digital%20Video.mp4?updatedAt=1754649605975";

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/men/33.jpg",
  "https://randomuser.me/api/portraits/men/34.jpg",
  "https://randomuser.me/api/portraits/men/35.jpg",
];

const HowWeWork = () => {
  const vref = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = vref.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      setMuted(false);
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = vref.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.paused) v.play();
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10 lg:py-20 mt-5">
      {/* Mobile: 1 col  |  Desktop: 2 cols */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-start">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center lg:items-start h-full">
          {/* Headline */}
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] lg:text-[42px] font-extrabold leading-tight text-[#101828] mb-2 lg:mb-3 text-center lg:text-left">
            Delivering Exceptional Results with Creative, Data-Driven Solutions
          </h2>
          

          {/* Stats card */}
          <div className="group w-full max-w-[340px] sm:max-w-[400px] lg:w-[360px] h-[200px] sm:h-[240px] lg:h-[300px] bg-gradient-to-br from-[#F4EDC4] to-[#E4DC91] p-6 shadow-md rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div>
              <h3 className="text-3xl sm:text-3xl lg:text-3xl font-bold text-black transition-transform duration-300 group-hover:translate-x-[1px]">
                420+
              </h3>
              <p className="text-xs sm:text-sm mt-2 text-[#333]">
                Projects delivered across fashion, education, real estate & retail.
              </p>
              <p className="text-[11px] sm:text-xs mt-1 text-[#333]">
                🟡 Trusted by 500+ clients worldwide.
              </p>
            </div>

            <div className="flex items-center -space-x-2">
              {avatars.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`avatar-${i}`}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white object-cover transition-transform duration-300 hover:-translate-y-0.5"
                />
              ))}
              <span className="ml-4 text-base sm:text-lg font-semibold">+</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-between h-full mt-3 lg:mt-1">
          {/* Supporting paragraph */}
          <p className="text-gray-700 text-[12px] sm:text-[13px] leading-6 text-justify lg:text-left ml-0 lg:ml-1">
            Our expert team blends strategy with execution—SEO-ready sites, targeted ads, and custom builds—aligned to your goals and ROI. With ongoing optimization and clear reporting, we help you lead your market with confidence.
          </p>

          {/* Video */}
          <div className="group relative w-full aspect-[16/9] overflow-hidden shadow-md mt-4 rounded-2xl lg:w-[700px] lg:h-[300px] lg:aspect-auto lg:mt-0 lg:-ml-52 transition-all duration-300 sm:scale-100 scale-[0.97] hover:scale-100">
            <video
              ref={vref}
              src={videoUrl}
              autoPlay
              muted={muted}
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Overlay title */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-white text-xl sm:text-3xl lg:text-3xl font-bold tracking-widest transition-all duration-300 group-hover:tracking-[0.2em]">
                HOW WE WORK
              </p>
            </div>

            {/* Glow ring */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 ring-yellow-300/50 transition-all duration-300" />

            {/* Pause/Resume */}
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
              className="absolute bottom-4 right-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#e4d88a] to-[#c6b94a] rounded-full flex items-center justify-center shadow-xl transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              {playing ? (
                <Pause className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              ) : (
                <PlayCircle className="text-white w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
              )}
            </button>

            {/* Mute/Unmute */}
            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="absolute bottom-4 right-[68px] sm:right-[80px] lg:right-[92px] w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-[#101828]/70 rounded-full flex items-center justify-center shadow transition-transform duration-300 hover:scale-110 active:scale-95"
            >
              {muted ? (
                <VolumeX className="text-white w-5 h-5 lg:w-6 lg:h-6" />
              ) : (
                <Volume2 className="text-white w-5 h-5 lg:w-6 lg:h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
