import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#6d6b67] border-t border-gray-200 ">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-white text-sm">
        <p>&copy; {new Date().getFullYear()} PollApp. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/create" className="hover:text-blue-600">Create Poll</a>
          <a href="https://github.com/PriyanshuNaik27/poll-web" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
