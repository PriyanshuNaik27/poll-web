import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollHorizontal, faSquareShareNodes, faChartPie } from '@fortawesome/free-solid-svg-icons';
import IconAnimation from './IconAnimation';

const steps = [
  {
    icon: faSquarePollHorizontal,
    color: 'text-indigo-600 dark:text-indigo-400',
    title: 'Step 1:',
    description: 'Create your poll',
  },
   {
    icon: faChartPie,
    color: 'text-pink-600 dark:text-pink-400',
    title: 'Step 3:',
    description: 'View the results',
  },
  {
    icon: faSquareShareNodes,
    color: 'text-green-600 dark:text-green-400',
    title: 'Step 2:',
    description: 'Share the Chart ',
  },
 
];

const HowItWorkSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#F9F6F1] dark:bg-gray-800 px-4 sm:px-6 md:px-12 xl:px-32 2xl:px-56 py-12 space-y-12 transition-colors duration-300">
      <h2 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl 2xl:text-8xl font-Playfair font-extrabold text-gray-800 dark:text-white text-center leading-tight">
        How It Works
      </h2>
      <IconAnimation className="dark:invert dark:brightness-90"/>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-7xl px-2 xl:px-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 lg:p-10 xl:p-12 w-full md:w-1/3 transition-all duration-300 hover:scale-105 hover:dark:border-gray-600"
          >
            <FontAwesomeIcon
              icon={step.icon}
              className={`text-5xl sm:text-6xl xl:text-7xl mb-6 ${step.color}`}
            />
            <p className="text-lg sm:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 text-center">
              <span className="font-bold">{step.title}</span> {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorkSection;