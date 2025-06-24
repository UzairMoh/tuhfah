import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProphetStory, prophetStories } from '../data/qisas';
import { StoryHeaderSection } from "../components/qisas/StoryHeaderSection";
import { StorySentencesSection } from "../components/qisas/StorySentencesSection";
import { Loading } from "../components/common/Loading";
import { Error } from "../components/common/Error";
import { ArrowLeft } from 'lucide-react';

const QisasLayout: React.FC = () => {
    const { storyId } = useParams<{ storyId: string }>();
    const navigate = useNavigate();
    const [currentStory, setCurrentStory] = useState<ProphetStory | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchStory = async () => {
            try {
                setIsLoading(true);
                setError(false);

                const id = Number(storyId);

                if (isNaN(id)) {
                    setError(true);
                    return;
                }

                const story = prophetStories.find(s => s.id === id);

                if (story) {
                    setCurrentStory(story);
                } else {
                    setError(true);
                }
            } catch (e) {
                setError(true);
                console.error('Error fetching story:', e);
            } finally {
                setIsLoading(false);
            }
        };

        fetchStory().catch(console.error);
    }, [storyId]);

    const handleBackToStories = () => {
        navigate('/qisas');
    };

    if (isLoading) {
        return <Loading message="Loading prophet story..." />;
    }

    if (error || !currentStory) {
        return (
            <Error
                title="Story Not Found"
                message="We couldn't find the prophet story you're looking for. Please check the story number and try again."
                showBackButton={true}
            />
        );
    }

    return (
        <div className="p-4">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleBackToStories}
                            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                        >
                            <ArrowLeft size={20} />
                            <span className="text-sm">Back to Stories</span>
                        </button>
                    </div>
                </div>

                <StoryHeaderSection story={currentStory} />
                <StorySentencesSection sentences={currentStory.sentences} />
            </div>
        </div>
    );
};

export default QisasLayout;