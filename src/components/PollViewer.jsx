import { useState, useRef } from "react";
import { FaPoll, FaChartPie, FaChartBar } from "react-icons/fa";
import PieChart from "./PieChart";
import GraphChart from "./GraphChart";
import { toPng } from "html-to-image";

const PollViewer = ({ poll }) => {
  const [selected, setSelected] = useState(null);
  const [votes, setVotes] = useState(poll.votes);
  const [chartType, setChartType] = useState("pie");
  const chartRef = useRef();

  const vote = () => {
    if (selected === null) return;

    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);

    const allPolls = JSON.parse(localStorage.getItem("polls") || "{}");
    allPolls[poll.id].votes = updatedVotes;
    localStorage.setItem("polls", JSON.stringify(allPolls));
  };

  const downloadChart = async () => {
    if (chartRef.current === null) return;
    try {
      const dataUrl = await toPng(chartRef.current);
      const link = document.createElement("a");
      link.download = `${poll.question}-${chartType}-chart.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error("Error generating image:", err);
    }
  };

   return (
    <div className="flex flex-col md:flex-row min-h-screen w-full bg-[#EDE9E0] dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-sans p-8 space-y-6 md:space-y-0 md:space-x-6 transition-colors duration-300">
      {/* Left Side: Poll Form */}
      <div className="md:w-1/2 p-10 flex flex-col justify-center items-start bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
        <div className="flex items-center mb-6 gap-2">
          <FaPoll className="text-[#05847D] dark:text-teal-400 text-3xl" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{poll.question}</h2>
        </div>

        <div className="space-y-4 w-full mb-8">
          {poll.options.map((opt, i) => (
            <label
              key={i}
              className={`flex items-center justify-between border p-4 rounded-lg cursor-pointer transition-all duration-150 shadow-sm ${
                selected === i
                  ? "bg-[#05847D]/10 dark:bg-teal-400/20 border-[#05847D] dark:border-teal-400"
                  : "hover:bg-gray-50 dark:hover:bg-gray-700/50 border-gray-200 dark:border-gray-600"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  value={i}
                  checked={selected === i}
                  onChange={() => setSelected(i)}
                  className="mr-3 accent-[#05847D] dark:accent-teal-400"
                />
                <span className="text-2xl dark:text-gray-200">{opt}</span>
              </div>
              <span className="text-3xl text-[#05847D] dark:text-teal-400">
                {votes[i]} vote{votes[i] !== 1 ? "s" : ""}
              </span>
            </label>
          ))}
        </div>

        <button
          onClick={vote}
          className="w-full text-3xl bg-[#05847D] dark:bg-teal-700 hover:bg-[#223a39] dark:hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#05847D]/50 dark:focus:ring-teal-400/50"
        >
          Submit Vote
        </button>
      </div>

      {/* Right Side: Results */}
      <div className="md:w-1/2 p-8 flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl">
        {/* Header with interactive elements */}
        <div className="flex justify-between items-center w-full mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-[#05847D]/10 dark:bg-teal-400/10 rounded-xl">
              {chartType === "pie" ? (
                <FaChartPie className="text-[#05847D] dark:text-teal-400 text-5xl" />
              ) : (
                <FaChartBar className="text-[#05847D] dark:text-teal-400 text-5xl" />
              )}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-Playfair">
              Live Insights
            </h3>
          </div>
          <button
            onClick={() => setChartType(chartType === "pie" ? "bar" : "pie")}
            className="flex items-center gap-2 text-[#05847D] dark:text-teal-400 hover:text-[#223a39] dark:hover:text-teal-300 font-medium px-4 py-2 rounded-lg bg-[#05847D]/10 dark:bg-teal-400/10 hover:bg-[#05847D]/20 dark:hover:bg-teal-400/20 transition-colors duration-200"
          >
            {chartType === "pie" ? (
              <>
                <FaChartBar className="text-5xl" />
                <span>Bar View</span>
              </>
            ) : (
              <>
                <FaChartPie className="text-5xl" />
                <span>Pie View</span>
              </>
            )}
          </button>
        </div>

        {/* Chart Container */}
        <div
          ref={chartRef}
          className="w-full h-[500px] flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"
        >
          {chartType === "pie" ? (
            <PieChart
              options={poll.options}
              votes={votes}
              accentColor="#05847D"
              darkModeAccent="#0D948D"
              className="w-full h-full"
            />
          ) : (
            <GraphChart
              options={poll.options}
              votes={votes}
              accentColor="#05847D"
              darkModeAccent="#0D948D"
              className="w-full h-full"
            />
          )}
        </div>

        {/* Footer Info */}
        <div className="mt-6 text-3xl font-bold text-gray-600 dark:text-gray-300 text-center">
          {votes.reduce((a, b) => a + b, 0)} total votes • {poll.options.length} options
        </div>

        {/* Download Button */}
        <button
          onClick={downloadChart}
          className="mt-20 text-2xl text-white bg-[#05847D] dark:bg-teal-700 hover:bg-[#223a39] dark:hover:bg-teal-600 font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
        >
          Download Chart
        </button>
      </div>
    </div>
  );
};

export default PollViewer;
