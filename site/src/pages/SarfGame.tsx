import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArabicKeyboard from '../components/lesson/ArabicKeyboard.tsx';

// Define types for our verb forms
interface VerbForm {
    complete: string;
    base: string;
    ending: string;
    person: string;
    translation: string;
}

// SarfGame component
const SarfGame: React.FC = () => {
    // Reference for input field
    const inputRef = useRef<HTMLInputElement>(null);

    // Define the verb conjugations for فَعَلَ
    const verbForms: VerbForm[] = [
        { complete: 'فَعَلَ', base: 'فَعَ', ending: 'لَ', person: 'He (3rd person masculine singular)', translation: 'He did' },
        { complete: 'فَعَلا', base: 'فَعَ', ending: 'لا', person: 'They (dual masculine)', translation: 'They (2) did' },
        { complete: 'فَعَلُو', base: 'فَعَ', ending: 'لُو', person: 'They (3rd person masculine plural)', translation: 'They (all) did' },
        { complete: 'فَعَلَتْ', base: 'فَعَ', ending: 'لَتْ', person: 'She (3rd person feminine singular)', translation: 'She did' },
        { complete: 'فَعَلَتَا', base: 'فَعَ', ending: 'لَتَا', person: 'They (dual feminine)', translation: 'They (2 females) did' },
        { complete: 'فَعَلْنَ', base: 'فَعَ', ending: 'لْنَ', person: 'They (3rd person feminine plural)', translation: 'They (females) did' },
        { complete: 'فَعَلْتَ', base: 'فَعَ', ending: 'لْتَ', person: 'You (2nd person masculine singular)', translation: 'You did' },
        { complete: 'فَعَلتُمَا', base: 'فَعَ', ending: 'لتُمَا', person: 'You (dual)', translation: 'You (2) did' },
        { complete: 'فَعَلْتُمْ', base: 'فَعَ', ending: 'لْتُمْ', person: 'You (2nd person masculine plural)', translation: 'You (all) did' },
        { complete: 'فَعَلْتِ', base: 'فَعَ', ending: 'لْتِ', person: 'You (2nd person feminine singular)', translation: 'You (female) did' },
        { complete: 'فَعَلْتُمَا', base: 'فَعَ', ending: 'لْتُمَا', person: 'You (dual feminine)', translation: 'You (2 females) did' },
        { complete: 'فَعَلْتُنَّ', base: 'فَعَ', ending: 'لْتُنَّ', person: 'You (2nd person feminine plural)', translation: 'You (females) did' },
        { complete: 'فَعَلْتُ', base: 'فَعَ', ending: 'لْتُ', person: 'I (1st person singular)', translation: 'I did' },
        { complete: 'فَعَلْنَا', base: 'فَعَ', ending: 'لْنَا', person: 'We (1st person plural)', translation: 'We did' },
    ];

    // State for game status
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [userInput, setUserInput] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);
    const [gameComplete, setGameComplete] = useState<boolean>(false);
    const [direction, setDirection] = useState<number>(1); // 1 for forward, -1 for backward
    const [showKeyboard, setShowKeyboard] = useState<boolean>(true);

    // Current verb form
    const currentForm = verbForms[currentIndex];

    // Function to handle input changes from the physical keyboard
    const handleInputChange = (value: string) => {
        // For direct input changes (like pasting), just update the value
        setUserInput(value);
        setIsCorrect(null);
        setShowAnswer(false);
    };

    // Function to convert Latin characters to Arabic
    const latinToArabic = (char: string): string | null => {
        const mapping: {[key: string]: string} = {
            // Basic letters
            'a': 'ا', 'b': 'ب', 't': 'ت', 'j': 'ج',
            'h': 'ه', 'd': 'د', 'r': 'ر', 'z': 'ز',
            's': 'س', 'f': 'ف', 'q': 'ق', 'k': 'ك',
            'l': 'ل', 'm': 'م', 'n': 'ن', 'w': 'و',
            'y': 'ي', 'g': 'ع',

            // Capital letters for special Arabic characters
            'S': 'ص', 'D': 'ض', 'T': 'ط', 'Z': 'ظ',
            'H': 'ح', 'G': 'غ', 'X': 'خ',

            // Special characters and numericals used in transliteration
            '\'': '\'', // Keep apostrophe for modifier
            '2': 'ء', '3': 'ع', '4': 'ذ',
            '5': 'خ', '6': 'ط', '7': 'ح', '8': 'غ', '9': 'ق',

            // Diacritical marks
            'i': 'ِ', 'u': 'ُ', 'o': 'ُ', 'A': 'َ',

            // Additional characters
            'e': 'ة', 'c': 'ش',

            // Special modifiers
            '^': 'ّ', // shadda
            '.': 'ْ'  // sukun
        };

        return mapping[char] || null;
    };

    // State to keep track of pending modifier
    const [pendingModifier, setPendingModifier] = useState<string>('');

    // Function to handle physical keyboard input
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const char = e.key;

        // Handle only letters, numbers and special characters
        if (char.length === 1 && /[a-zA-Z0-9'.]/.test(char)) {
            e.preventDefault();

            // Check if this is an apostrophe (modifier)
            if (char === '\'') {
                // If we already have a pending character to modify
                if (pendingModifier) {
                    // Apply the modification based on the pending character
                    let modifiedChar = '';
                    switch (pendingModifier) {
                        case 't': // ت to ث
                            modifiedChar = 'ث';
                            break;
                        case 'd': // د to ذ
                            modifiedChar = 'ذ';
                            break;
                        case 'h': // ه to ح
                            modifiedChar = 'ح';
                            break;
                        case 's': // س to ش
                            modifiedChar = 'ش';
                            break;
                        case 'g': // ع to غ
                            modifiedChar = 'غ';
                            break;
                        case 'k': // ك to خ
                            modifiedChar = 'خ';
                            break;
                        case 'H': // ح to خ (if H is already for haa)
                            modifiedChar = 'خ';
                            break;
                        case 'T': // ط to ظ
                            modifiedChar = 'ظ';
                            break;
                        case 'D': // ض to ظ
                            modifiedChar = 'ظ';
                            break;
                        default:
                            // No modification for this character
                            modifiedChar = userInput.slice(0, -1) + pendingModifier + '\'';
                    }

                    // If we found a modification, replace the last character
                    if (modifiedChar) {
                        if (modifiedChar.length === 1) {
                            setUserInput(userInput.slice(0, -1) + modifiedChar);
                        } else {
                            setUserInput(modifiedChar);
                        }
                    }

                    // Clear the pending modifier
                    setPendingModifier('');
                } else {
                    // Just add the apostrophe if there's no pending modifier
                    setUserInput(prev => prev + '\'');
                }
            } else {
                // If the last character was an apostrophe, check for modifications
                if (userInput.endsWith('\'')) {
                    let modifiedChar = '';
                    switch(char) {
                        // Common post-apostrophe modifications
                        case 'a': modifiedChar = 'أ'; break;
                        case 'i': modifiedChar = 'إ'; break;
                        case 'u': modifiedChar = 'ؤ'; break;
                        default: modifiedChar = '';
                    }

                    if (modifiedChar) {
                        // Replace the apostrophe with the modified character
                        setUserInput(prev => prev.slice(0, -1) + modifiedChar);
                    } else {
                        // No special modification, just add both characters
                        const arabicChar = latinToArabic(char);
                        if (arabicChar) {
                            setUserInput(prev => prev + arabicChar);
                        } else {
                            setUserInput(prev => prev + char);
                        }
                    }
                } else {
                    // Normal character processing
                    const arabicChar = latinToArabic(char);

                    // Store certain characters as pending modifiers
                    if (['t', 'd', 'h', 's', 'g', 'k', 'H', 'T', 'D'].includes(char)) {
                        setPendingModifier(char);
                    } else {
                        setPendingModifier('');
                    }

                    if (arabicChar) {
                        if (arabicChar === '\'') {
                            // This is a special case for apostrophe
                            setUserInput(prev => prev + arabicChar);
                        } else {
                            setUserInput(prev => prev + arabicChar);
                        }
                    } else {
                        setUserInput(prev => prev + char);
                    }
                }
            }

            setIsCorrect(null);
            setShowAnswer(false);
        }
    };

    // Function to handle keyboard input
    const handleKeyPress = (key: string) => {
        if (key === 'clear') {
            setUserInput('');
        } else if (key === '') {
            // Backspace functionality
            setUserInput(prevInput => prevInput.slice(0, -1));
        } else {
            setUserInput(prevInput => prevInput + key);
        }
        setIsCorrect(null);
        setShowAnswer(false);
    };

    // Function to check answer
    const checkAnswer = () => {
        const correct = userInput === currentForm.ending;
        setIsCorrect(correct);

        if (correct) {
            setScore(prevScore => prevScore + 1);
        }
    };

    // Function to move to next question
    const goToNext = () => {
        if (currentIndex < verbForms.length - 1) {
            setDirection(1);
            setCurrentIndex(prevIndex => prevIndex + 1);
            setUserInput('');
            setIsCorrect(null);
            setShowAnswer(false);
        } else {
            setGameComplete(true);
        }
    };

    // Function to move to previous question
    const goToPrevious = () => {
        if (currentIndex > 0) {
            setDirection(-1);
            setCurrentIndex(prevIndex => prevIndex - 1);
            setUserInput('');
            setIsCorrect(null);
            setShowAnswer(false);
        }
    };

    // Function to reset the game
    const resetGame = () => {
        setCurrentIndex(0);
        setUserInput('');
        setIsCorrect(null);
        setShowAnswer(false);
        setScore(0);
        setGameComplete(false);
        setDirection(1);
        inputRef.current?.focus();
    };

    // Focus input on mount and when current index changes
    useEffect(() => {
        if (!gameComplete) {
            inputRef.current?.focus();
        }
    }, [currentIndex, gameComplete]);

    // Animation variants
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0
        })
    };

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 p-6 min-h-[85vh]">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">تمرين الصرف - Sarf Practice</h1>

            {!gameComplete ? (
                <div className="w-full max-w-2xl mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <button
                            onClick={goToPrevious}
                            disabled={currentIndex === 0}
                            className={`px-4 py-2 rounded-md ${
                                currentIndex === 0
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        >
                            Previous
                        </button>
                        <div className="text-xl font-semibold">
                            {currentIndex + 1} / {verbForms.length}
                        </div>
                        <button
                            onClick={goToNext}
                            disabled={currentIndex === verbForms.length - 1 && !isCorrect}
                            className={`px-4 py-2 rounded-md ${
                                (currentIndex === verbForms.length - 1 && !isCorrect)
                                    ? 'bg-gray-300 cursor-not-allowed'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        >
                            Next
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-8 min-h-96 flex flex-col items-center justify-center">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="w-full text-center"
                            >
                                <div className="flex flex-col items-center justify-center space-y-8">
                                    <div className="text-center" dir="rtl">
                                        <p className="text-6xl font-bold mb-2 text-gray-800">
                                            {currentForm.base}
                                            <span className={`${isCorrect === true ? 'text-green-600' : isCorrect === false ? 'text-red-600' : 'text-gray-400'}`}>
                                                {showAnswer ? currentForm.ending : (userInput || '_____')}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="text-center" dir="ltr">
                                        <p className="text-2xl font-medium mb-2 text-gray-700">{currentForm.person}</p>
                                        <p className="text-xl text-gray-600">{currentForm.translation}</p>
                                    </div>

                                    <div className="w-full flex flex-col items-center mt-8 space-y-4">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                ref={inputRef}
                                                type="text"
                                                value={userInput}
                                                onChange={(e) => handleInputChange(e.target.value)}
                                                onKeyDown={(e) => handleKeyDown(e)}
                                                disabled={isCorrect === true}
                                                className={`w-48 p-3 text-2xl text-center border-2 rounded-md focus:outline-none focus:ring-2 ${
                                                    isCorrect === true
                                                        ? 'border-green-500 focus:ring-green-500'
                                                        : isCorrect === false
                                                            ? 'border-red-500 focus:ring-red-500'
                                                            : 'border-gray-300 focus:ring-blue-500'
                                                }`}
                                                dir="rtl"
                                            />
                                            <button
                                                onClick={() => setShowKeyboard(prev => !prev)}
                                                className="p-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                                            >
                                                {showKeyboard ? 'Hide Keyboard' : 'Show Keyboard'}
                                            </button>
                                        </div>

                                        <div className="flex space-x-4">
                                            <button
                                                onClick={checkAnswer}
                                                disabled={isCorrect === true || userInput === ''}
                                                className={`px-6 py-2 rounded-md font-semibold ${
                                                    isCorrect === true || userInput === ''
                                                        ? 'bg-gray-300 cursor-not-allowed'
                                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                                }`}
                                            >
                                                Check
                                            </button>

                                            {isCorrect === false && (
                                                <button
                                                    onClick={() => setShowAnswer(true)}
                                                    className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600"
                                                >
                                                    Show Answer
                                                </button>
                                            )}

                                            {isCorrect === true && (
                                                <button
                                                    onClick={goToNext}
                                                    className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
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

                    <div className="mt-6 text-center">
                        <p className="text-xl font-bold">Score: {score} / {verbForms.length}</p>
                    </div>

                    {showKeyboard && (
                        <div className="w-full mt-6">
                            <ArabicKeyboard onKeyPress={handleKeyPress} />
                        </div>
                    )}
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-2xl text-center">
                    <h2 className="text-3xl font-bold mb-4">Game Complete!</h2>
                    <p className="text-2xl mb-6">Your final score: {score} / {verbForms.length}</p>
                    <p className="text-xl mb-8">
                        {score === verbForms.length
                            ? 'Perfect! You mastered all the conjugations!'
                            : `You got ${score} out of ${verbForms.length} correct!`}
                    </p>
                    <button
                        onClick={resetGame}
                        className="px-8 py-3 bg-blue-600 text-white text-xl font-semibold rounded-md hover:bg-blue-700"
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default SarfGame;