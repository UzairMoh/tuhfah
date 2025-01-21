import {useState} from 'react';
import {Vocabulary} from "../../data/lessons";
import {formatText} from "../../utils/FormatArabic";
import {ArrowLeft, ArrowRight, RotateCw} from "lucide-react";

interface FlashcardProps {
    vocabulary: Vocabulary[];
}

const Flashcard = ({vocabulary}: FlashcardProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const currentWord = vocabulary[currentIndex];

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev + 1) % vocabulary.length);
    };

    const handlePrevious = () => {
        setIsFlipped(false);
        setCurrentIndex((prev) => (prev - 1 + vocabulary.length) % vocabulary.length);
    };

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!touchStart) return;

        const touchEnd = e.touches[0].clientX;
        const diff = touchStart - touchEnd;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                handleNext();
            } else {
                handlePrevious();
            }
            setTouchStart(null);
        }
    };

    const handleTouchEnd = () => {
        setTouchStart(null);
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 shadow-md p-3 sm:p-4 md:p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 border-b pb-3">
                Flashcards
            </h2>

            <div
                className="relative mb-4 sm:mb-6"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="min-h-[16rem] sm:min-h-[20rem] cursor-pointer bg-gray-50 rounded-lg flex items-center justify-center p-4 sm:p-6"
                    onClick={handleFlip}
                >
                    <div className={`w-full transition-all duration-300 ${isFlipped ? 'scale-0' : 'scale-100'}`}>
                        <div className="text-center space-y-3 sm:space-y-4">
                            <span className="font-arabic text-3xl sm:text-4xl md:text-5xl text-gray-800 block">
                                {formatText(currentWord.word)}
                            </span>
                            {currentWord.pronunciation && (
                                <span className="text-base sm:text-lg text-gray-500 italic block">
                                    /{currentWord.pronunciation}/
                                </span>
                            )}
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 transition-all duration-300 ${isFlipped ? 'scale-100' : 'scale-0'}`}>
                        <div
                            className="text-center space-y-4 sm:space-y-6 h-full flex flex-col justify-center p-4 sm:p-6">
                            <div className="text-xl sm:text-2xl text-gray-800">
                                {currentWord.meaning}
                            </div>
                            {currentWord.example && (
                                <div className="bg-white p-3 sm:p-4 rounded-lg border-l-4 border-gray-300">
                                    <div
                                        className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1 sm:mb-2">
                                        Example
                                    </div>
                                    <div className="text-sm sm:text-base space-y-1 sm:space-y-2">
                                        <div className="font-arabic text-base sm:text-lg">
                                            {formatText(currentWord.example.split('-')[0])}
                                        </div>
                                        <div className="text-gray-700">
                                            {currentWord.example.split('-')[1]}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 items-center border-t pt-4">
                <button
                    onClick={handlePrevious}
                    className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ArrowLeft size={16} className="sm:w-5 sm:h-5"/>
                    <span className="hidden sm:inline">Previous</span>
                </button>

                <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <button
                        onClick={handleFlip}
                        className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <RotateCw size={16} className="sm:w-5 sm:h-5"/>
                        <span className="hidden sm:inline">Flip</span>
                    </button>

                    <div className="text-xs sm:text-sm text-gray-500">
                        Card {currentIndex + 1} of {vocabulary.length}
                    </div>

                    <div className="text-xs text-gray-400 whitespace-nowrap sm:hidden">
                        Swipe to navigate • Tap to flip
                    </div>
                </div>

                <button
                    onClick={handleNext}
                    className="flex items-center gap-1 sm:gap-2 text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors justify-end"
                >
                    <span className="hidden sm:inline">Next</span>
                    <ArrowRight size={16} className="sm:w-5 sm:h-5"/>
                </button>
            </div>
        </div>
    );
};

export default Flashcard;