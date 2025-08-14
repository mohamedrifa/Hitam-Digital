// src/components/ContactUs.jsx
import React, { useState } from "react";
import markImage from "../../assets/servicesection/contactus/digital_logo.png";
import personImage from "../../assets/servicesection/contactus/desk_lady.png";
import mobilePerson from "../../assets/servicesection/contactus/mobile_lady.png";

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    website: "",
    email: "",
    countryCode: "+91",
    phone: "",
    services: "",
    companySize: "",
    hearAbout: "",
    message: "",
  });

  const handleChange = (key) => (e) => setForm((s) => ({ ...s, [key]: e.target.value }));

  const validate = () => {
    const req = {
      firstName: "First Name",
      lastName: "Last Name",
      company: "Company/Organization",
      email: "Email Address",
      phone: "Phone",
      services: "Services",
      companySize: "Company Size",
    };

    const missing = Object.entries(req)
      .filter(([k]) => !String(form[k] || "").trim())
      .map(([, label]) => label);

    // simple email + phone checks
    const issues = [];
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      issues.push("Enter a valid Email Address");
    }
    if (form.phone && !/^[0-9]{7,15}$/.test(form.phone.replace(/\D/g, ""))) {
      issues.push("Enter a valid Phone (7–15 digits)");
    }

    return [...missing, ...issues];
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const problems = validate();
    if (problems.length) {
      alert("Please fix the following:\n\n- " + problems.join("\n- "));
      return;
    }
    // Submit your payload here (fetch/axios)
    alert("Thanks! Your request has been submitted.");
  };

  return (
    <div className="relative bg-white pb-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Mobile hero panel */}
      <div className="block lg:hidden w-full h-[400px]">
        <div className="relative rounded-2xl bg-[#6A8238] overflow-hidden px-[35px] py-[41px] h-full">
          <div className="absolute inset-0 pointer-events-none">
            {markImage ? (
              <img
                src={markImage}
                alt=""
                className="absolute w-[193.93px] h-[202.86px] max-w-none opacity-50 right-[9px] top-1/2 -translate-y-1/2"
              />
            ) : null}
          </div>
          <div className="w-[300px] text-white text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-left">
              Experience Real Results
            </h2>
            <p className="mt-4 max-w-[330px] text-white/90 leading-7 text-left">
              Partner with Hitam Digital Marketing Agency and scale your <br />
              Business
            </p>
          </div>
          {personImage ? (
            <img
              src={mobilePerson}
              alt="Person"
              className="absolute bottom-0 h-[285px] object-cover left-1/2 -translate-x-1/2"
            />
          ) : null}
        </div>
      </div>

      {/* Main card */}
      <div className="flex flex-col lg:flex-row bg-[#FFF7E3] rounded-[16px] overflow-hidden py-[40px] lg:py-[25px] mt-[40px]">
        {/* Desktop left panel (hidden on mobile) */}
        <div className="hidden lg:block lg:w-[342.67px] ml-[21px]">
          <div className="relative rounded-2xl bg-[#6A8238] overflow-hidden h-full min-h-[420px]">
            <div className="absolute inset-0 pointer-events-none">
              {markImage ? (
                <img
                  src={markImage}
                  alt=""
                  className="absolute w-[251px] h-[271px] max-w-none opacity-50 right-0 top-1/2 -translate-y-1/2"
                />
              ) : null}
            </div>
            <div className="w-[224px] absolute top-[122px] left-1/2 -translate-x-1/2 text-white text-center">
              <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight text-left">
                Experience Real Results
              </h2>
              <p className="mt-4 max-w-[330px] text-white/90 leading-7 text-left">
                Partner with Hitam Digital Marketing Agency and scale your Business
              </p>
            </div>
            {personImage ? (
              <img src={personImage} alt="Person" className="absolute bottom-0 h-[312px] object-cover" />
            ) : null}
          </div>
        </div>

        {/* Right: FORM */}
        <div className="flex-1 px-[24px] lg:px-[40px]">
          <form onSubmit={onSubmit} noValidate>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
              <Input placeholder="First Name*" value={form.firstName} onChange={handleChange("firstName")} />
              <Input placeholder="Last Name*" value={form.lastName} onChange={handleChange("lastName")} />

              <Input
                placeholder="Company/Organization*"
                className="lg:col-span-1"
                value={form.company}
                onChange={handleChange("company")}
              />
              <Input
                placeholder="Website"
                className="lg:col-span-1"
                value={form.website}
                onChange={handleChange("website")}
              />

              <Input placeholder="Email Address*" value={form.email} onChange={handleChange("email")} />

              <PhoneInput
                countryCode={form.countryCode}
                phone={form.phone}
                onCountryChange={handleChange("countryCode")}
                onPhoneChange={handleChange("phone")}
              />

              <Select
                placeholder="Services*"
                value={form.services}
                onChange={handleChange("services")}
                className="lg:col-span-2"
                options={[
                  { value: "digital-marketing", label: "Digital Marketing" },
                  { value: "web-dev", label: "Web Development" },
                  { value: "app-dev", label: "App Development" },
                  { value: "branding", label: "Branding" },
                ]}
              />

              <Select
                placeholder="Company Size*"
                value={form.companySize}
                onChange={handleChange("companySize")}
                className="lg:col-span-2"
                options={[
                  { value: "1-10", label: "1–10" },
                  { value: "11-50", label: "11–50" },
                  { value: "51-200", label: "51–200" },
                  { value: "200+", label: "200+" },
                ]}
              />

              <Input
                placeholder="How Did You Hear About Thrive?"
                className="lg:col-span-2"
                value={form.hearAbout}
                onChange={handleChange("hearAbout")}
              />

              <Textarea
                placeholder="Tell us about your business"
                className="lg:col-span-2"
                value={form.message}
                onChange={handleChange("message")}
              />
            </div>

            {/* CTA */}
          <div className="mt-6">
              <button
                type="submit"
                className="w-full rounded-full bg-[#0B7A00] py-[14px] text-white text-lg font-semibold tracking-wide hover:opacity-95 active:opacity-90 transition"
              >
               SEND MY FREE PROPOSAL NOW
              </button>

              <div className="text-center mt-6">
                <p className="text-[#4A4A4A]">
                  In a hurry? Call us now at{" "}
                  <a
                    href="tel:+918925539937"
                    aria-label="Call Hitam Digital at plus nine one eight nine two five five three nine nine three seven"
                    className="font-semibold underline decoration-2 underline-offset-4 text-[#5A8F2D]"
                  >
                    +91&nbsp;89255&nbsp;39937
                  </a>
                </p>
                <p className="mt-2 text-xs text-[#6B6B6B]">
                  Average response time: under 24 hours.
                </p>
                <p className="mt-3 text-xs text-[#6B6B6B]">
                  By submitting this form, you agree to receive communications from <span className="font-medium">Hitam Digital</span> via phone, email, or SMS. No spam. Opt out anytime.
                </p>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

/* ---------- UI bits ---------- */
const baseField =
  "w-full rounded-[5px] bg-white shadow-[0_1px_0_#EAEAEA_inset] ring-1 ring-[#E8E8E8] focus-within:ring-2 focus-within:ring-[#CFE3B8] transition placeholder:text-[#A9A9A9] text-[#2A2A2A]";

const Input = ({ className = "", ...props }) => (
  <input {...props} className={`${baseField} h-[55px] px-5 text-[16px] leading-[28px] ${className}`} />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea rows={4} {...props} className={`${baseField} px-5 py-4 text-[16px] h-[65px] leading-[28px] ${className}`} />
);

const Select = ({ placeholder, className = "", value, onChange, options = [] }) => (
  <div className={`relative ${className}`}>
    <select
      className={`${baseField} h-[55px] px-5 pr-12 appearance-none text-[16px] leading-[28px]`}
      value={value}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M6 9l6 6 6-6" stroke="#9A9A9A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  </div>
);

const PhoneInput = ({ countryCode, phone, onCountryChange, onPhoneChange }) => (
  <div className="flex items-stretch gap-0">
    <div className="w-28">
      <select
        className={`${baseField} h-[55px] rounded-r-none px-4 text-[16px] leading-[28px]`}
        value={countryCode}
        onChange={onCountryChange}
      >
        <option value="+91">+91</option>
        <option value="+1">+1</option>
        <option value="+44">+44</option>
      </select>
    </div>
    <input
      type="tel"
      placeholder="000-000-000"
      className={`${baseField} h-[55px] rounded-l-none px-5 text-[16px] leading-[28px] w-full`}
      value={phone}
      onChange={onPhoneChange}
    />
  </div>
);

export default ContactUs;
