// src/components/SeoCodeOfEthics.jsx
import React from "react";

const ServiceDetail = ({
  title = "Hitam SEO Code of Ethics",
  sub1 = "At Hitam, we commit ourselves to honesty and personal accountability in our work. Not all SEO firms adhere to these principles and their clients often pay the price. As a provider of internet marketing and search engine optimization services to our clients, we constantly strive to achieve higher rankings, improved traffic and conversions and positive ROI for our clients’ websites while adhering to our SEO Code of Ethics.",
  h2 = "Why Search Engine Optimization Is a Great Investment",
  h3 = "We Practice What We Preach To Provide Maximum ROI",
  c1 = "All business owners want more bang for their buck. All want better profit margins. SEO saves you money. Consider SEO as an employee: SEO never clocks out. SEO never calls in sick. SEO never takes a holiday. SEO works for you around the clock, even when you’re sleeping.",
  c2 = "No, SEO won’t answer the phone. But it will keep the phone ringing. SEO done right will funnel customers to your website and put them in front of your products, services and brand. We've spent years refining our SEO strategy. What we do not only works for our clients, but it also works for our website. What we do not only works for our clients but also works for our website.",
  c3 = "As your trusted digital marketing SEO agency, we live by what we sell. Since 2016, Thrive has experienced exponential growth, landing on the Inc. 5000 list among America’s fastest-growing private companies for seven consecutive years.",
  c4 = "We get the most out of our organic search results. We believe in SEO so much that we rely on it. It’s the lifeblood of our business. And let this sink in: You likely wouldn’t be here without SEO. How did you find this page? With a Google search? If so, you’re an example of SEO working for us. Now, put it to work for your business.",
  img = 'https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/service/serviceDetail.png?updatedAt=1754652804934',
}) => {
  const textClass =
    "w-full lg:w-[987px] text-[#404040] font-outfit text-[16px] font-medium leading-[30px] lg:leading-[32px]"; // increased line height

  const handleScheduleClick = () => {
    alert("Thanks! Our team will contact you to schedule a call.");
  };

  return (
    <div className="relative bg-white px-4 sm:px-6 lg:px-20 mb-[60px]">
      {/* Top title & subcopy */}
      <div className="text-center">
        <h1 className="text-[#0B1508] text-center font-outfit text-[40px] lg:text-[48px] font-semibold leading-[55px]">
          {title}
        </h1>

        <p className="text-[#404040] text-justify font-outfit text-[14px] lg:text-[16px] font-medium leading-[26px] lg:leading-[30px] mt-[14px]">
          {sub1}
        </p>
      </div>

      {/* Content grid */}
      <div className="relative mx-auto grid grid-cols-1 lg:grid-cols-2 items-center mt-[86px]">
        {/* Left copy */}
        <div className="w-full">
          <h2 className="text-[#0B1508] text-[26px] font-semibold leading-[44px] tracking-[-0.78px] text-center lg:text-left">
            {h2}
          </h2>

          <p className="text-[#018002] text-[20px] font-medium leading-[30px] self-stretch mt-[8px] text-center lg:text-left">
            {h3}
          </p>

          <div className={`${textClass} text-justify text-center lg:text-left`}>
            <p className="max-w-full lg:max-w-[850px] mt-[20px]">{c1}</p>
            <p className="max-w-full lg:max-w-[700px] mt-[20px]">{c2}</p>
            <p className="max-w-full lg:max-w-[600px] mt-[20px]">
              {c3.split("seven consecutive years")[0]}
              <span className="underline underline-offset-[3px]">
                seven consecutive years
              </span>
              {c3.split("seven consecutive years")[1]}
            </p>
            <p className="max-w-full lg:max-w-[550px] mt-[20px]">{c4}</p>
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              onClick={handleScheduleClick}
              className="inline-flex items-center gap-4 bg-[#018002] hover:bg-green-600 text-white text-md font-semibold px-10 py-3 rounded-full transition duration-300"
            >
              Schedule Call
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <img
            src={img}
            alt="Person using laptop"
            className="hidden lg:block absolute top-0 right-[-91px] h-full object-contain drop-shadow-md"
          />

          {/* <img
            src={img}
            alt="Person using laptop"
            className="hidden lg:block absolute top-0 right-[-91px] h-full object-contain drop-shadow-md transition-transform duration-500 ease-in-out hover:scale-105"
          /> */}

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
