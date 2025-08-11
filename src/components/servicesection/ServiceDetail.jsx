import React from "react";

const ServiceDetail = ({
  title = "Why Search Engine Optimization Is a Great Investment",
  subtitle = "At Hitam, we commit ourselves to honesty and personal accountability in our work. Not all SEO firms adhere to these principles and their clients often pay the price. As a provider of internet marketing and search engine optimization services to our clients, we constantly strive to achieve higher rankings, improved traffic and conversions and positive ROI for our clients’ websites while adhering to our SEO Code of Ethics.",
  content = `All business owners want more bang for their buck. All want better profit margins. SEO saves you money. Consider SEO as an employee: SEO never clocks out. SEO never calls in sick. SEO never takes a holiday. SEO works for you around the clock, even when you’re sleeping.\n
  No, SEO won’t answer the phone. But it will keep the phone ringing. SEO done right will funnel customers to your website and put them in front of your products, services and brand. We've spent years refining our SEO strategy. What we do not only works for our clients, but it also works for our website. What we do not only works for our clients but also works for our website.\n
  As your trusted digital marketing SEO agency, we live by what we sell. Since 2016, Thrive has experienced exponential growth, landing on the Inc. 5000 list among America’s fastest-growing private companies for seven consecutive years.\n
  We get the most out of our organic search results. We believe in SEO so much that we rely on it. It’s the lifeblood of our business. And let this sink in: You likely wouldn’t be here without SEO. How did you find this page? With a Google search? If so, you’re an example of SEO working for us. Now, put it to work for your business.`,
  img = "https://ik.imagekit.io/iufkpclvp/Hitam%20Digital/service/serviceDetail.png?updatedAt=1754652804934",
}) => {
  return (
    <div className="relative bg-white mb-[60px] max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Title Section */}
      <div className="text-center mt-10">
        <h1 className="text-[#0B1508] text-[32px] md:text-[40px] lg:text-4xl font-semibold leading-[36px] md:leading-[48px]">
          {title}
        </h1>
        <p className="text-gray-900 text-[14px] lg:text-sm font-semibold mt-[14px]">
          {subtitle}
        </p>
      </div>

      {/* Content Section */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2 items-start gap-2 mt-10">
        {/* Text Content */}
        <div className="relative z-10">
          <div className="text-[#404040] lg:min-w-2xl text-sm font-medium text-justify p-4">
            {content.split("\n").map((para, index) => (
              <p key={index} className="mb-4">
                {para.trim()}
              </p>
            ))}
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <button
              onClick={() => console.log("Schedule call clicked")}
              className="inline-flex items-center bg-[#018002] hover:bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-300"
            >
              Schedule Call
              <span className="ml-3 text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block relative">
          <img
            src={img}
            alt="Person using laptop"
            className="absolute top-0 right-[-50px] h-auto object-contain drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
