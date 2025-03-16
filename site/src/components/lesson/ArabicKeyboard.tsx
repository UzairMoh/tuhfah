import React from 'react';

interface ArabicKeyboardProps {
    onKeyPress: (key: string) => void;
}

const ArabicKeyboard: React.FC<ArabicKeyboardProps> = ({ onKeyPress }) => {
    // First row - Basic Arabic letters (alif to yaa)
    const row1 = [
        { key: 'ا', label: 'a' },
        { key: 'ب', label: 'b' },
        { key: 'ت', label: 't' },
        { key: 'ث', label: 't\'' },
        { key: 'ج', label: 'j' },
        { key: 'ح', label: 'H' },
        { key: 'خ', label: 'k\'' },
        { key: 'د', label: 'd' },
        { key: 'ذ', label: 'd\'' },
        { key: 'ر', label: 'r' },
        { key: 'ز', label: 'z' },
        { key: 'س', label: 's' },
        { key: 'ش', label: 's\'' },
    ];

    // Second row - More Arabic letters
    const row2 = [
        { key: 'ص', label: 'S' },
        { key: 'ض', label: 'D' },
        { key: 'ط', label: 'T' },
        { key: 'ظ', label: 'T\'' },
        { key: 'ع', label: 'g' },
        { key: 'غ', label: 'g\'' },
        { key: 'ف', label: 'f' },
        { key: 'ق', label: 'q' },
        { key: 'ك', label: 'k' },
        { key: 'ل', label: 'l' },
        { key: 'م', label: 'm' },
        { key: 'ن', label: 'n' },
        { key: 'ه', label: 'h' },
        { key: 'و', label: 'w' },
        { key: 'ي', label: 'y' },
    ];

    // Third row - Special characters (alif variants, diacritics)
    const row3 = [
        { key: 'ى', label: 'ā' },
        { key: 'ئ', label: 'i\'' },
        { key: 'ؤ', label: 'u\'' },
        { key: 'ة', label: 'h̄' },
        { key: 'إ', label: 'i' },
        { key: 'أ', label: 'a\'' },
        { key: 'آ', label: 'ā' },
        { key: 'َ', label: 'a' }, // Fatha
        { key: 'ِ', label: 'i' }, // Kasra
        { key: 'ُ', label: 'u' }, // Damma
        { key: 'ْ', label: '.' }, // Sukun
        { key: 'ّ', label: '^' }, // Shadda
        { key: 'ً', label: 'an' }, // Tanwin Fath
    ];

    // Handle key press
    const handleKeyClick = (key: string) => {
        onKeyPress(key);
    };

    return (
        <div className="w-full max-w-5xl mx-auto p-4 bg-gray-100 rounded-lg shadow-md">
            <div className="mb-4 text-center">
                <h2 className="text-xl font-semibold text-gray-700">Arabic Keyboard</h2>
            </div>

            {/* Row 1 */}
            <div className="flex flex-wrap justify-center mb-2">
                {row1.map((item, index) => (
                    <button
                        key={`row1-${index}`}
                        onClick={() => handleKeyClick(item.key)}
                        className="m-1 w-14 h-14 flex flex-col items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <span className="text-2xl font-bold text-gray-800">{item.key}</span>
                        <span className="text-xs text-gray-500">{item.label}</span>
                    </button>
                ))}
            </div>

            {/* Row 2 */}
            <div className="flex flex-wrap justify-center mb-2">
                {row2.map((item, index) => (
                    <button
                        key={`row2-${index}`}
                        onClick={() => handleKeyClick(item.key)}
                        className="m-1 w-14 h-14 flex flex-col items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <span className="text-2xl font-bold text-gray-800">{item.key}</span>
                        <span className="text-xs text-gray-500">{item.label}</span>
                    </button>
                ))}
            </div>

            {/* Row 3 */}
            <div className="flex flex-wrap justify-center mb-2">
                {row3.map((item, index) => (
                    <button
                        key={`row3-${index}`}
                        onClick={() => handleKeyClick(item.key)}
                        className="m-1 w-14 h-14 flex flex-col items-center justify-center bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <span className="text-2xl font-bold text-gray-800">{item.key}</span>
                        <span className="text-xs text-gray-500">{item.label}</span>
                    </button>
                ))}
            </div>

            {/* Extra buttons */}
            <div className="flex justify-center">
                <button
                    onClick={() => handleKeyClick(' ')}
                    className="m-1 px-8 py-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Space
                </button>
                <button
                    onClick={() => handleKeyClick('')} // This will be used for backspace functionality in the parent
                    className="m-1 px-8 py-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Backspace
                </button>
                <button
                    onClick={() => handleKeyClick('clear')} // This will be used for clear functionality in the parent
                    className="m-1 px-8 py-3 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Clear
                </button>
            </div>
        </div>
    );
};

export default ArabicKeyboard;