"use client";

import React from "react";
import { motion } from 'framer-motion';

const Why = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-6 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-1 after:bg-pink-500 after:rounded-full">
          Why should you exercise?
        </h2>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mt-8 mb-16 leading-relaxed">
          It has been proven over and over again that exercise extends your longevity, 
          improves health, and increases your performance in all areas of your life. 
          It helps you look better, feel better, and be better.
        </p>

        {['trainer', 'choose', 'now'].map((section, index) => (
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-12 mb-10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-last md:order-first">
                <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500">
                  <img 
                    src={`./${section === 'trainer' ? 'image112' : section === 'choose' ? 'image113' : 'image2'}.png`}
                    alt={`Why ${section}?`}
                    className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-all duration-500"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6 md:mb-8">
                  {section === 'trainer' && "Why do you need a trainer?"}
                  {section === 'choose' && "Why should you choose us?"}
                  {section === 'now' && "Why now?"}
                </h3>
                
                {section === 'trainer' && (
                  <>
                    <p className="text-gray-700 text-lg leading-relaxed text-justify mb-4">
                      If Michael Jordan needs a personal trainer, why wouldn't you? 
                      If the best of the best in their respective fields know that the only way 
                      they can improve is through a good coach and a great personal trainer, 
                      then we all could benefit from personal training.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed text-justify">
                      A good trainer coaches you on things that you aren't familiar with. 
                      He/she will help you think outside the box to constantly push your limit 
                      and grow. A good trainer will be right by your side to let you know that 
                      you've fallen off track and what you need to do to get back on it.
                    </p>
                  </>
                )}
                
                {section === 'choose' && (
                  <div className="text-gray-700 text-lg leading-relaxed space-y-3">
                    <p>-Because we're good trainers. =)</p>
                    <p>
                      -We will find out where you are on the fitness spectrum and push you 
                      toward your goal.
                    </p>
                    <p>
                      -We will listen to your wishes and goals but ignore your whines and 
                      complaints, because we know you want the results more than what's discomforting you.
                    </p>
                    <p>
                      -We will push you during our workout, provide you with a routine to do in 
                      between, and guide you on proper nutrition so you can be your best.
                    </p>
                  </div>
                )}
                
                {section === 'now' && (
                  <p className="text-gray-700 text-lg leading-relaxed text-justify">
                    That's personal to you because only you know when the right time is to 
                    take action. However, what time do we ever have other than now? 
                    Just think, a year from now, you're going to wish you had started today.
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Why;