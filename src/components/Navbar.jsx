import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [lastPollId, setLastPollId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const id = localStorage.getItem("lastPollId");
    if (id) setLastPollId(id);
  }, [location]); // update if route changes

  return (
    <nav className="bg-[#6d6b67] dark:bg-gray-800 text-white dark:text-gray-300 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold hover:text-gray-200 dark:hover:text-white transition-colors"
        >
          PollApp
        </Link>

        <div className="flex text-2xl space-x-4 items-center">
          <Link 
            to="/" 
            className="hover:text-gray-200 dark:hover:text-white transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/create" 
            className="hover:text-gray-200 dark:hover:text-white transition-colors"
          >
            Create Poll
          </Link>
          {lastPollId && (
            <Link 
              to={`/poll/${lastPollId}`} 
              className="hover:text-gray-200 dark:hover:text-white transition-colors"
            >
              My Poll
            </Link>
          )}
          <button 
            onClick={toggleDarkMode} 
            className="hover:text-gray-200 dark:hover:text-white transition-colors"
          >
            {darkMode ? (
              <FiSun className="text-5xl p-2" />
            ) : (
              <FiMoon className="text-5xl p-2" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;