import { SubLesson, SubLessonType } from "../../data/lessons";
import { formatText } from "../../utils/FormatArabic";

export interface SubLessonSectionProps {
    subLessons: SubLesson[];
}

const TableDisplay = ({ content }: { content: string }) => {
    const rows = content.split('\n');
    const solarLetters = rows[0].split('،').map(item => item.trim());
    const lunarLetters = rows[1].split('،').map(item => item.trim());

    const renderLetters = (letters: string[]) => (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-2">
            {letters.map((letter, index) => (
                <div
                    key={index}
                    className="flex items-center justify-center bg-white hover:bg-gray-50 rounded-md border border-gray-200 h-12 sm:h-16 transition-colors duration-200"
                >
                    <span className="font-arabic text-lg sm:text-xl md:text-2xl text-gray-800">
                        {formatText(letter)}
                    </span>
                </div>
            ))}
        </div>
    );

    return (
        <div className="rounded-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="border-b md:border-b-0 md:border-r border-gray-200">
                    <div className="bg-gray-50 p-2 sm:p-3 border-b border-gray-200">
                        <div className="text-center">
                            <h4 className="text-sm font-semibold text-gray-800">
                                Solar Letters
                            </h4>
                            <div className="text-xs sm:text-sm text-gray-600 font-arabic mt-1">
                                الحروف الشمسية
                            </div>
                        </div>
                    </div>
                    {renderLetters(solarLetters)}
                </div>
                <div>
                    <div className="bg-gray-50 p-2 sm:p-3 border-b border-gray-200">
                        <div className="text-center">
                            <h4 className="text-sm font-semibold text-gray-800">
                                Lunar Letters
                            </h4>
                            <div className="text-xs sm:text-sm text-gray-600 font-arabic mt-1">
                                الحروف القمرية
                            </div>
                        </div>
                    </div>
                    {renderLetters(lunarLetters)}
                </div>
            </div>
        </div>
    );
};

export const SubLessonSection = ({ subLessons }: SubLessonSectionProps) => (
    <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 md:p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
            Sub Lessons
        </h2>
        <div className="space-y-6">
            {subLessons.map((subLesson: SubLesson) => (
                <div
                    key={subLesson.id}
                    className="group transition-all duration-200 hover:bg-gray-50 rounded-lg p-3"
                >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {formatText(subLesson.title)}
                    </h3>
                    <div className="prose max-w-none">
                        <div className="text-gray-600 leading-relaxed">
                            {formatText(subLesson.content)}
                        </div>

                        {subLesson.example && (
                            <div className="mt-4 relative">
                                <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide font-medium">
                                    Example
                                </div>
                                {subLesson.type === SubLessonType.TABLE ? (
                                    <TableDisplay content={subLesson.example} />
                                ) : (
                                    <div className="text-sm text-gray-600 bg-gray-100 p-3 rounded-lg border-l-4 border-gray-300">
                                        <div className="font-arabic text-lg">
                                            {formatText(subLesson.example)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);