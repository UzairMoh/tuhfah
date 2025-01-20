import {Vocabulary} from "../../data/lessons";
import {formatText} from "../../utils/FormatArabic";

export interface VocabularySectionProps {
    vocabulary: Vocabulary[];
}

export const VocabularySection = ({vocabulary}: VocabularySectionProps) => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Vocabulary
        </h2>
        <div className="grid gap-4">
            {vocabulary.map((item) => (
                <div
                    key={item.id}
                    className="border-b border-gray-100 last:border-0 pb-3 last:pb-0"
                >
                    <div className="flex items-center justify-between mb-2">
                        <span className="font-arabic text-xl text-gray-800">
                            {formatText(item.word)}
                        </span>
                        {item.pronunciation && (
                            <span className="text-sm text-gray-500 italic">
                                /{item.pronunciation}/
                            </span>
                        )}
                    </div>
                    <div className="text-gray-600">{item.meaning}</div>
                    {item.example && (
                        <div className="mt-2 text-sm bg-gray-50 p-2 rounded">
                            {formatText(item.example)}
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);