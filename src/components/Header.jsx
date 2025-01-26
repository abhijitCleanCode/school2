import React, { useEffect, useState } from "react";
import { school_logo } from "../assets";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getAllNotice } from "../services/api";

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
    name: "Admission",
    path: "/joinus",
  },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notices, setNotice] = useState([]);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await getAllNotice();
        setNotice(response);
        console.log("Fetched notice:", response);
      } catch (error) {
        console.error("Error fetching notice:", error);
      }
    };

    fetchNotice();
  }, []);

  return (
    <>
      <header className="bg-[#002855] w-full px-[32px] py-[8px]">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="gap-[8px] flex items-center">
            <img
              src={school_logo}
              alt="logo"
              className="w-[35px] h-[35px] md:w-[65px] md:h-[65px] object-cover"
              width={65}
              height={65}
            />
            <h1 className="text-white text-[30px] md:text-[50px] font-thin font-kanit">
              AstraGroove
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center justify-center gap-[20px] px-6 font-kanit">
            {navLinks.map((item) => (
              <Link
                to={item.path}
                key={item.name}
                className="font-kanit text-base font-medium text-white"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-yellow-500 px-4 py-2 rounded-md text-white">
              <Link to="/login">Dashboard</Link>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <FiMenu />
          </button>
        </div>

        {/* Sliding Mobile Navigation */}
        <div
          className={`z-20 fixed top-0 right-0 h-full w-full bg-[#002855] shadow-lg transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <FiX />
          </button>
          <nav className="mt-16 flex flex-col items-center gap-4 font-kanit">
            {navLinks.map((item) => (
              <a
                href={item.path}
                key={item.name}
                className="text-base font-medium text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              className="bg-yellow-500 px-4 py-2 rounded-md text-white mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Admission
            </button>
          </nav>
        </div>
      </header>

      {/* Notice Section */}
      <div className="w-full bg-[#FFB400] overflow-hidden">
        <div className="whitespace-nowrap">
          <p className="animate-marquee text-white font-medium text-[20px] py-2 inline-block">
            Important Notice: AstraGrove School will be closed for winter break
            from 10th December, 2024 to 24th December 2024.
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
