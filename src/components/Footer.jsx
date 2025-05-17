import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#6d6b67] dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-white dark:text-gray-300 text-sm">
        <p>&copy; {new Date().getFullYear()} PollApp. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link 
            to="/" 
            className="hover:text-gray-200 dark:hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link 
            to="/create" 
            className="hover:text-gray-200 dark:hover:text-white transition-colors duration-300"
          >
            Create Poll
          </Link>
          <a 
            href="https://github.com/PriyanshuNaik27/poll-web" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;