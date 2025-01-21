import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Lesson, lessons} from '../data/lessons';
import {MainLessonSection} from "../components/lesson/MainLessonSection";
import {SubLessonSection} from "../components/lesson/SubLessonSection";
import {VocabularySection} from "../components/lesson/VocabularySection";
import {Loading} from "../components/common/Loading";
import {Error} from "../components/common/Error";
import {BookOpenCheck} from 'lucide-react';

const LessonLayout: React.FC = () => {
    const {lessonId} = useParams<{ lessonId: string }>();
    const navigate = useNavigate();
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

    const handlePracticeClick = () => {
        navigate(`/practice/${lessonId}`);
    };

    if (isLoading) {
        return <Loading message="Loading lesson content..."/>;
    }

    if (error || !currentLesson) {
        return (
            <Error
                title="Lesson Not Found"
                message="We couldn't find the lesson you're looking for. Please check the lesson number and try again."
                showBackButton={true}
            />
        );
    }

    return (
        <div className="p-4">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-gray-900">
                        {currentLesson.title}
                    </h1>
                    {currentLesson.vocabulary && currentLesson.vocabulary.length > 0 && (
                        <button
                            onClick={handlePracticeClick}
                            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-sm"
                        >
                            <BookOpenCheck size={20}/>
                            Practice Vocabulary
                        </button>
                    )}
                </div>
                <MainLessonSection lesson={currentLesson}/>
                <SubLessonSection subLessons={currentLesson.subLessons}/>
                {currentLesson.vocabulary && currentLesson.vocabulary.length > 0 && (
                    <VocabularySection vocabulary={currentLesson.vocabulary}/>
                )}
            </div>
        </div>
    );
};

export default LessonLayout;