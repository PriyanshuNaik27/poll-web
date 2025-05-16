// src/pages/CreatePollPage.jsx
import PollForm from "../components/PollForm";

const CreatePollPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Create a Poll</h1>
        <PollForm />
      </div>
    </div>
  );
};

export default CreatePollPage;
