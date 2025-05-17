import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const PollForm = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const navigate = useNavigate();

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const pollId = uuidv4();
  const poll = {
    id: pollId,
    question,
    options,
    votes: Array(options.length).fill(0),
  };

  const existingPolls = JSON.parse(localStorage.getItem("polls") || "{}");
  existingPolls[pollId] = poll;
  localStorage.setItem("polls", JSON.stringify(existingPolls));

  // ✅ Save last created poll ID to localStorage
  localStorage.setItem("lastPollId", pollId);

  // Redirect to the created poll
  navigate(`/poll/${pollId}`);
};


  return (
    <form onSubmit={handleSubmit} className="space-y-12">
      {/* Question */}
      <div>
        <label className="block font-Playfair font-extrabold text-2xl text-gray-800 mb-4">
          Poll Question
        </label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question here..."
          required
          className="w-full rounded-3xl border border-gray-300 px-6 py-4 text-xl text-gray-700 font-semibold focus:outline-none focus:ring-4 focus:ring-[#05847D]"
        />
      </div>

      {/* Options */}
      <div>
        <label className="block font-Playfair font-extrabold text-2xl text-gray-800 mb-4">
          Options
        </label>
        <div className="space-y-6">
          {options.map((opt, index) => (
            <div key={index} className="flex items-center gap-6">
              <input
                type="text"
                value={opt}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                placeholder={`Option ${index + 1}`}
                required
                className="flex-grow rounded-3xl border border-gray-300 px-6 py-4 text-lg text-gray-700 font-semibold focus:outline-none focus:ring-4 focus:ring-[#05847D]"
              />
              {options.length > 2 && (
                <button
                  type="button"
                  onClick={() => removeOption(index)}
                  className="text-3xl text-red-500 hover:text-red-700 transition"
                  aria-label="Remove option"
                >
                  ✖
                </button>
              )}
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={addOption}
          className="mt-8 font-semibold text-[#05847D] hover:text-[#02534b] transition text-lg"
        >
          + Add Option
        </button>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-[#05847D] text-white font-extrabold text-3xl rounded-3xl py-5 hover:bg-[#223a39] transition"
      >
        Create Poll
      </button>
    </form>
  );
};

export default PollForm;
