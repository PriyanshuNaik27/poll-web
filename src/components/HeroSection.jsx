import React from 'react';
import { Link } from 'react-router-dom';
import PieChartImage from './PiechartImage';

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center  h-[70vh] bg-[#EDE9E0] px-4 sm:px-6 md:px-30 py-12 gap-8">

      {/* Text Section */}
      <div className="text-center md:text-left max-w-5xl px-10 space-y-10">
        <h1 className="text-3xl sm:text-4xl md:text-8xl lg:text-10xl font-Playfair font-extrabold text-gray-800 leading-tight">
          Make Polls, See Charts, Share Insights
        </h1>
        <div className='text-center   md:text-left'>
          <p className="text-base  sm:text-lg md:text-2xl text-gray-600 px-2">
            One platform for polling and visualization.
          </p>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 px-2">
            Capture opinions, analyze results.
          </p>
          <p className="text-base sm:text-lg md:text-2xl text-gray-600 px-2">
            Share what matters — visually.
          </p>
        </div>
        <Link to="/create">
          <button className="bg-[#05847D] text-4xl text-white px-6 py-3 rounded-3xl shadow-md hover:bg-[#223a39] transition">
            Create Poll
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <PieChartImage className='shadow-2xl'/>
      </div>
    </div>
  );
};

export default HeroSection;

