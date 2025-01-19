import { FC } from 'react';
import Card from '../components/Card';
import { lessons } from "../data/lessons";

const HomePage: FC = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lessons.map((lesson) => (
                    <Card
                        key={lesson.id}
                        id={lesson.id}
                        title={lesson.title}
                        description={lesson.description}
                        infoText={lesson.infoText}
                    />
                ))}
            </div>
        </div>
    );
};

export default HomePage;