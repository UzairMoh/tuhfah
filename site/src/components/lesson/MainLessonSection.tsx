import {Lesson} from "../../data/lessons";
import {formatText} from "../../utils/FormatArabic";

export interface MainLessonSectionProps {
    lesson: Lesson;
}

export const MainLessonSection = ({lesson}: MainLessonSectionProps) => (
    <>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                {formatText(lesson.title)}
            </h1>
            <p className="text-gray-600">
                {formatText(lesson.description)}
            </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
                {formatText(lesson.mainLesson.title)}
            </h2>
            <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                    {formatText(lesson.mainLesson.content)}
                </p>
                {lesson.mainLesson.example && (
                    <div className="bg-gray-50 rounded-md p-4 mt-4">
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">
                            Example
                        </h3>
                        <p className="font-arabic text-lg text-gray-800">
                            {formatText(lesson.mainLesson.example)}
                        </p>
                    </div>
                )}
            </div>
        </div>
    </>
);