"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-12 mb-10 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-1 after:bg-pink-500 after:rounded-full">
          Our Services
        </h2>

        <div className="text-gray-700 text-lg leading-relaxed">
          <p className="mb-6">
            Before we get to what services we provide and pricing, let's go over a few other things.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">What can you expect?</h3>
            <p className="text-justify">
              We are your personal trainers, so you can expect to train your body through physical 
              exercises and your mind through having discipline to stay on your diet and overcoming 
              obstacles. You will be provided with a workout based on your goals and condition. You 
              will be guided on nutrition and depending on body type, goals, and preference, we will 
              figure out the right diet for you. Your health and safety will be our first priority, 
              but you will be pushed beyond your comfort level. You will reach your goal.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-slate-800 mb-3">What do we expect from you?</h3>
            <p className="text-justify">
              Your best. We are not asking you to be a super athlete, but we do require your best. 
              This means that you need to show up and give it all you got. Maybe you have a headache 
              or a cold that day, we won't expect you to be breaking records, but you still need to 
              do your best for that day. Be on time. There are 24 hours in a day, and if we only get 
              to train with you for one hour, we want to be able to use every second available. Show up. 
              Yes, we expect you to do your best and be on time, but most importantly, you need to show up.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-12 mb-10 hover:shadow-xl transition-all duration-300"
      >
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-3">What do we do?</h3>
          <p className="text-gray-700 text-lg mb-6">
            Here are some pictures to see what our clients do during our workout.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['21.png', '22.png', '23.png'].map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <div className="h-64 w-full overflow-hidden hover:scale-102 hover:shadow-xl transition-all duration-500">
                <img 
                  src={`./${image}`} 
                  alt={`Training ${index + 1}`} 
                  className="w-full h-full object-cover hover:-translate-y-2 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-slate-800 rounded-2xl shadow-lg p-6 md:p-12 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
          Training Sessions
        </h3>
        <p className="text-lg text-white mb-4">
          Private Training (1-on-1) and Semi Private Training (2 People)
        </p>
        <p className="text-2xl font-bold text-white">
          $80 per 1hr session
        </p>
      </motion.div>
    </div>
  );
};

export default Services;