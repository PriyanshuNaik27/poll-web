import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePollHorizontal, faSquareShareNodes, faChartPie } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    icon: faSquarePollHorizontal,
    color: 'text-indigo-600',
    title: 'Step 1:',
    description: 'Create your poll',
  },
  {
    icon: faSquareShareNodes,
    color: 'text-green-600',
    title: 'Step 2:',
    description: 'Share the poll link',
  },
  {
    icon: faChartPie,
    color: 'text-pink-600',
    title: 'Step 3:',
    description: 'View the results',
  },
];

const HowItWorkSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#F9F6F1] px-4 sm:px-6 md:px-20 py-12 space-y-12">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-Playfair font-extrabold text-gray-800 text-center">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl px-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-3xl shadow-lg border border-gray-200 p-8 w-full md:w-1/3 transition-transform duration-300 hover:scale-105"
          >
            <FontAwesomeIcon icon={step.icon} className={`text-5xl mb-6 ${step.color}`} />
            <p className="text-xl text-gray-700 text-center">
              <span className="font-bold">{step.title}</span> {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorkSection;
