import {Vocabulary} from "../../data/lessons";
import {formatText} from "../../utils/FormatArabic";

export interface VocabularySectionProps {
    vocabulary: Vocabulary[];
}

export const VocabularySection = ({vocabulary}: VocabularySectionProps) => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-3 sm:p-4 md:p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 border-b pb-3">
            Vocabulary
        </h2>
        <div className="space-y-6">
            {vocabulary.map((item) => (
                <div
                    key={item.id}
                    className="group transition-all duration-200 hover:bg-gray-50 rounded-lg p-3"
                >
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <span className="font-arabic text-2xl sm:text-3xl text-gray-800">
                                {formatText(item.word)}
                            </span>
                            {item.pronunciation && (
                                <span className="text-sm text-gray-500 italic whitespace-nowrap">
                                    /{item.pronunciation}/
                                </span>
                            )}
                        </div>
                        <div className="text-base sm:text-lg text-gray-700 text-right">
                            {item.meaning}
                        </div>
                    </div>

                    {item.example && (
                        <div className="mt-3">
                            <div className="bg-gray-50 p-3 rounded-lg border-l-4 border-gray-300">
                                <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">
                                    Example
                                </div>
                                <div className="text-base flex justify-between items-center gap-2">
                                    <span className="font-arabic">
                                        {formatText(item.example.split('-')[0])}
                                    </span>
                                    <span className="text-gray-700">
                                        {item.example.split('-')[1]}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);