"use client";

import React from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { clientData } from "@/data/clientData";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Results = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <AnimatePresence>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 text-center mb-12 md:mb-16 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-12 md:after:w-16 after:h-1 after:bg-pink-500 after:rounded-full">
            Transformation Stories
          </h2>

          {clientData.map(({ 
            id, 
            name, 
            lostOrGained, 
            keyToSuccess, 
            images, 
            testimonial, 
            duration, 
            achievements 
          }) => (
            <motion.div
              key={id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg p-4 md:p-8 lg:p-10 mb-8 md:mb-12 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                <div className="grid grid-cols-2 gap-3 md:gap-4 h-full">
                  {images.map((imgSrc, idx) => (
                    <div key={idx} className="h-full">
                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="h-full flex flex-col rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative flex-grow flex flex-col h-full">
                          <div className="aspect-square md:aspect-[3/4] relative overflow-hidden">
                            <img
                              src={imgSrc}
                              alt={`${name} ${idx === 0 ? 'Before' : 'After'}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="bg-white bg-opacity-90 py-2 text-center font-medium text-slate-800 text-sm md:text-base">
                            {idx === 0 ? 'Before' : 'After'}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col p-2 md:p-4">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-3">{name}</h3>
                  <p className="text-lg md:text-xl font-semibold text-green-600 mb-3">{lostOrGained}</p>
                  
                  {duration && (
                    <p className="text-sm md:text-base text-gray-600 mb-3">Duration: {duration}</p>
                  )}
                  
                  <div className="text-sm md:text-base text-gray-700 italic mb-4">
                    <span className="font-semibold not-italic">Key to success:</span> {keyToSuccess}
                  </div>
                  
                  {testimonial && (
                    <div className="text-sm md:text-base text-gray-600 italic mb-4 pl-3 md:pl-4 border-l-4 border-pink-500 bg-pink-50 bg-opacity-30 py-2 md:py-3 px-2 md:px-3">
                      "{testimonial}"
                    </div>
                  )}
                  
                  {achievements && achievements.length > 0 && (
                    <div className="bg-green-50 rounded-lg p-3 md:p-4 mt-2">
                      <p className="text-base md:text-lg font-semibold mb-2">Key Achievements:</p>
                      <ul className="space-y-1">
                        {achievements.map((achievement, index) => (
                          <li key={index} className="text-sm md:text-base text-gray-700">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Results;