
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
    <div className="min-[vh] h-full w-full min-w-[vw] flex items-center justify-center bg-gray-50 ">
      <div className="w-full  bg-white  rounded-xl ">
        <PollViewer poll={poll} />
      </div>
    </div>
  );
};

export default PollPage;
