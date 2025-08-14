import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FaRegHandPointRight } from "react-icons/fa6";
import Jobs from "../../utils/sample_jobs.json";

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

  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resumeLink: "",
  });

  useEffect(() => {
    // fetchJobs();
    setJobData(Jobs);
    setLoading(false);
  }, []);

  async function fetchJobs() {
    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.get(`${API_URL}/jobs/all`);
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
      const API_URL = import.meta.env.VITE_API_URL;
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


 

  if (loading) return <p className="text-center mt-10">Loading...</p>;

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
      <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="border-2 border-[#488402]/30 rounded-xl px-4 py-2 text-sm bg-gradient-to-br from-[#BBD673] to-[#D3E2AE]/50 text-black"
        >
          <option>All locations</option>
          {[...new Set(jobData.map((job) => job.location))].map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search Positions"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border-2 border-[#488402]/30 rounded-xl px-4 py-2 text-sm w-64 bg-gradient-to-br from-[#BBD673] to-[#D3E2AE]"
        />
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
             
              className="border-2 border-[#488402]/30 bg-gradient-to-r from-[#BBD673]/50 to-[#D3E2AE]/50 rounded-xl px-6 py-4 text-left text-green-900 font-semibold flex justify-between items-center shadow transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
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
          <div className="text-gray-500 font-medium text-sm py-10">
            No jobs found for your search.
          </div>
        )}
      </motion.div>

      {visibleCount < filteredJobs.length && (
        <button
          onClick={showMore}
          className="mt-6 border border-green-500 text-green-700 px-6 py-2 rounded-md text-sm hover:bg-green-100 transition"
        >
          View More
        </button>
      )}

     {showModal && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50 px-4">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-xl relative">
      {/* Close Button */}
      <button
        onClick={() => setShowModal(false)}
        className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-2xl"
        aria-label="Close"
      >
        &times;
      </button>

      <h2 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-center">
        Apply for {selectedJob?.jobTitle}
      </h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Your Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          required
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          required
        />
        <input
          type="url"
          placeholder="Resume Link (Google Drive/Dropbox)"
          value={form.resumeLink}
          onChange={(e) => setForm({ ...form, resumeLink: e.target.value })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
          required
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-gradient-to-r from-green-600 to-lime-500 text-white font-semibold hover:from-green-700 hover:to-lime-600 transition"
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
