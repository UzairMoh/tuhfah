import {Lesson} from "../../data/lessons";
import {formatText} from "../../utils/FormatArabic";

export interface MainLessonSectionProps {
    lesson: Lesson;
}

export const MainLessonSection = ({lesson}: MainLessonSectionProps) => (
    <div className="space-y-6">
        <div
            className="bg-white rounded-lg border border-gray-200 shadow-md p-4 md:p-6 transition-all duration-200 hover:bg-gray-50">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 pb-3 border-b">
                {formatText(lesson.title)}
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
                {formatText(lesson.description)}
            </p>
        </div>

        <div
            className="bg-white rounded-lg border border-gray-200 shadow-md p-4 md:p-6 transition-all duration-200 hover:bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b">
                {formatText(lesson.mainLesson.title)}
            </h2>
            <div className="prose max-w-none space-y-6">
                <div className="text-gray-700 text-lg leading-relaxed">
                    {formatText(lesson.mainLesson.content)}
                </div>

                {lesson.mainLesson.example && (
                    <div className="mt-6 relative">
                        <div className="bg-gray-100 p-3 rounded-lg border-l-4 border-gray-300">
                            <div className="text-xs text-gray-500 mb-1 uppercase tracking-wide font-medium">
                                Example
                            </div>
                            <div className="font-arabic text-xl text-gray-800 leading-relaxed">
                                {formatText(lesson.mainLesson.example)}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
);

export default MainLessonSection;