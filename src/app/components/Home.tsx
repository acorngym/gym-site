"use client";

import React, { useState } from "react";
import { FiMenu, FiPhone, FiX } from "react-icons/fi";
import { FaDumbbell } from "react-icons/fa";
import About from "./Who";
import Services from "./Services";
import Footer1 from "./Footer";
import Why from "./Why";
import Results from "./Results";
import { ExampleForm } from "./ContactForm";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', tab: 0 },
    { label: 'Who', tab: 1 },
    { label: 'What', tab: 2 },
    { label: 'Why', tab: 3 },
    { label: 'Results', tab: 4 },
    { label: 'Contact', tab: 5 },
  ];

  const transformationCards = [
    { title: "Amazing Change", id: 1 },
    { title: "Healthier & Happier", id: 2 },
    { title: "Strong & Confident", id: 3 },
  ];

  const renderContent = () => {
    switch (selectedTab) {
      case 0:
        return (
          <>
            {/* Hero Section */}
            <div className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed text-white"
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('./background1.png')" }}>
              <div className="max-w-4xl mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight animate-fade-in">
                  Acorn Health & Fitness 
                </h1>
                <p className="text-xl md:text-2xl mb-8 opacity-90">
                  Health, Fitness, Strength & Balance
                </p>
                <a href="tel:15102094096" 
                  className="inline-flex items-center px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                  <FiPhone className="mr-2" />
                  Call Us: 1-510-209-4096
                </a>
              </div>
            </div>

            {/* Who We Are Section */}
            <div className="py-16 px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
                  Who We Are
                </h2>
                <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
                  We are dedicated to helping you achieve your health and fitness goals. We believe in nurturing every individual—no matter your age or skill level—to grow healthier and stronger, like an acorn growing into a mighty oak.
                </p>
                <div className="text-center">
                  <button onClick={() => setSelectedTab(1)}
                    className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    Learn More About Us
                  </button>
                </div>
              </div>
            </div>

            {/* Client Transformations */}
            <div className="bg-gray-50 py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
                  Client Transformations
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {transformationCards.map(({ title, id }) => (
                    <div key={id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
                      <div className="h-60 overflow-hidden">
                        <img 
                          src={`./image${id}.png`} 
                          alt={title}
                          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
                        <p className="text-gray-600">
                          Real results from real clients. Our proven methods and dedicated support help you achieve your fitness goals.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-12">
                  <button onClick={() => setSelectedTab(2)}
                    className="px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                    View Our Services
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      case 1:
        return <About />;
      case 2:
        return <Services />;
      case 3:
        return <Why />;
      case 4:
        return <Results />;
      case 5:
        return <ExampleForm />;
      default:
        return <Services />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <FaDumbbell className="text-pink-500 h-6 w-6 mr-2" />
              <span className="text-white font-bold text-lg">
                Acorn Health & Fitness
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setSelectedTab(item.tab)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 
                    ${selectedTab === item.tab 
                      ? 'text-pink-400 border-b-2 border-pink-400' 
                      : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2"
              >
                {mobileMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setSelectedTab(item.tab);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium 
                    ${selectedTab === item.tab 
                      ? 'bg-gray-900 text-pink-400' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {renderContent()}
      </main>

      <Footer1 setSelectedTab={setSelectedTab} />

    </div>
  );
};

export default Home;