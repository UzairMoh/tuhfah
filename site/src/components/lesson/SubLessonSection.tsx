import {SubLesson} from "../../data/lessons";
import {formatText} from "../../utils/FormatArabic";

export interface SubLessonSectionProps {
    subLessons: SubLesson[];
}

export const SubLessonSection = ({subLessons}: SubLessonSectionProps) => (
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
                                <div
                                    className="text-sm text-gray-600 bg-gray-100 p-3 rounded-lg border-l-4 border-gray-300">
                                    <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-medium">
                                        Example
                                    </div>
                                    <div className="font-arabic text-lg">
                                        {formatText(subLesson.example)}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);