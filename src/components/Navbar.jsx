import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [lastPollId, setLastPollId] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const id = localStorage.getItem("lastPollId");
    if (id) setLastPollId(id);
  }, [location]); // update if route changes

  return (
    <nav className="bg-[#6d6b67] text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold hover:text-gray-200">
          PollApp
        </Link>
        <div className="flex space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/create" className="hover:text-gray-200">Create Poll</Link>
          {lastPollId && (
            <Link to={`/poll/${lastPollId}`} className="hover:text-gray-200">
              My Poll
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
