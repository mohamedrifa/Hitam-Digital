import React from "react";
export default function WhyChooseHitam({
  image = "https://images.unsplash.com/photo-1598257006626-48b0c252070d?q=80&w=1600&auto=format&fit=crop",
}) {
  return (
    <section className="bg-white text-[#1B1B1B]">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-2xl leading-tight font-extrabold tracking-tight text-[#1d2b1c] sm:text-3xl md:text-4xl">
          Why Choose <span className="text-[#2B5A2E]">Hitam</span> For Your Digital Marketing Agency?
        </h2>

        {/* Top copy + image */}
        <div className="mt-8 grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Copy Block */}
          <div className="space-y-5 text-[15px] leading-7 text-[#333]">
            <p>
              We’ve been providing a wide range of website marketing services to clients across all industries.
            </p>
            <p>
              Our digital marketing services include consulting and management options for a variety of online marketing tactics, including search engine optimization (SEO), pay-per-click (PPC) ads, Amazon store optimization, copywriting, conversion rate optimization (CRO) and more. We also offer expert web design and development services for eCommerce and B2B companies.
            </p>
            <p>
              Don’t just partner with any digital marketing agency; work with the best internet marketing company you can depend on in the long-term. At Hitam, we guarantee consistent communication and complete transparency throughout our partnership.
            </p>

            {/* Subsection: Meet the team */}
            <div>
              <h3 className="text-[17px] font-extrabold tracking-tight text-[#2b2b2b]">
                Meet our team of digital marketing experts
              </h3>
              <p className="mt-2 text-[14.5px] leading-7 text-[#4a4a4a]">
                You may have a website, but if it fails to generate leads and increase conversions, then the search engines aren’t picking it up. To ensure customers find your site online, our marketing company takes your online presence to the next level — your website design, copywriting, keywords, social media presence and more. Work with the best marketing agency and get the most from your return on marketing investment.
              </p>
              <p className="mt-3 text-[14.5px] leading-7 text-[#4a4a4a]">
                Here are some reasons Hitam is the go-to digital marketing service provider for most brands:
              </p>
            </div>
          </div>

          {/* Image Card */}
          <figure className="relative overflow-hidden rounded-2xl border border-black/5 bg-[#F7F9F6] shadow-sm">
            <img
              src={image}
              alt="Hitam team"
              className="h-full w-full object-cover"
            />
            {/* subtle bottom info strip */}
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-sm text-white">
              <span className="block font-medium">The Hitam Digital Team</span>
              <span className="opacity-85">Collaboration • Strategy • Results</span>
            </figcaption>
          </figure>
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            title="We Have Proven Results"
            text="Why work with an SEO services firm that doesn’t provide you with the results you are looking for?"
            href="#"
          />
          <FeatureCard
            title="We Are Honest & Ethical"
            text="As a people‑powered digital marketing agency, Hitam believes in honesty, integrity and respect for its clients."
            href="#"
          />
          <FeatureCard
            title="We Know Digital Marketing"
            text="Working with a digital marketing company that actually knows digital marketing seems obvious, but many firms fail to deliver positive results."
            href="#"
          />
          <FeatureCard
            title="We Put Customers First"
            text="Maintaining a customer‑centric focus is a priority for many marketing agencies. However, few follow through. Hitam is different."
            href="#"
          />
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#2B5A2E] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#2B5A2E]/20 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B5A2E]"
          >
            SPEAK WITH AN INTERNET MARKETING CONSULTANT
          </a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, text, href }) {
  return (
    <div className="group rounded-xl border border-black/5 bg-[#FFFCEB] p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <h4 className="inline-block rounded-full bg-[#F5F0C8] px-3 py-1 text-[12px] font-semibold text-[#2b2b2b]">
        {title}
      </h4>
      <p className="mt-3 min-h-[88px] text-[14px] leading-6 text-[#4a4a4a]">
        {text}
      </p>
      <a href={href} className="mt-2 inline-flex items-center text-[13px] font-semibold text-[#2B5A2E]">
        Read More
        <svg className="ml-1 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M12.293 5.293a1 1 0 011.414 1.414L11.414 9H16a1 1 0 110 2h-4.586l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4z" />
        </svg>
      </a>
    </div>
  );
}
