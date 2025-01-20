import {SubLesson} from "../../data/lessons";
import {formatText} from "../../utils/FormatArabic";

export interface SubLessonSectionProps {
    subLessons: SubLesson[];
}

export const SubLessonSection = ({subLessons}: SubLessonSectionProps) => (
    <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 px-1">
            Sub Lessons
        </h2>
        {subLessons.map((subLesson: SubLesson) => (
            <div
                key={subLesson.id}
                className="bg-white rounded-lg border border-gray-200 shadow-sm p-6"
            >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {formatText(subLesson.title)}
                </h3>
                <div className="prose max-w-none">
                    <p className="text-gray-600 mb-4">
                        {formatText(subLesson.content)}
                    </p>
                    {subLesson.example && (
                        <div className="bg-gray-50 rounded-md p-4 mt-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                Example
                            </h4>
                            <p className="font-arabic text-lg text-gray-800">
                                {formatText(subLesson.example)}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        ))}
    </div>
);