import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

interface GameCompleteProps {
    score: number;
    totalForms: number;
    resetGame: () => void;
}

const GameComplete: React.FC<GameCompleteProps> = ({ score, totalForms, resetGame }) => {
    const { width, height } = useWindowSize();
    const [showConfetti, setShowConfetti] = useState<boolean>(true);
    const isPerfectScore = score === totalForms;

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    const getMessage = () => {
        const percentage = (score / totalForms) * 100;

        if (percentage === 100) {
            return 'Perfect! You mastered all the conjugations!';
        } else if (percentage >= 80) {
            return 'Excellent! You\'re almost there!';
        } else if (percentage >= 60) {
            return 'Good job! Keep practicing!';
        } else if (percentage >= 40) {
            return 'Nice effort! Try again to improve your score!';
        } else {
            return 'Keep practicing! You\'ll get better with time!';
        }
    };

    return (
        <div className="flex justify-center items-center h-full w-full">
            {showConfetti && isPerfectScore && (
                <Confetti
                    width={width}
                    height={height}
                    recycle={false}
                    numberOfPieces={isPerfectScore ? 500 : 200}
                    gravity={0.15}
                    colors={['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50']}
                />
            )}

            <div className="bg-white rounded-lg border border-gray-200 shadow-md p-6 sm:p-8 w-full max-w-md sm:max-w-xl mx-auto text-center z-10">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Game Complete!</h2>

                <div className="mb-4 flex items-center justify-center">
                    <div className={`text-xl sm:text-2xl font-bold px-4 py-2 rounded-full ${
                        isPerfectScore
                            ? 'bg-green-100 text-green-800'
                            : score / totalForms >= 0.7
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                    }`}>
                        {score} / {totalForms}
                    </div>
                </div>

                <p className="text-lg sm:text-xl mb-6 text-gray-700">
                    {getMessage()}
                </p>

                <div className="mb-4 sm:mb-6">
                    <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                            className={`h-4 rounded-full ${
                                isPerfectScore
                                    ? 'bg-green-600'
                                    : score / totalForms >= 0.7
                                        ? 'bg-blue-600'
                                        : 'bg-yellow-500'
                            }`}
                            style={{ width: `${(score / totalForms) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <button
                    onClick={resetGame}
                    className="px-6 sm:px-8 py-2 sm:py-3 bg-blue-600 text-white text-base sm:text-xl font-semibold rounded-md hover:bg-blue-700 transition-colors duration-150 shadow-md"
                >
                    Play Again
                </button>
            </div>
        </div>
    );
};

export default GameComplete;