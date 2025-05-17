import PollForm from "../components/PollForm";

const CreatePollPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDE9E0] p-6 md:p-12">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 md:p-16">
        <h1 className="font-Playfair text-4xl md:text-6xl font-extrabold text-gray-800 mb-10 text-center">
          Create a Poll
        </h1>
        <PollForm />
      </div>
    </div>
  );
};

export default CreatePollPage;
