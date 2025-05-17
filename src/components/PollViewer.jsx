import { useState } from "react";
import { FaPoll, FaChartPie, FaChartBar } from "react-icons/fa";
import PieChart from "./PieChart";
import GraphChart from "./GraphChart";

const PollViewer = ({ poll }) => {
  const [selected, setSelected] = useState(null);
  const [votes, setVotes] = useState(poll.votes);
  const [chartType, setChartType] = useState("pie");

  const vote = () => {
    if (selected === null) return;

    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);

    const allPolls = JSON.parse(localStorage.getItem("polls") || "{}");
    allPolls[poll.id].votes = updatedVotes;
    localStorage.setItem("polls", JSON.stringify(allPolls));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#EDE9E0] text-gray-800 font-sans p-8 space-y-6 md:space-y-0 md:space-x-6">
      {/* Left Side: Poll Form */}
      <div className="md:w-1/2 p-10 flex flex-col justify-center items-start bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="flex items-center mb-6 gap-2">
          <FaPoll className="text-[#05847D] text-3xl" />
          <h2 className="text-3xl font-bold text-gray-900">{poll.question}</h2>
        </div>

        <div className="space-y-4 w-full mb-8">
          {poll.options.map((opt, i) => (
            <label
              key={i}
              className={`flex items-center justify-between border p-4 rounded-lg cursor-pointer transition-all duration-150 shadow-sm ${selected === i
                  ? "bg-[#05847D]/10 border-[#05847D]"
                  : "hover:bg-gray-50 border-gray-200"
                }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  value={i}
                  checked={selected === i}
                  onChange={() => setSelected(i)}
                  className="mr-3 accent-[#05847D]"
                />
                <span className="text-base">{opt}</span>
              </div>
              <span className="text-sm text-[#05847D]">
                {votes[i]} vote{votes[i] !== 1 ? "s" : ""}
              </span>
            </label>
          ))}
        </div>

        <button
          onClick={vote}
          className="w-full bg-[#05847D] hover:bg-[#223a39] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#05847D]/50"
        >
          Submit Vote
        </button>
      </div>

      {/* Right Side: Results */}
      <div className="md:w-1/2 p-8 flex flex-col bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
        {/* Header with interactive elements */}
        <div className="flex justify-between items-center w-full mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#05847D]/10 rounded-xl">
              {chartType === "pie" ? (
                <FaChartPie className="text-[#05847D] text-2xl" />
              ) : (
                <FaChartBar className="text-[#05847D] text-2xl" />
              )}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 font-Playfair">
              Live Insights
            </h3>
          </div>
          <button
            onClick={() => setChartType(chartType === "pie" ? "bar" : "pie")}
            className="flex items-center gap-2 text-[#05847D] hover:text-[#223a39] font-medium px-4 py-2 rounded-lg bg-[#05847D]/10 hover:bg-[#05847D]/20 transition-colors duration-200"
          >
            {chartType === "pie" ? (
              <>
                <FaChartBar className="text-lg" />
                <span>Bar View</span>
              </>
            ) : (
              <>
                <FaChartPie className="text-lg" />
                <span>Pie View</span>
              </>
            )}
          </button>
        </div>

        {/* Chart Container */}
        <div className="w-full h-[500px] flex items-center justify-center p-4 bg-gray-50 rounded-xl border border-gray-200">
          {chartType === "pie" ? (
            <PieChart
              options={poll.options}
              votes={votes}
              accentColor="#05847D"
              className="w-full h-full"
            />
          ) : (
            <GraphChart
              options={poll.options}
              votes={votes}
              accentColor="#05847D"
              className="w-full h-full"
            />
          )}
        </div>

        {/* Legend/Footer */}
        <div className="mt-6 text-sm text-gray-600 text-center">
          {votes.reduce((a, b) => a + b, 0)} total votes • {poll.options.length} options
        </div>
      </div>
    </div>
  );
};

export default PollViewer;


