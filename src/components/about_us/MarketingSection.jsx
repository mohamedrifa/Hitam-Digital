// src/components/WhyDigitalMarketing.jsx
import React from "react";

function LeafIcon({ className = "h-5 w-5 shrink-0" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.94 4.06a1 1 0 0 0-1.07-.22C16.62 5.1 12.4 6.94 9.8 9.53c-3.27 3.27-3.7 7.36-2.7 10.1a1 1 0 0 0 1.28.6c2.73-1 6.82-.57 10.09-3.84 2.59-2.59 4.44-6.8 5.68-10.07a1 1 0 0 0-.21-1.06 1 1 0 0 0-1 .2c-1.32 1.14-2.92 2.24-4.58 3.04a24 24 0 0 1-3.94 1.53 23.9 23.9 0 0 1-3.19.66 1 1 0 1 0 .25 2c1.17-.15 2.29-.36 3.4-.64a26.1 26.1 0 0 0 4.32-1.68c1.3-.62 2.56-1.4 3.7-2.26-.92 2.3-2.15 4.85-3.9 6.6-2.73 2.73-6.02 2.96-8.83 3.21-.86.08-1.69.16-2.46.33-.37-1.63-.2-4.39 2.16-6.75 2.25-2.25 6-4.07 9.66-5.5a.99.99 0 0 0 .27-1.66Z" />
    </svg>
  );
}

const bulletsLeft = [
  "Save time, money and resources",
  "Acquire huge ROI",
  "Track your campaign results",
  "Adjust your strategies based on analytics and data",
  "Leverage precise audience targeting",
];

const bulletsRight = [
  "Build your brand reputation across online channels",
  "Maximize various customer touchpoints",
  "Promote greater consumer engagement",
  "Drive profitable long-term growth",
  "Improve your conversion rates",
];

export default function WhyDigitalMarketing() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          {/* Left side image */}
          <div className="relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/Figure%20%E2%86%92%20Digital%20Marketing%20Services.png?updatedAt=1754903332926" // Replace with your image URL
                alt="Professional with laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side content */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
              Why Your Business Should Be Using Digital Marketing Services
            </h2>
            <p className="mt-2 font-semibold text-emerald-700">
              Engage More Clients and Rank High On Search Results
            </p>

            <p className="mt-6 text-neutral-700 leading-7">
              The online marketing industry is growing at an unprecedented rate.
              According to eMarketer, businesses in the U.S. spend more than
              $110 billion on digital advertising. With more companies investing
              their time and resources in online marketing, relying on your old
              advertising tactics is not enough to win over customers.
            </p>

            <p className="mt-4 text-neutral-700 leading-7">
              Increase your sales volume and build a robust digital foundation
              with value-driven internet marketing services. Digital marketing
              helps you:
            </p>

            {/* Bullet points */}
         <div className="mt-10  grid gap-2 sm:grid-cols-2 -ml-[80%]">
            <ul className="space-y-3">
                {bulletsLeft.map((item) => (
                <li key={item} className="flex items-start gap-3">
                    <LeafIcon className="text-emerald-600 h-5 w-5" />
                    <span className="text-neutral-800">{item}</span>
                </li>
                ))}
            </ul>

            <ul className="space-y-3">
                {bulletsRight.map((item) => (
                <li key={item} className="flex items-start gap-3">
                    <LeafIcon className="text-emerald-600 h-5 w-5" />
                    <span className="text-neutral-800">{item}</span>
                </li>
                ))}
            </ul>
        </div>

 {/* Footer note */}
            <p className="mt-8 text-sm text-neutral-600 -ml-[105%]">
              A study presented by BrightTALK shows that 42 percent of marketing
              professionals find the lack of quality data their biggest barrier
              to lead generation. With the help of a trusted internet marketing
              company, you can gain a holistic view of your customer journey and
              competition.
            </p>

            <p className="mt-3 text-sm text-neutral-600 -ml-[105%]">
              Don’t waste your investment in marketing techniques that do not
              deliver measurable results. Partner with Thrive Internet Marketing
              Agency today and establish your market dominance with our targeted
              digital marketing services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
