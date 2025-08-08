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
    <div className="max-w-[1200px] mx-auto px-4 py-10 lg:py-20">
      {/* Mobile: 1 col  |  Desktop: 2 cols (unchanged) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 items-start">
        {/* LEFT COLUMN */}
        <div className="flex flex-col items-center lg:items-start h-full">
          {/* Heading — centered on mobile, original size on desktop */}
          <h2 className="text-[30px] sm:text-[34px] md:text-[36px] lg:text-[42px] font-extrabold leading-tight text-[#101828] mb-4 lg:mb-6 text-center lg:text-left w-2xl">
            Provide the best service without <br />
            of the box ideas
          </h2>

          {/* Stats card — full width on mobile; desktop uses your sizes */}
          <div className="w-full max-w-[420px] lg:w-[360px] h-[260px] lg:h-[300px] bg-gradient-to-br from-[#F4EDC4] to-[#E4DC91] p-6 shadow-md rounded-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-4xl font-bold text-black">920+</h3>
              <p className="text-sm mt-2 text-[#333]">Project finish with superbly</p>
            </div>

            <div className="flex items-center -space-x-2">
              {avatars.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`avatar-${i}`}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
              <span className="ml-4 text-lg font-semibold">+</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col justify-between h-full mt-3 lg:mt-1">
          {/* Paragraph — full width on mobile; desktop keeps ml-40 */}
          <p className="text-gray-700 text-[13px] leading-6 text-justify lg:text-left ml-0 lg:ml-40">
            We are a passionate team of digital marketing enthusiasts dedicated to
            helping businesses succeed in the digital world. With years of experience
            and a deep understanding of the ever-evolving online landscape, we stay at
            the forefront of industry trends and technologies.
          </p>

          {/* Video — full width on mobile; desktop keeps your width/height/offset */}
          <div className="relative w-full aspect-[16/9] overflow-hidden shadow-md mt-4 rounded-2xl lg:w-[700px] lg:h-[300px] lg:aspect-auto lg:mt-0 lg:-ml-52">
            <video
              ref={vref}
              src={videoUrl}
              autoPlay
              muted={muted}
              loop
              playsInline
              className="w-full h-full object-cover"
            />

            {/* Center overlay text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <p className="text-white text-2xl sm:text-3xl lg:text-3xl font-bold tracking-widest">
                HOW WE WORK
              </p>
            </div>

            {/* Pause/Resume Button */}
            <button
              onClick={togglePlay}
              aria-label={playing ? "Pause" : "Play"}
              className="absolute bottom-4 right-4 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-[#e4d88a] to-[#c6b94a] rounded-full flex items-center justify-center shadow-xl hover:scale-105 transition"
            >
              {playing ? (
                <Pause className="text-white w-7 h-7 lg:w-8 lg:h-8" />
              ) : (
                <PlayCircle className="text-white w-7 h-7 lg:w-8 lg:h-8" />
              )}
            </button>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              aria-label={muted ? "Unmute" : "Mute"}
              className="absolute bottom-4 right-[80px] lg:right-[92px] w-10 h-10 lg:w-12 lg:h-12 bg-[#101828]/70 rounded-full flex items-center justify-center shadow hover:scale-105 transition"
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
