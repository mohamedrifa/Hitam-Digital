import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaRegHandPointRight } from "react-icons/fa6";
import Loader from "../Loader";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const JobListings = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All locations");
  const [visibleCount, setVisibleCount] = useState(5);
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resumeLink: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    try {
      const API_URL = import.meta.env.VITE_API_URL_BLOG;
      const response = await axios.get(`${API_URL}/jobs/all?company=Hitam Digital`);
      setJobData(response.data.data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  const filteredJobs = jobData.filter((job) => {
    const matchesSearch = job.jobTitle
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesLocation =
      selectedLocation === "All locations" ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesSearch && matchesLocation;
  });

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  const showMore = () => setVisibleCount((prev) => prev + 5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = import.meta.env.VITE_API_URL_BLOG;
      const response = await axios.post(`${API_URL}/jobs/apply-job`, {
        ...form,
        jobId: selectedJob._id,
      });

      alert(response.data.message || "Application submitted successfully!");
      setShowModal(false);
      setForm({ name: "", email: "", phone: "", resumeLink: "" });
    } catch (error) {
    }
  };
  if(loading1) {
    return <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4">
      <Loader
        size={90}
        color="transparent" 
        accent="#018002"      
        speed={2}            
        label="Please Wait..."
      />
    </div>;
  }


  return (
    <div
      className="relative w-full text-center px-4 sm:px-6 lg:px-8 pt-20 bg-white bg-cover bg-center"
      style={{
        backgroundImage: `url('/Frame/Frame-Fr-Ca.png')`,
        backgroundSize: "100% 100%",
      }}
    >
      {/* Header */}
      <p className="text-sm font-medium text-gray-500">Find Jobs for You</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
        Let’s <span className="text-black"> Find Your Role at Hitam Digital</span>.
      </h2>
      <p className="text-sm text-gray-600 mb-8">
       Join a purpose-driven team shaping the future of digital marketing, AI, astrology, fintech,
education, wellness, and more.

      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-5 w-full px-4
                  justify-start items-start
                  sm:justify-center sm:items-center">
        {/* Search Bar (mobile first) */}
        <div className="relative w-full sm:w-80 md:w-96 order-1 sm:order-none">
          <label className="sr-only">Search</label>
          <div
            className="flex items-center gap-2 h-10 px-3 rounded-[12px]
                       bg-[linear-gradient(129deg,rgba(247,197,0,0.16)_1.9%,rgba(247,197,0,0.40)_98.62%)]
                       backdrop-blur-[8.9px] border border-[rgba(0,0,0,0.25)]
                       shadow-sm transition focus-within:ring-2 focus-within:ring-emerald-500"
          >
            <span aria-hidden className="text-[#0F2A10]/70">⌕</span>
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search Positions"
              className="w-full bg-transparent text-sm text-[#0F2A10] placeholder-[#0F2A10]/60 outline-none"
            />
          </div>
        </div>

        {/* Location Select (shows below search on mobile) */}
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full sm:w-auto h-10 px-3 rounded-[12px]
                     bg-[linear-gradient(129deg,rgba(247,197,0,0.16)_1.9%,rgba(247,197,0,0.40)_98.62%)]
                     backdrop-blur-[8.9px] border border-[rgba(0,0,0,0.25)]
                     shadow-sm text-sm text-[#0F2A10] outline-none
                     focus:ring-2 focus:ring-emerald-500 transition
                     order-2 sm:order-none"
        >
          <option>All locations</option>
          {[...new Set(jobData.map((job) => job.location))].map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>


      {/* Scrollable Job Listings */}
      <motion.div
        id="job-scroll-container"
        className={`max-w-3xl mx-auto space-y-3 p-3 scroll-smooth ${
          visibleCount > 5 ? " overflow-y-auto" : ""
        }`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
      >
        <style>
          {`#job-scroll-container::-webkit-scrollbar { display: none; }`}
        </style>
        {visibleJobs.length > 0 ? (
          visibleJobs.map((job, idx) => (
            <motion.div
              key={job._id}
             
              className="rounded-xl bg-[linear-gradient(129deg,rgba(247,197,0,0.16)_1.9%,rgba(247,197,0,0.40)_98.62%)] backdrop-blur-[8.9px] px-6 py-4 text-left text-green-900 font-semibold flex justify-between items-center shadow transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
            >
              <div>
                <p className="text-md">{job.jobTitle}</p>
                <p className="text-xs font-normal text-gray-800">
                  Location: {job.location}
                </p>
                <p className="text-[12px]">{job.jobDescription}</p>
              </div>

              <button className="text-sm ml-2   md:text-lg text-green-700 flex  items-center cursor-pointer"
               onClick={() => {
                setSelectedJob(job);
                setShowModal(true);
              }}

              >Apply <FaRegHandPointRight className="ml-1"/></button>
            </motion.div>
          ))
        ) : (
          loading ? (<Loader size={60} color="#f7c500" accent="#018002" label="Loading Jobs..." speed={1.5} />) :
          (<div className="text-gray-500 font-medium text-sm py-10">
            No jobs found for your search.
          </div>)
        )}
      </motion.div>

      {visibleCount < filteredJobs.length && (
        <button
          onClick={showMore}
          className="mt-6 border border-yellow-500 text-yellow-700 px-6 py-2 rounded-md text-sm hover:bg-yellow-100 transition"
        >
          View More
        </button>
      )}

     {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4">
        <div className="bg-[linear-gradient(129deg,rgba(247,197,0,0.16)_1.9%,rgba(247,197,0,0.4)_98.62%)]
                        backdrop-blur-[8.9px] border border-[rgba(0,0,0,0.25)]
                        rounded-[20px] shadow-2xl p-8 w-full max-w-xl relative">
    
          {/* Close Button */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-3 right-4 text-gray-500 hover:text-red-500 text-2xl"
            aria-label="Close"
          >
            &times;
          </button>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-6 text-transparent 
                         bg-green-900 bg-clip-text text-center">
            Apply for {selectedJob?.jobTitle}
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Full Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 border border-[rgba(0,0,0,0.25)] rounded-[12px]
                         bg-white/70 backdrop-blur-[6px] text-sm focus:outline-none
                         focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 border border-[rgba(0,0,0,0.25)] rounded-[12px]
                        bg-white/70 backdrop-blur-[6px] text-sm focus:outline-none
                        focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 border border-[rgba(0,0,0,0.25)] rounded-[12px]
                         bg-white/70 backdrop-blur-[6px] text-sm focus:outline-none
                         focus:ring-2 focus:ring-yellow-500"
              required
            />
            <input
              type="url"
              placeholder="Resume Link (Google Drive/Dropbox)"
              value={form.resumeLink}
              onChange={(e) => setForm({ ...form, resumeLink: e.target.value })}
              className="w-full px-4 py-3 border border-[rgba(0,0,0,0.25)] rounded-[12px]
                         bg-white/70 backdrop-blur-[6px] text-sm focus:outline-none
                         focus:ring-2 focus:ring-yellow-500"
              required
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center-safe bg-[#018002] hover:bg-green-600 text-white text-md font-semibold px-10 py-3 rounded-full transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>

    )}

    </div>
  );
};

export default JobListings;
