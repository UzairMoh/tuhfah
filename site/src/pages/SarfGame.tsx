﻿import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'react-router-dom';
import ArabicKeyboard from '../components/lesson/ArabicKeyboard.tsx';
import GameComplete from "../components/lesson/GameComplete.tsx";
import { getSarfTable, VerbForm, VerbTense } from '../data/sarf';

interface SarfGameProps {
    tableId?: string;
    customVerbForms?: VerbForm[];
}

interface AnswerState {
    input: string;
    isCorrect: boolean | null;
    showAnswer: boolean;
}

const SarfGame: React.FC<SarfGameProps> = (props) => {
    const params = useParams();
    const urlTableId = params.tableId;

    const tableId = props.tableId || urlTableId || 'faala';
    const customVerbForms = props.customVerbForms;

    const table = tableId ? getSarfTable(tableId) : null;
    const verbForms = customVerbForms || (table?.verbForms || []);
    const gameTitle = table?.title || 'Sarf Practice';
    const gameTense = table?.tense || VerbTense.PAST;

    const inputRef = useRef<HTMLInputElement>(null);

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [userAnswers, setUserAnswers] = useState<AnswerState[]>(
        Array(verbForms.length).fill({ input: '', isCorrect: null, showAnswer: false })
    );
    const [score, setScore] = useState<number>(0);
    const [gameComplete, setGameComplete] = useState<boolean>(false);
    const [direction, setDirection] = useState<number>(1);
    const [showKeyboard, setShowKeyboard] = useState<boolean>(true);
    const [contentHeight, setContentHeight] = useState<string>("auto");

    const currentForm = verbForms[currentIndex];
    const currentAnswer = userAnswers[currentIndex];

    const userInput = currentAnswer?.input || '';
    const isCorrect = currentAnswer?.isCorrect ?? null;
    const showAnswer = currentAnswer?.showAnswer || false;

    // Determine if we're testing for prefix or ending based on tense
    const isTestingPrefix = gameTense === VerbTense.FUTURE || gameTense === VerbTense.PRESENT;

    // Get the correct answer value based on the tense
    const correctAnswer = isTestingPrefix
        ? currentForm?.prefix || ''
        : currentForm?.ending || '';

    const updateCurrentAnswer = (update: Partial<AnswerState>) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentIndex] = {
            ...newAnswers[currentIndex],
            ...update
        };
        setUserAnswers(newAnswers);
    };

    useEffect(() => {
        const correctCount = userAnswers.filter(answer => answer.isCorrect === true).length;
        setScore(correctCount);
    }, [userAnswers]);

    useEffect(() => {
        if (!showKeyboard) {
            setContentHeight("auto");
        } else {
            setContentHeight("auto");
        }
    }, [showKeyboard]);

    const handleKeyPress = (key: string) => {
        if (key === 'clear') {
            updateCurrentAnswer({ input: '' });
        } else if (key === '') {
            updateCurrentAnswer({ input: userInput.slice(0, -1) });
        } else {
            updateCurrentAnswer({ input: userInput + key });
        }

        if (isCorrect !== null) {
            updateCurrentAnswer({ isCorrect: null, showAnswer: false });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateCurrentAnswer({ input: e.target.value });

        if (isCorrect !== null) {
            updateCurrentAnswer({ isCorrect: null, showAnswer: false });
        }
    };

    const handleInputFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const toggleKeyboard = () => {
        setShowKeyboard(prev => !prev);
    };

    const checkAnswer = () => {
        const correct = userInput === correctAnswer;
        updateCurrentAnswer({ isCorrect: correct });
    };

    const goToNext = () => {
        if (currentIndex < verbForms.length - 1) {
            setDirection(1);
            setCurrentIndex(prevIndex => prevIndex + 1);
        } else {
            setGameComplete(true);
        }
    };

    const goToPrevious = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(prevIndex => prevIndex - 1);
        }
    };

    const resetGame = () => {
        setCurrentIndex(0);
        setUserAnswers(Array(verbForms.length).fill({ input: '', isCorrect: null, showAnswer: false }));
        setGameComplete(false);
        setDirection(1);
    };

    const setShowAnswerValue = (value: boolean) => {
        updateCurrentAnswer({ showAnswer: value });
    };

    const variants = {
        enter: (direction: number) => ({
            y: direction > 0 ? 20 : -20, // Smaller animation distance on mobile
            scale: 0.95,
            opacity: 0
        }),
        center: {
            y: 0,
            scale: 1,
            opacity: 1
        },
        exit: (direction: number) => ({
            y: direction > 0 ? -20 : 20, // Smaller animation distance on mobile
            scale: 0.95,
            opacity: 0
        })
    };

    // Render the verb form based on the test type (prefix or ending)
    const renderVerbForm = () => {
        if (isTestingPrefix) {
            return (
                <p className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 text-gray-800 font-arabic">
                    <span className={`${isCorrect === true ? 'text-green-600' : isCorrect === false ? 'text-red-600' : 'text-gray-400'}`}>
                        {showAnswer ? currentForm?.prefix : (userInput || '_____')}
                    </span>
                    {currentForm?.base}
                </p>
            );
        } else {
            return (
                <p className="text-3xl sm:text-5xl md:text-6xl font-bold mb-2 text-gray-800 font-arabic">
                    {currentForm?.base}
                    <span className={`${isCorrect === true ? 'text-green-600' : isCorrect === false ? 'text-red-600' : 'text-gray-400'}`}>
                        {showAnswer ? currentForm?.ending : (userInput || '_____')}
                    </span>
                </p>
            );
        }
    };

    // @ts-ignore
    // @ts-ignore
    return (
        <div className="flex justify-center items-start min-h-screen overflow-y-auto">
            <div className="flex flex-col p-2 sm:p-4 md:p-6 w-full max-w-4xl mx-auto" style={{ minHeight: contentHeight }}>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-gray-800 text-center">
                    Sarf Practice - <span className="font-arabic">{gameTitle}</span>
                </h1>

                <div className="text-center mb-3 sm:mb-4 md:mb-8">
                    <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                        {gameTense.charAt(0).toUpperCase() + gameTense.slice(1)} Tense -
                        {isTestingPrefix ? ' Practicing Prefixes' : ' Practicing Endings'}
                    </span>
                </div>

                {!gameComplete ? (
                    <div className="w-full mx-auto">
                        <div className="flex justify-between items-center mb-2 sm:mb-4 md:mb-6">
                            <button
                                onClick={goToPrevious}
                                disabled={currentIndex === 0}
                                className={`px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-md text-xs sm:text-sm md:text-base ${
                                    currentIndex === 0
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                } transition-colors duration-150`}
                            >
                                Previous
                            </button>
                            <div className="text-sm sm:text-base md:text-xl font-semibold bg-gray-100 px-2 sm:px-3 md:px-4 py-1 rounded-md">
                                {currentIndex + 1} / {verbForms.length}
                            </div>
                            <button
                                onClick={goToNext}
                                disabled={currentIndex === verbForms.length - 1 && !isCorrect}
                                className={`px-2 sm:px-3 md:px-4 py-1 md:py-2 rounded-md text-xs sm:text-sm md:text-base ${
                                    (currentIndex === verbForms.length - 1 && !isCorrect)
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                } transition-colors duration-150`}
                            >
                                Next
                            </button>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 shadow-md p-2 sm:p-4 md:p-6 transition-all duration-200 overflow-hidden mb-2 sm:mb-4 md:mb-6">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentIndex}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 25,
                                        mass: 0.5,
                                        duration: 0.3 // Slightly faster animation for mobile
                                    }}
                                    className="w-full text-center"
                                >
                                    <div className="flex flex-col items-center justify-center space-y-2 sm:space-y-4 md:space-y-8">
                                        <div className="text-center" dir="rtl">
                                            {renderVerbForm()}
                                        </div>

                                        <div className="text-center" dir="ltr">
                                            <p className="text-base sm:text-lg md:text-2xl font-medium mb-1 md:mb-2 text-gray-700">{currentForm?.person}</p>
                                            <p className="text-sm sm:text-base md:text-xl text-gray-600">{currentForm?.translation}</p>
                                        </div>

                                        <div className="w-full flex flex-col items-center mt-2 sm:mt-4 md:mt-8 space-y-2 sm:space-y-3 md:space-y-4">
                                            <div className="flex items-center">
                                                <input
                                                    ref={inputRef}
                                                    type="text"
                                                    value={userInput}
                                                    onChange={handleInputChange}
                                                    onClick={handleInputFocus}
                                                    className={`w-32 sm:w-36 md:w-48 p-2 md:p-3 text-base sm:text-lg md:text-2xl text-center border-2 rounded-md ${
                                                        isCorrect === true
                                                            ? 'border-green-500 bg-green-50'
                                                            : isCorrect === false
                                                                ? 'border-red-500 bg-red-50'
                                                                : 'border-gray-300 hover:border-blue-400'
                                                    } transition-colors duration-150 min-h-[40px] sm:min-h-[48px] md:min-h-[56px] font-arabic`}
                                                    dir="rtl"
                                                />
                                            </div>

                                            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                                                <button
                                                    onClick={checkAnswer}
                                                    disabled={isCorrect === true || userInput === ''}
                                                    className={`px-3 sm:px-4 md:px-6 py-1 md:py-1.5 rounded-md font-semibold text-xs sm:text-sm md:text-base ${
                                                        isCorrect === true || userInput === ''
                                                            ? 'bg-gray-300 cursor-not-allowed'
                                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                                    } transition-colors duration-150`}
                                                >
                                                    Check
                                                </button>

                                                {isCorrect === false && (
                                                    <button
                                                        onClick={() => setShowAnswerValue(true)}
                                                        className="px-3 sm:px-4 md:px-6 py-1 md:py-1.5 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition-colors duration-150 text-xs sm:text-sm md:text-base"
                                                    >
                                                        Show Answer
                                                    </button>
                                                )}

                                                {isCorrect === true && (
                                                    <button
                                                        onClick={goToNext}
                                                        className="px-3 sm:px-4 md:px-6 py-1 md:py-1.5 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-150 text-xs sm:text-sm md:text-base"
                                                    >
                                                        Next
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="flex justify-between items-center mb-2 sm:mb-4 md:mb-6 flex-wrap gap-2">
                            <p className="text-sm sm:text-base md:text-xl font-bold bg-gray-100 px-2 sm:px-3 md:px-4 py-1 rounded-md">
                                Score: {score} / {verbForms.length}
                            </p>
                            <button
                                onClick={toggleKeyboard}
                                className="px-2 sm:px-3 md:px-4 py-1 md:py-1.5 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-150 text-xs sm:text-sm md:text-base"
                            >
                                {showKeyboard ? 'Hide' : 'Show'} Keyboard
                            </button>
                        </div>

                        {showKeyboard && (
                            <div className="mt-2 sm:mt-4 md:mt-6">
                                <ArabicKeyboard onKeyPress={handleKeyPress} />
                            </div>
                        )}
                    </div>
                ) : (
                    <GameComplete
                        score={score}
                        totalForms={verbForms.length}
                        resetGame={resetGame}
                    />
                )}
            </div>
        </div>
    );
};

export default SarfGame;