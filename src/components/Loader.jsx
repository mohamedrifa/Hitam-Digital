import React from "react";

export default function SimpleLoader({
  size = 80,
  color = "transparent", // primary color
  accent = "#018002", // secondary color for gradient + text
  label = "Loading...",
  speed = 2, // seconds for a full gradient rotation
}) {
  const strokeWidth = 6;

  return (
    <div className="flex flex-col items-center justify-center bg-white gap-2">
      <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          {/* Rotating gradient applied to the stroke only */}
          <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={color} />
            <stop offset="50%" stopColor={accent} />
            <stop offset="100%" stopColor={color} />
            <animateTransform
              attributeName="gradientTransform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur={`${speed}s`}
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        <polygon
          points="50,15 90,85 10,85"
          fill="none"
          stroke="url(#triGrad)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </svg>

      <h1 className="text-2xl font-semibold tracking-wide animate-pulse" style={{ color: accent }}>
        {label}
      </h1>
    </div>
  );
}