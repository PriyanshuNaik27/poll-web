import React from 'react';
import { Link } from 'react-router-dom';
import PieChartImage from './PiechartImage';

const HeroSection = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[80vh] bg-[#EDE9E0] dark:bg-gray-900 px-6 sm:px-12 lg:px-24 xl:px-40 2xl:px-60 py-16 gap-12">

      {/* Text Section */}
      <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-Playfair font-extrabold text-gray-800 dark:text-white leading-tight tracking-tight">
          Make Polls · See Charts · Share Insights
        </h1>
        <div className="space-y-4">
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
            One platform for polling and visualization.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
            Capture opinions, analyze results.
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
            Share what matters — visually.
          </p>
        </div>
        <Link to="/create">
          <button className="bg-[#05847D] dark:bg-[#0D948D] text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-8 py-4 rounded-3xl shadow-lg hover:bg-[#223a39] dark:hover:bg-[#0b7a74] transition duration-300">
            Create Poll
          </button>
        </Link>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <PieChartImage className="w-full max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] dark:invert dark:brightness-90" />
      </div>
    </div>
  );
};

export default HeroSection;