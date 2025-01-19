import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {lessons, Lesson, SubLesson, Vocabulary} from '../data/lessons';

const LessonLayout: React.FC = () => {
    const { lessonId } = useParams<{ lessonId: string }>();

    const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchLesson = async () => {
            try {
                setIsLoading(true);
                setError(false);

                const id = Number(lessonId);

                if (isNaN(id)) {
                    setError(true);
                    return;
                }

                const lesson = lessons.find(l => l.id === id);

                if (lesson) {
                    setCurrentLesson(lesson);
                } else {
                    setError(true);
                }
            } catch (e) {
                setError(true);
                console.error('Error fetching lesson:', e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLesson().catch(console.error);
    }, [lessonId]);

    if (isLoading) {
        return (
            <div className="p-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    Loading lesson...
                </div>
            </div>
        );
    }

    if (error || !currentLesson) {
        return (
            <div className="p-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    Lesson not found
                </div>
            </div>
        );
    }

    const formatText = (text: string) => {
        const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = arabicRegex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                parts.push({
                    text: text.slice(lastIndex, match.index),
                    isArabic: false
                });
            }

            parts.push({
                text: match[0],
                isArabic: true
            });

            lastIndex = match.index + match[0].length;
        }

        if (lastIndex < text.length) {
            parts.push({
                text: text.slice(lastIndex),
                isArabic: false
            });
        }

        return parts.map((part, index) => (
            <React.Fragment key={index}>
                {part.isArabic ? (
                    <span className="font-arabic text-xl mx-1 text-gray-800">
                    {part.text}
                </span>
                ) : (
                    part.text
                )}
            </React.Fragment>
        ));
    };

    const VocabularySection = ({ vocabulary }: { vocabulary: Vocabulary[] }) => (
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

    return (
        <div className="p-4">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                        {formatText(currentLesson.title)}
                    </h1>
                    <p className="text-gray-600">
                        {formatText(currentLesson.description)}
                    </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        {formatText(currentLesson.mainLesson.title)}
                    </h2>
                    <div className="prose max-w-none">
                        <p className="text-gray-600 mb-4">
                            {formatText(currentLesson.mainLesson.content)}
                        </p>
                        {currentLesson.mainLesson.example && (
                            <div className="bg-gray-50 rounded-md p-4 mt-4">
                                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                                    Example
                                </h3>
                                <p className="font-arabic text-lg text-gray-800">
                                    {formatText(currentLesson.mainLesson.example)}
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-900 px-1">
                        Sub Lessons
                    </h2>
                    {currentLesson.subLessons.map((subLesson: SubLesson) => (
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
                {currentLesson.vocabulary && currentLesson.vocabulary.length > 0 && (
                    <VocabularySection vocabulary={currentLesson.vocabulary} />
                )}
            </div>
        </div>
    );
};

export default LessonLayout;