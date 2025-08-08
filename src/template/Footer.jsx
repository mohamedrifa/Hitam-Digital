import React from "react";
import Logo from "../assets/logo.png";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const LinkItem = ({ href, children }) => (
  <Link
    to={href}
    className="text-sm text-gray-600 hover:text-gray-900 transition block py-1.5"
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, label, Icon }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noreferrer"
    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition"
  >
    <Icon size={16} />
  </a>
);

export default function Footer() {
  return (
    <footer className="   bg-white px-6 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* 4 columns on desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <img src={Logo} alt="Hitam Digital" className="h-10 w-auto" />
            <p className="mt-4 text-sm text-gray-600 leading-6 max-w-sm">
              We deliver end-to-end IT services: Digital Marketing, Web Development,
              and Mobile App Development. From strategy to execution, we focus on
              measurable outcomes.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <SocialIcon href="#" label="Facebook" Icon={Facebook} />
              <SocialIcon href="#" label="Twitter" Icon={Twitter} />
              <SocialIcon href="#" label="LinkedIn" Icon={Linkedin} />
              <SocialIcon href="#" label="Instagram" Icon={Instagram} />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Navigation</h3>
            <div className="mt-3">
            <LinkItem href="/">Home</LinkItem>
              <LinkItem href="/services">Services</LinkItem>
              <LinkItem href="/about">About</LinkItem>
              <LinkItem href="/case-studies">Case Studies</LinkItem>
              <LinkItem href="/blog">Blog</LinkItem>
              <LinkItem href="/contact">Contact</LinkItem>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <div className="mt-3">
              <LinkItem href="/privacy">Privacy Policy</LinkItem>
              <LinkItem href="/terms">Terms of Service</LinkItem>
              <LinkItem href="/copyright">Copyright</LinkItem>
              <LinkItem href="/gdpr">GDPR & Data</LinkItem>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="mt-3 space-y-3 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-0.5" />
                <span>+91 89255-39937</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-0.5" />
                <span>info@hitamdigital.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5" />
                <span>
                  5, Ragaswamy Apartment, Bhavani Nagar,
                    MGR Main Road, Ayyapakkam, Chennai,Tamil Nadu — 600077
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Hitam Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <a href="/sitemap" className="text-gray-500 hover:text-gray-900">
              Sitemap
            </a>
            <a href="/security" className="text-gray-500 hover:text-gray-900">
              Security
            </a>
            <a href="/status" className="text-gray-500 hover:text-gray-900">
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
