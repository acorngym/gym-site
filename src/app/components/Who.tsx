"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-12 mb-10 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-1 after:bg-pink-500 after:rounded-full">
          Who am I?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-gray-700 text-lg leading-relaxed text-justify">
            <p>
              My name is <span className="font-semibold text-slate-800">Trung Nguyen</span>. I am an NCSF certified personal trainer 
              and ENW certified fitness nutrition specialist. I am a 32-year-old male who loves 
              working out and helping people. I struggled earlier in my teens to gain weight, 
              but fitness helped me. I noticed how my attitude about life changed once I was in 
              better shape—people were even nicer to me than before. Most importantly, I became 
              more confident and said "yes" to more things in life.
            </p>
          </div>
          <div className="order-first md:order-last">
            <img 
              src="./image11.png" 
              alt="Trung Nguyen" 
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            />
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-12 mb-10 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-1 after:bg-pink-500 after:rounded-full">
          Who is Acorn Health & Fitness?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <img 
              src="./1image.png" 
              alt="Acorn Health and Fitness" 
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            />
          </div>
          <div className="text-gray-700 text-lg leading-relaxed text-justify">
            <p>
              <span className="font-semibold text-slate-800">Acorn Health & Fitness</span> is a personal training studio run by me 
              (Trung Nguyen). We are currently just one trainer and about 15 one-on-one clients. 
              Why Acorns? Acorns may be small, but they hold the potential of growing into tall 
              and strong oak trees. All they need is the right environment. Acorns are symbolic 
              for everyone, as each of us carries deep inside the vast potential for greatness. 
              We want to help bring that out of you.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-2xl shadow-lg p-6 md:p-12 mb-10 hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-10 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-1 after:bg-pink-500 after:rounded-full">
          Who are our Clients?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-gray-700 text-lg leading-relaxed text-justify">
            <p>
              Our clients range from complete beginners to advanced fitness enthusiasts. We can 
              take you from wherever you may be in your fitness journey to the next level. 
              However, most of our clients are beginners. With a background in psychology, we 
              help overcome the obstacles people face when starting a fitness habit. If you are 
              someone who might be shy about going to the gym, or you want to start a healthy 
              habit but keep falling off, or you feel unhealthy (or just want to be healthier) 
              and are overwhelmed by conflicting information, we can help.
            </p>
          </div>
          <div>
            <img 
              src="./image122.png" 
              alt="Clients in Action" 
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;