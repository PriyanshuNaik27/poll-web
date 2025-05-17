import meet from "../assets/meet.jpg";

const TrendingSection = () => {
    const trendingQuestions = [
        "What’s your favorite programming language in 2025?",
        "Do you prefer remote work or office work?",
        "Which is the best streaming platform?",
        "Should AI be regulated more strictly?",
        "What’s the most important quality in a leader?",
    ];

    return (
        <section className="bg-[#EDE9E0] dark:bg-gray-900 py-20 px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-32 transition-colors duration-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 items-stretch">
                {/* Left Column - Image matching questions height */}
                <div className="hidden md:block relative h-full min-h-[500px]">
                    <div className="sticky top-20 h-full rounded-3xl shadow-2xl overflow-hidden border-4 border-white dark:border-gray-700">
                        <img
                            src={meet}
                            alt="People discussing polls"
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#05847D]/90 dark:from-[#0D948D]/90 to-transparent p-6">
                            <p className="text-xl font-Playfair font-bold text-white italic leading-tight">
                                "Join our vibrant community of passionate voters shaping opinions worldwide"
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Trending Questions */}
                <div className="space-y-6">
                    <h2 className="text-3xl font-Playfair font-extrabold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                        <span className=" text-white p-2 rounded-lg">🔥</span>
                        Trending Polls
                    </h2>
                    
                    {trendingQuestions.map((question, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-[#05847D]/30 dark:hover:border-[#0D948D]/30 transition-all duration-300 hover:shadow-lg group hover:dark:bg-gray-700"
                        >
                            <div className="flex items-start">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 relative pl-3">
                                        <div className="absolute left-0 top-1 w-1 h-5 bg-[#05847D] dark:bg-[#0D948D] rounded-full"></div>
                                        {question}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrendingSection;