// src/components/PollViewer.jsx
import { useState } from "react";
import PieChart from "./PieChart";

const PollViewer = ({ poll }) => {
  const [selected, setSelected] = useState(null);
  const [votes, setVotes] = useState(poll.votes);

  const vote = () => {
    if (selected === null) return;

    const updatedVotes = [...votes];
    updatedVotes[selected] += 1;
    setVotes(updatedVotes);

    // Save updated votes in localStorage
    const allPolls = JSON.parse(localStorage.getItem("polls") || "{}");
    allPolls[poll.id].votes = updatedVotes;
    localStorage.setItem("polls", JSON.stringify(allPolls));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{poll.question}</h2>

      <div className="space-y-2 mb-4">
        {poll.options.map((opt, i) => (
          <label
            key={i}
            className={`block p-2 border rounded cursor-pointer ${
              selected === i ? "bg-blue-100 border-blue-400" : "hover:bg-gray-100"
            }`}
          >
            <input
              type="radio"
              name="option"
              value={i}
              checked={selected === i}
              onChange={() => setSelected(i)}
              className="mr-2"
            />
            {opt}
          </label>
        ))}
      </div>

      <button
        onClick={vote}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Vote
      </button>

      <h3 className="mt-6 mb-2 font-medium">Results:</h3>
      <PieChart options={poll.options} votes={votes} />
    </div>
  );
};

export default PollViewer;
