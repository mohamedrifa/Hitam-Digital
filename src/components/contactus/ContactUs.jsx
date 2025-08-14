// src/components/ContactUs.jsx
import React, { useMemo, useState } from "react";
import axios from "axios";
import Loader from "../Loader"; // <- adjust path if different
import markImage from "../../assets/servicesection/contactus/digital_logo.png";
import personImage from "../../assets/servicesection/contactus/desk_lady.png";
import mobilePerson from "../../assets/servicesection/contactus/mobile_lady.png";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

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
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'ok'|'err', msg: string }

  // country-specific phone rules (pattern strings for HTML pattern attr)
  const phoneRules = useMemo(
    () => ({
      "+91": { min: 10, max: 10, pattern: "^[6-9][0-9]{9}$", placeholder: "10-digit mobile (starts 6–9)" },
      "+1": { min: 10, max: 10, pattern: "^[0-9]{10}$", placeholder: "10-digit number" },
      "+44": { min: 10, max: 11, pattern: "^[0-9]{10,11}$", placeholder: "10–11 digits" },
      default: { min: 7, max: 15, pattern: "^[0-9]{7,15}$", placeholder: "7–15 digits" },
    }),
    []
  );

  const rule = phoneRules[form.countryCode] || phoneRules.default;

  const setField = (k, v) => setForm((s) => ({ ...s, [k]: v }));
  const handleChange = (key) => (e) => setField(key, e.target.value);

  // String acceptance for names: allow letters, spaces, ' and -, capitalize first letter
  const handleNameChange = (key) => (e) => {
    let cleaned = e.target.value.replace(/[^a-zA-Z\s'-]/g, "");
    if (cleaned.length > 0) {
      cleaned = cleaned.charAt(0).toUpperCase() + cleaned.slice(1);
    }
    setField(key, cleaned);
  };

  // Phone: digits only + enforce India 6–9 + trim to max
  const handlePhoneChange = (e) => {
    const onlyDigits = e.target.value.replace(/\D/g, "");
    let v = onlyDigits;
    if (form.countryCode === "+91" && v.length > 0 && !/^[6-9]/.test(v)) {
      v = v.replace(/^[0-5]+/, "");
    }
    setField("phone", v.slice(0, rule.max));
  };

  // When country changes, keep phone but trim to new max and apply India start rule
  const handleCountryChange = (e) => {
    const nextCode = e.target.value;
    const nextRule = phoneRules[nextCode] || phoneRules.default;
    let digits = (form.phone || "").replace(/\D/g, "");
    if (nextCode === "+91" && digits.length > 0 && !/^[6-9]/.test(digits)) {
      digits = digits.replace(/^[0-5]+/, "");
    }
    setForm((s) => ({
      ...s,
      countryCode: nextCode,
      phone: digits.slice(0, nextRule.max),
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      // Align with backend route: POST /api/contact
      const payload = {
        name: `${form.firstName} ${form.lastName}`.trim(),
        email: form.email,
        message: [
          `Company: ${form.company || "-"}`,
          `Website: ${form.website || "-"}`,
          `Phone: ${form.countryCode} ${form.phone || "-"}`,
          `Service: ${form.services || "-"}`,
          `Company Size: ${form.companySize || "-"}`,
          `Heard About: ${form.hearAbout || "-"}`,
          "",
          `Message: ${form.message || "-"}`,
        ].join("\n"),
      };

      const res = await axios.post(`${API}/contact/submit`, payload);

      setSubmitted(true);
      setStatus({ type: "ok", msg: res.data?.message || "Message sent successfully!" });
      setForm({
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
    } catch (err) {
      const msg = err.response?.data?.message || "Server Error, please try again later.";
      setStatus({ type: "err", msg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-white pb-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      {/* Optional full-screen overlay loader */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-[2px] flex items-center justify-center">
          <Loader size={90} color="transparent" accent="#f5c600" speed={2} label="Sending..." />
        </div>
      )}

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
          {mobilePerson ? ( // <-- fixed: was checking personImage
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
              <Input
                name="firstName"
                placeholder="First Name*"
                value={form.firstName}
                onChange={handleNameChange("firstName")}
                disabled={loading}
                required
              />
              <Input
                name="lastName"
                placeholder="Last Name*"
                value={form.lastName}
                onChange={handleNameChange("lastName")}
                disabled={loading}
                required
              />

              <Input
                name="company"
                placeholder="Company/Organization*"
                className="lg:col-span-1"
                value={form.company}
                onChange={handleChange("company")}
                disabled={loading}
                required
              />
              <Input
                name="website"
                placeholder="Website"
                className="lg:col-span-1"
                value={form.website}
                onChange={handleChange("website")}
                disabled={loading}
              />

              <Input
                name="email"
                placeholder="Email Address*"
                value={form.email}
                onChange={handleChange("email")}
                type="email"
                inputMode="email"
                disabled={loading}
                required
              />

              <PhoneInput
                countryCode={form.countryCode}
                phone={form.phone}
                onCountryChange={handleCountryChange}
                onPhoneChange={handlePhoneChange}
                pattern={rule.pattern}
                maxLen={rule.max}
                placeholder={rule.placeholder}
                required
                disabled={loading}
              />

              <Select
                name="services"
                placeholder="Services*"
                value={form.services}
                onChange={handleChange("services")}
                className="lg:col-span-2"
                disabled={loading}
                required
                options={[
                  { value: "digital-marketing", label: "Digital Marketing" },
                  { value: "web-dev", label: "Web Development" },
                  { value: "app-dev", label: "App Development" },
                  { value: "branding", label: "Branding" },
                ]}
              />

              <Select
                name="companySize"
                placeholder="Company Size*"
                value={form.companySize}
                onChange={handleChange("companySize")}
                className="lg:col-span-2"
                disabled={loading}
                required
                options={[
                  { value: "1-10", label: "1–10" },
                  { value: "11-50", label: "11–50" },
                  { value: "51-200", label: "51–200" },
                  { value: "200+", label: "200+" },
                ]}
              />

              <Input
                name="hearAbout"
                placeholder="How did you hear about Hitam Digital?"
                className="lg:col-span-2"
                value={form.hearAbout}
                onChange={handleChange("hearAbout")}
                disabled={loading}
              />

              <Textarea
                name="message"
                placeholder="Tell us about your business"
                className="lg:col-span-2"
                value={form.message}
                onChange={handleChange("message")}
                disabled={loading}
              />
            </div>

            {/* CTA */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading || submitted}
                className="w-full rounded-full bg-[#0B7A00] py-[14px] text-white text-lg font-semibold tracking-wide hover:opacity-95 active:opacity-90 transition disabled:opacity-60"
              >
                {submitted ? "YOUR PROPOSAL HAS BEEN SENT" : loading ? "SENDING..." : "SEND MY FREE PROPOSAL"}
              </button>

              {/* Status message */}
              <div className="text-center mt-4" aria-live="polite" role="status">
                {status && (
                  <p className={status.type === "ok" ? "text-emerald-700" : "text-red-600"}>
                    {status.msg}
                  </p>
                )}
              </div>

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
                <p className="mt-2 text-xs text-[#6B6B6B]">Average response time: under 24 hours.</p>
                <p className="mt-3 text-xs text-[#6B6B6B]">
                  By submitting this form, you agree to receive communications from{" "}
                  <span className="font-medium">Hitam Digital</span> via phone, email, or SMS. No spam. Opt out anytime.
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

const Input = ({ className = "", disabled, ...props }) => (
  <input
    {...props}
    disabled={disabled}
    className={`${baseField} h-[55px] px-5 text-[16px] leading-[28px] ${disabled ? "opacity-60" : ""} ${className}`}
  />
);

const Textarea = ({ className = "", disabled, ...props }) => (
  <textarea
    rows={4}
    {...props}
    disabled={disabled}
    className={`${baseField} px-5 py-4 text-[16px] h-[65px] leading-[28px] ${disabled ? "opacity-60" : ""} ${className}`}
  />
);

const Select = ({ placeholder, className = "", value, onChange, options = [], disabled, ...props }) => (
  <div className={`relative ${className}`}>
    <select
      className={`${baseField} h-[55px] px-5 pr-12 appearance-none text-[16px] leading-[28px] ${disabled ? "opacity-60" : ""}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
      {...props}
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

const PhoneInput = ({ countryCode, phone, onCountryChange, onPhoneChange, pattern, maxLen, placeholder, required, disabled }) => (
  <div className="flex items-stretch gap-0">
    <div className="w-28 relative">
      <select
        className={`${baseField} h-[55px] rounded-r-none pl-4 pr-8 text-[16px] leading-[28px] appearance-none ${disabled ? "opacity-60" : ""}`}
        style={{ WebkitAppearance: "none", MozAppearance: "none", appearance: "none" }}
        value={countryCode}
        onChange={onCountryChange}
        disabled={disabled}
        required
      >
        <option value="+91">+91</option>
        <option value="+1">+1</option>
        <option value="+44">+44</option>
      </select>

      {/* Custom arrow */}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </span>
    </div>

    <input
      type="tel"
      placeholder={placeholder || "000-000-000"}
      className={`${baseField} h-[55px] rounded-l-none px-5 text-[16px] leading-[28px] w-full ${disabled ? "opacity-60" : ""}`}
      value={phone}
      onChange={onPhoneChange}
      inputMode="numeric"
      pattern={pattern}
      maxLength={maxLen}
      required={required}
      disabled={disabled}
    />
  </div>
);

export default ContactUs;
