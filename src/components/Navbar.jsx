import React, { useState } from "react";
import school_logo from "./images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Academics",
    path: "/academics",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
  {
    name: "Join us",
    path: "/joinus",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Notice Section */}
      <div className="w-full bg-yellow-400 overflow-hidden">
        <div className="whitespace-nowrap">
          <p className="animate-marquee text-white font-medium text-sm py-2 inline-block">
            Notice: AstraGrove School will be closed for winter break from 10th
            December, 2024 to 24th December 2024.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
