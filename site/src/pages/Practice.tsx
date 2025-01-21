import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Lesson, lessons} from '../data/lessons';
import Flashcard from '../components/lesson/Flashcards';
import {Loading} from "../components/common/Loading";
import {Error} from "../components/common/Error";

const Practice: React.FC = () => {
    const {lessonId} = useParams<{ lessonId: string }>();
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
        return <Loading message="Loading flashcards..."/>;
    }

    if (error || !currentLesson || !currentLesson.vocabulary || currentLesson.vocabulary.length === 0) {
        return (
            <Error
                title="Practice Not Available"
                message="We couldn't find the flashcards for this lesson. Please check the lesson number and try again."
                showBackButton={true}
            />
        );
    }

    return (
        <div className="p-4">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Practice: {currentLesson.title}
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Practice the vocabulary from this lesson using flashcards.
                    </p>
                </div>
                <Flashcard vocabulary={currentLesson.vocabulary}/>
            </div>
        </div>
    );
};

export default Practice;