import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import { school_logo } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-[#002855] text-white py-20 mt-20 px-20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Logo Section */}
        <div>
          <h1 className="text-2xl font-bold flex items-center">
            <img
              src={school_logo}
              alt="AstraGrove Logo"
              className="w-8 h-8 mr-2"
            />
            AstraGrove
          </h1>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Academic
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="mb-2">
            <span className="font-bold">Phone:</span> +91 99570 52223
          </p>
          <p>
            <span className="font-bold">Email:</span>{" "}
            <a
              href="mailto:astragroveinfo@gmail.com"
              className="hover:text-yellow-300"
            >
              astragroveinfo@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="mx-auto mt-10">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-300">
              <FaYoutube size={24} color />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center text-sm border-t border-blue-800 pt-6">
        <p>Developed and Designed By Sudama Solutions +91 99570 52223</p>
        <p className="mt-2">© 2024 AstraGrove. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
