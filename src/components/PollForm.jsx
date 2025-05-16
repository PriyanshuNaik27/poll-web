// src/components/PollForm.jsx
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

    navigate(`/poll/${pollId}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="font-medium">Poll Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </div>

      <div>
        <label className="font-medium">Options</label>
        {options.map((opt, index) => (
          <div key={index} className="flex items-center gap-2 mt-2">
            <input
              type="text"
              value={opt}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              className="flex-1 p-2 border rounded"
              required
            />
            {options.length > 2 && (
              <button
                type="button"
                onClick={() => removeOption(index)}
                className="text-red-500"
              >
                ✖
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addOption}
          className="mt-2 text-blue-600 hover:underline"
        >
          + Add Option
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Create Poll
      </button>
    </form>
  );
};

export default PollForm;
