import React from 'react';

interface ArabicKeyboardProps {
    onKeyPress: (key: string) => void;
}

const ArabicKeyboard: React.FC<ArabicKeyboardProps> = ({ onKeyPress }) => {
    const row1 = [
        { key: 'ا' },
        { key: 'ب' },
        { key: 'ت' },
        { key: 'ث' },
        { key: 'ج' },
        { key: 'ح' },
        { key: 'خ' },
        { key: 'د' },
        { key: 'ذ' },
        { key: 'ر' },
        { key: 'ز' },
    ];

    const row1b = [
        { key: 'س' },
        { key: 'ش' },
    ];

    const row2 = [
        { key: 'ص' },
        { key: 'ض' },
        { key: 'ط' },
        { key: 'ظ' },
        { key: 'ع' },
        { key: 'غ' },
        { key: 'ف' },
        { key: 'ق' },
        { key: 'ك' },
        { key: 'ل' },
        { key: 'م' },
    ];

    const row2b = [
        { key: 'ن' },
        { key: 'ه' },
        { key: 'و' },
        { key: 'ي' },
    ];

    const row3 = [
        { key: 'ى' },
        { key: 'ئ' },
        { key: 'ؤ' },
        { key: 'ة' },
        { key: 'إ' },
        { key: 'أ' },
        { key: 'آ' },
    ];

    const diacritics = [
        { key: 'َ', name: 'fatha' },
        { key: 'ِ', name: 'kasra' },
        { key: 'ُ', name: 'damma' },
        { key: 'ْ', name: 'sukun' },
        { key: 'ّ', name: 'shadda' },
        { key: 'ً', name: 'fathatain' },
        { key: 'ٌ', name: 'dammatain' },
        { key: 'ٍ', name: 'kasratain' },
        { key: 'ٰ', name: 'superscript alif' },
        { key: 'ٓ', name: 'maddah' },
    ];

    const handleKeyClick = (key: string) => {
        onKeyPress(key);
    };

    return (
        <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md p-2 sm:p-4 overflow-x-auto">
            <div className="mb-2 sm:mb-4 text-center">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">Arabic Keyboard</h2>
            </div>

            <div className="mb-2 sm:mb-4">
                <div className="text-xs sm:text-sm font-medium text-gray-500 mb-2 border-b pb-1 sm:pb-2">Letters</div>

                <div className="flex flex-wrap justify-center">
                    {row1.map((item, index) => (
                        <button
                            key={`row1-${index}`}
                            onClick={() => handleKeyClick(item.key)}
                            className="m-0.5 sm:m-1 w-8 sm:w-12 h-8 sm:h-10 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-150 text-center"
                        >
                            <span className="text-base sm:text-lg font-bold text-gray-800 font-arabic">{item.key}</span>
                        </button>
                    ))}
                </div>

                <div className="flex justify-center">
                    {row1b.map((item, index) => (
                        <button
                            key={`row1b-${index}`}
                            onClick={() => handleKeyClick(item.key)}
                            className="m-0.5 sm:m-1 w-8 sm:w-12 h-8 sm:h-10 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-150"
                        >
                            <span className="text-base sm:text-lg font-bold text-gray-800 font-arabic">{item.key}</span>
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center">
                    {row2.map((item, index) => (
                        <button
                            key={`row2-${index}`}
                            onClick={() => handleKeyClick(item.key)}
                            className="m-0.5 sm:m-1 w-8 sm:w-12 h-8 sm:h-10 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-150"
                        >
                            <span className="text-base sm:text-lg font-bold text-gray-800 font-arabic">{item.key}</span>
                        </button>
                    ))}
                </div>

                <div className="flex justify-center">
                    {row2b.map((item, index) => (
                        <button
                            key={`row2b-${index}`}
                            onClick={() => handleKeyClick(item.key)}
                            className="m-0.5 sm:m-1 w-8 sm:w-12 h-8 sm:h-10 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-150"
                        >
                            <span className="text-base sm:text-lg font-bold text-gray-800 font-arabic">{item.key}</span>
                        </button>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center mb-2">
                    {row3.map((item, index) => (
                        <button
                            key={`row3-${index}`}
                            onClick={() => handleKeyClick(item.key)}
                            className="m-0.5 sm:m-1 w-8 sm:w-12 h-8 sm:h-10 flex items-center justify-center bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-150"
                        >
                            <span className="text-base sm:text-lg font-bold text-gray-800 font-arabic">{item.key}</span>
                        </button>
                    ))}
                </div>
            </div>

            <div className="mb-4 sm:mb-6">
                <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1 sm:mb-2 border-b pb-1 sm:pb-2">Diacritical Marks</div>
                <div className="flex flex-wrap justify-center">
                    {diacritics.map((item, index) => (
                        <div key={`diacritic-${index}`} className="m-0.5 sm:m-1 w-10 sm:w-14">
                            <button
                                onClick={() => handleKeyClick(item.key)}
                                className="w-full h-8 sm:h-12 flex items-center justify-center bg-yellow-50 border border-yellow-200 rounded-md hover:bg-yellow-100 transition-colors duration-150 mb-0.5 sm:mb-1"
                            >
                                <span className="text-lg sm:text-2xl font-bold text-gray-800 font-arabic">{item.key}</span>
                            </button>
                            <div className="text-[0.6rem] sm:text-xs text-center text-gray-500 h-3 sm:h-4 overflow-hidden text-ellipsis">{item.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
                <button
                    onClick={() => handleKeyClick(' ')}
                    className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-150 w-20 sm:w-28"
                >
                    <span className="text-xs sm:text-base">Space</span>
                </button>
                <button
                    onClick={() => handleKeyClick('')}
                    className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-150 w-24 sm:w-32"
                >
                    <span className="text-xs sm:text-base">Backspace</span>
                </button>
                <button
                    onClick={() => handleKeyClick('clear')}
                    className="px-2 sm:px-4 py-1.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-md hover:bg-gray-100 transition-colors duration-150 w-20 sm:w-28"
                >
                    <span className="text-xs sm:text-base">Clear</span>
                </button>
            </div>
        </div>
    );
};

export default ArabicKeyboard;