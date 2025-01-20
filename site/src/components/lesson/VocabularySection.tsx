import {Vocabulary} from "../../data/lessons";
import {formatText} from "../../utils/FormatArabic";

export interface VocabularySectionProps {
    vocabulary: Vocabulary[];
}

export const VocabularySection = ({vocabulary}: VocabularySectionProps) => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 md:p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
            Vocabulary
        </h2>
        <div className="space-y-6">
            {vocabulary.map((item) => (
                <div
                    key={item.id}
                    className="group transition-all duration-200 hover:bg-gray-50 rounded-lg p-3"
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                            <span className="font-arabic text-2xl text-gray-800 leading-relaxed">
                                {formatText(item.word)}
                            </span>
                            {item.pronunciation && (
                                <span className="text-sm text-gray-500 italic font-medium">
                                    /{item.pronunciation}/
                                </span>
                            )}
                        </div>
                        <div className="text-base font-medium text-gray-700">
                            {item.meaning}
                        </div>
                    </div>
                    {item.example && (
                        <div className="mt-3 relative">
                            <div
                                className="text-sm text-gray-600 bg-gray-100 p-3 rounded-lg border-l-4 border-gray-300">
                                <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-medium">
                                    Example
                                </div>
                                {formatText(item.example)}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default VocabularySection;