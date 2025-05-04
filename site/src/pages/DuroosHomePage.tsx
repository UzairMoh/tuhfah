import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Info } from 'lucide-react';
import { lessons } from "../data/lessons";

const Tooltip: React.FC<{ content: string }> = ({ content }) => (
    <div className="absolute right-0 mt-2 w-64 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-10">
        {content}
        <div className="absolute -top-1 right-2 w-2 h-2 bg-gray-900 rotate-45"/>
    </div>
);

const DuroosHomePage: FC = () => {
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
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Arabic Lessons</h1>
            <p className="text-lg mb-8 text-center text-gray-600">
                Learn Arabic through our structured lessons and interactive exercises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {lessons.map((lesson) => (
                    <div key={lesson.id} className="relative">
                        <Link
                            to={`/lesson/${lesson.id}`}
                            className="block bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6"
                        >
                            <div className="absolute top-4 right-4">
                                <div
                                    className="cursor-pointer"
                                    onMouseEnter={() => showTooltip(lesson.id)}
                                    onMouseLeave={() => hideTooltip(lesson.id)}
                                >
                                    <Info className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                                    {tooltipVisibility[lesson.id] && (
                                        <Tooltip content={lesson.infoText} />
                                    )}
                                </div>
                            </div>
                            <div className="pr-8">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">{lesson.title}</h2>
                                <p className="text-gray-600">{lesson.description}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800">About Our Lessons</h2>
                <p className="text-gray-700 mb-4">
                    Our Arabic lessons are designed to help you build a strong foundation in the language.
                    Each lesson focuses on specific aspects of Arabic grammar, vocabulary, and conversation.
                </p>
                <p className="text-gray-700">
                    Select a lesson above to begin your learning journey. After completing each lesson,
                    you can practice what you've learned with interactive exercises.
                </p>
            </div>
        </div>
    );
};

export default DuroosHomePage;