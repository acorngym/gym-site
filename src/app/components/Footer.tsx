"use client";

import React from 'react';
import { FiPhone, FiMapPin, FiMail } from "react-icons/fi";
import { FaDumbbell } from "react-icons/fa";

interface FooterProps {
  setSelectedTab: (tab: number) => void;
}

const Footer: React.FC<FooterProps> = ({ setSelectedTab }) => {
  const navItems = [
    { label: 'Home', tab: 0 },
    { label: 'Who', tab: 1 },
    { label: 'What', tab: 2 },
    { label: 'Why', tab: 3 },
    { label: 'Results', tab: 4 },
    { label: 'Contact', tab: 5 },
  ];

  return (
    <footer className="bg-white border-t-2 border-gray-100 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Opening Hours Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-pink-600 mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-pink-600 after:-mb-2">
              OPENING HOURS
            </h3>
            <div className="mt-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium text-gray-800">MONDAY-FRIDAY</span>
                <span className="text-gray-700">6:00am-9:00pm</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="font-medium text-gray-800">SATURDAY-SUNDAY</span>
                <span className="text-gray-700">6:00am-1:00pm</span>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-pink-600 mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-pink-600 after:-mb-2">
              CONTACT US
            </h3>
            <div className="mt-4 space-y-4">
              <div className="flex items-start">
                <FiMapPin className="text-pink-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700">25794 Calaroga Ave, Hayward, CA 94545</p>
              </div>
              <div className="flex items-center">
                <FiMail className="text-pink-600 mr-3 flex-shrink-0" />
                <a href="mailto:acornhealthandfitness@gmail.com" className="text-gray-700 hover:text-pink-600 transition duration-300">
                  acornhealthandfitness@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FiPhone className="text-pink-600 mr-3 flex-shrink-0" />
                <a href="tel:1-510-209-4096" className="text-gray-700 hover:text-pink-600 transition duration-300">
                  1-510-209-4096
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-pink-600 mb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-pink-600 after:-mb-2">
              QUICK LINKS
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-y-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setSelectedTab(item.tab)}
                  className="text-left text-gray-700 hover:text-pink-600 transition duration-300 flex items-center"
                >
                  <span className="inline-block w-1 h-1 bg-pink-600 rounded-full mr-2"></span>
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section with Logo */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="bg-pink-600 text-white p-2 rounded-full mr-3">
                <FaDumbbell className="h-5 w-5" />
              </div>
              <span className="text-gray-800 font-bold text-lg">
                Acorn Health & Fitness
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center text-center md:text-left">
              <p className="text-gray-500 text-sm mb-2 md:mb-0 md:mr-4">
                © {new Date().getFullYear()} Acorn Health & Fitness. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                | Made By <a href="https://kedar355.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">Kedar</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;