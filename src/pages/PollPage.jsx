
import { useParams } from "react-router-dom";
import PollViewer from "../components/PollViewer";

const PollPage = () => {
  const { id } = useParams();
  const allPolls = JSON.parse(localStorage.getItem("polls") || "{}");
  const poll = allPolls[id];

  if (!poll) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600 font-bold text-xl">
        Poll not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-xl bg-white p-6 rounded-xl shadow-lg">
        <PollViewer poll={poll} />
      </div>
    </div>
  );
};

export default PollPage;
