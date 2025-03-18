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
    <footer className="bg-white border-t-2 border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Opening Hours Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-pink-600 mb-4">OPENING HOURS</h3>
            <p className="text-gray-700 mb-2">MONDAY-FRIDAY: 6:00am-9:00pm</p>
            <p className="text-gray-700">SATURDAY-SUNDAY: 6:00am-1:00pm</p>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-pink-600 mb-4">CONTACT US</h3>
            <div className="flex items-center mb-2">
              <FiMapPin className="text-gray-700 mr-2" />
              <p className="text-gray-700">25794 Calaroga Ave, Hayward, CA 94545</p>
            </div>
            <div className="flex items-center mb-2">
              <FiMail className="text-gray-700 mr-2" />
              <p className="text-gray-700">acornhealthandfitness@gmail.com</p>
            </div>
            <div className="flex items-center">
              <FiPhone className="text-gray-700 mr-2" />
              <p className="text-gray-700">1-510-209-4096</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-pink-600 mb-4">QUICK LINKS</h3>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setSelectedTab(item.tab)}
                  className="text-left text-gray-700 hover:text-pink-600 transition duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section with Logo */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FaDumbbell className="text-pink-600 h-5 w-5 mr-2" />
              <span className="text-gray-800 font-bold">
                Acorn Health & Fitness
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center">
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