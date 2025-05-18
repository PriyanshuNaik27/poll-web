import PollForm from "../components/PollForm";
import IconAnimation2 from "../components/IconAnimation2";

const CreatePollPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#EDE9E0] dark:bg-gray-900 p-6 md:p-12 transition-colors duration-300">
     <div className="flex flex-col gap-30 items-center justify-center p-5">
        <IconAnimation2 />
        <h2 className="font-Playfair text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-10 text-center">Your Polls Require Better Charts!</h2>
        
      </div>
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 md:p-16 dark:border dark:border-gray-700">
         
        <h1 className="font-Playfair text-4xl md:text-6xl font-extrabold text-gray-800 dark:text-white mb-10 text-center">
          Create a Poll
        </h1>
        <PollForm />
      </div>
    </div>
  );
};

export default CreatePollPage;