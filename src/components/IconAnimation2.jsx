import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSquarePollHorizontal,
  faSquareShareNodes,
  faChartPie,
} from '@fortawesome/free-solid-svg-icons';

const images = [
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

const IconAnimation2 = () => {
  const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % images.length);
  }, 2000);

  return () => clearInterval(interval);
}, []);
 

  return (
    <div className="relative flex text-3xl items-center justify-center overflow-hidden w-full md:w-[400px] h-[140px]">
      {images.map((item, i) => {
        const pos = (i - index + images.length) % images.length;

        return (
          <motion.div
            key={i}
            className={`absolute w-[100px] h-[100px] rounded-full flex items-center justify-center ${item.color} bg-white shadow-md`}
            style={{ zIndex: images.length - pos }}
            animate={{
              x: pos * 600 - 300,
              scale: pos === 0 ? 1.3 : 1,
              opacity: 1,
            }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <FontAwesomeIcon icon={item.icon} size="2x" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default IconAnimation2;