import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Info, BookOpen, Zap, ScrollText } from 'lucide-react';
import { prophetStories } from "../data/qisas";

const Tooltip: React.FC<{ content: string }> = ({ content }) => (
    <div className="absolute right-0 mt-2 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-10">
        {content}
        <div className="absolute -top-1 right-2 w-2 h-2 bg-gray-900 rotate-45"/>
    </div>
);

const QisasHomePage: FC = () => {
    const [tooltipVisibility, setTooltipVisibility] = useState<{[key: number]: boolean}>({});
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const showTooltip = (id: number) => {
        if (!isMobile) {
            setTooltipVisibility(prev => ({ ...prev, [id]: true }));
        }
    };

    const hideTooltip = (id: number) => {
        if (!isMobile) {
            setTooltipVisibility(prev => ({ ...prev, [id]: false }));
        }
    };

    return (
        <div className="p-4 sm:p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-gray-800">
                Prophet Stories - قصص الأنبياء
            </h1>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-center text-gray-600">
                Learn from the inspiring stories and lessons of the prophets through interactive Arabic texts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {prophetStories.map((story) => (
                    <div key={story.id} className="relative">
                        <Link
                            to={`/qisas/${story.id}`}
                            className="block bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6"
                        >
                            <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                                <div
                                    className="cursor-pointer"
                                    onMouseEnter={() => showTooltip(story.id)}
                                    onMouseLeave={() => hideTooltip(story.id)}
                                >
                                    <Info className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                                    {tooltipVisibility[story.id] && (
                                        <Tooltip content={story.description} />
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center mb-2 pr-6 sm:pr-8">
                                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mr-2 flex-shrink-0" />
                                    <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                                        {story.prophetName} - {story.prophetNameArabic}
                                    </h2>
                                </div>
                                <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-700">
                                    {story.storyTitle}
                                </h3>
                                <p className="text-sm text-gray-600 mb-3">
                                    {story.storyTitleArabic}
                                </p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xs sm:text-sm text-gray-500">
                                        {story.sentences.length} sentences
                                    </span>
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                        Interactive
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-8 sm:mt-12 bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800 flex items-center">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-blue-600" />
                    About Prophet Stories
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                    Our Prophet Stories (Qisas Al-Anbiya) collection presents the inspiring narratives of
                    Allah's messengers in an interactive Arabic learning format. Each story is carefully
                    structured with word-by-word translations to help you understand classical Arabic.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
                    <div className="bg-white p-3 sm:p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <Zap className="h-4 w-4 mr-2 text-blue-600" />
                            Interactive Learning
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                            Click on any Arabic word to see its direct translation and understand sentence structure.
                        </p>
                    </div>
                    <div className="bg-white p-3 sm:p-4 rounded-lg">
                        <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                            <ScrollText className="h-4 w-4 mr-2 text-blue-600" />
                            Authentic Stories
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                            Learn from the lives and teachings of the prophets mentioned in the Quran and Sunnah.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QisasHomePage;