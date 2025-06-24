import React from 'react';
import { StorySentence, WordMapping } from "../../data/qisas";
import { formatText } from "../../utils/FormatArabic";

export interface StorySentencesSectionProps {
    sentences: StorySentence[];
}

interface ProcessedWord {
    arabic: string;
    english: string;
    span: number;
    position: number;
    isCompound?: boolean;
    isCompoundContinuation?: boolean;
    isImplied?: boolean;
}

const WordByWordSentence: React.FC<{ sentence: StorySentence }> = ({ sentence }) => {
    const words = sentence.arabicText.split(' ');

    const createWordAlignment = () => {
        const arabicWords = words.map((word, index) => ({
            arabic: word,
            position: index
        }));

        const processedWords: ProcessedWord[] = [];
        const compoundGroups = new Map<number, WordMapping[]>();

        sentence.wordMappings.forEach(mapping => {
            if (mapping.isCompound && mapping.compoundGroup) {
                if (!compoundGroups.has(mapping.compoundGroup)) {
                    compoundGroups.set(mapping.compoundGroup, []);
                }
                compoundGroups.get(mapping.compoundGroup)!.push(mapping);
            }
        });

        sentence.wordMappings.forEach((mapping: WordMapping) => {
            if (mapping.arabicWord === "") {
                processedWords.push({
                    arabic: "",
                    english: mapping.englishTranslation,
                    span: 1,
                    position: mapping.position,
                    isImplied: true
                });
                return;
            }

            if (mapping.isCompound && mapping.compoundGroup) {
                const group = compoundGroups.get(mapping.compoundGroup);
                group!.sort((a: WordMapping, b: WordMapping) => a.position - b.position);
                const isFirstInGroup = group![0].arabicWord === mapping.arabicWord;

                if (isFirstInGroup) {
                    processedWords.push({
                        arabic: mapping.arabicWord,
                        english: mapping.englishTranslation,
                        span: group!.length,
                        position: mapping.position,
                        isCompound: true
                    });
                } else {
                    processedWords.push({
                        arabic: mapping.arabicWord,
                        english: '',
                        span: 1,
                        position: mapping.position,
                        isCompoundContinuation: true
                    });
                }
            } else {
                processedWords.push({
                    arabic: mapping.arabicWord,
                    english: mapping.englishTranslation,
                    span: 1,
                    position: mapping.position
                });
            }
        });

        return { arabicWords, processedWords };
    };

    const { arabicWords, processedWords } = createWordAlignment();

    return (
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 rounded-xl border border-gray-200">
            <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide font-medium mb-4 text-center">
                Word-by-Word Translation
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6" dir="rtl">
                {arabicWords.map((item, index) => (
                    <div key={index} className="text-center">
                        <div className="font-arabic text-xl sm:text-2xl md:text-3xl text-gray-800 px-2 py-1 bg-white rounded-lg shadow-sm border border-gray-200 min-w-[3rem] sm:min-w-[4rem]">
                            {formatText(item.arabic)}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
                {processedWords.map((item: ProcessedWord, wordIndex: number) => {
                    if (item.isCompoundContinuation) return null;

                    return (
                        <div key={wordIndex} className="text-center" style={{
                            gridColumn: item.span > 1 ? `span ${item.span}` : 'auto'
                        }}>
                            <div className={`text-sm sm:text-base md:text-lg font-medium px-2 py-2 rounded-lg min-h-[2rem] sm:min-h-[2.5rem] flex items-center justify-center ${
                                item.english
                                    ? 'text-blue-700 bg-blue-100 border border-blue-200'
                                    : 'text-transparent bg-transparent'
                            }`} style={{
                                minWidth: item.span > 1 ? `${item.span * 3.5}rem` : '3rem',
                                width: item.span > 1 ? `${item.span * 4}rem` : 'auto'
                            }}>
                                {item.english}
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="border-t border-gray-300 pt-4">
                <div className="text-xs sm:text-sm text-gray-600 uppercase tracking-wide font-medium mb-2 text-center">
                    Complete Translation
                </div>
                <div className="text-base sm:text-lg md:text-xl text-gray-800 font-medium text-center leading-relaxed">
                    {sentence.englishTranslation}
                </div>
            </div>
        </div>
    );
};

export const StorySentencesSection = ({ sentences }: StorySentencesSectionProps) => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 sm:p-6 md:p-8">
        <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Interactive Story
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                Each sentence is broken down word-by-word to help you understand Arabic structure and vocabulary.
            </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
            {sentences.map((sentence: StorySentence, sentenceIndex: number) => (
                <div
                    key={sentence.id}
                    className="group transition-all duration-200"
                >
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm sm:text-base font-bold">
                                {sentenceIndex + 1}
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                                Sentence {sentence.id}
                            </h3>
                        </div>
                    </div>
                    <WordByWordSentence sentence={sentence} />
                </div>
            ))}
        </div>
    </div>
);