import React, { useState, useEffect } from 'react';
import { Info, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface InfoCardProps {
    id: number;
    title: string;
    description: string;
    infoText: string;
    className?: string;
}

const Card: React.FC<InfoCardProps> = ({
                                           id,
                                           title,
                                           description,
                                           infoText,
                                           className = '',
                                       }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleInfoClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (isMobile) {
            setShowModal(true);
        }
    };

    const formatText = (text: string) => {
        const arabicRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g;

        return text.split(arabicRegex).map((part, index, array) => {
            const arabicPart = text.slice(
                text.indexOf(part) + part.length,
                index < array.length - 1 ? text.indexOf(array[index + 1]) : undefined
            ).match(arabicRegex);

            return (
                <React.Fragment key={index}>
                    {part}
                    {arabicPart && (
                        <span className="font-arabic text-xl mx-1 text-gray-800">
                            {arabicPart[0]}
                        </span>
                    )}
                </React.Fragment>
            );
        });
    };

    const Modal = () => (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={(e) => {
                e.preventDefault();
                setShowModal(false);
            }}
        >
            <div
                className="bg-white rounded-lg p-6 max-w-sm w-full relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2"
                    onClick={(e) => {
                        e.preventDefault();
                        setShowModal(false);
                    }}
                >
                    <X className="h-6 w-6 text-gray-400" />
                </button>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{formatText(infoText)}</p>
            </div>
        </div>
    );

    return (
        <>
            <Link to={`/lesson/${id}`}>
                <div
                    className={`
                        relative 
                        p-6 
                        rounded-lg 
                        border 
                        border-gray-200 
                        shadow-sm 
                        hover:shadow-md 
                        transition-shadow 
                        duration-300 
                        cursor-pointer 
                        bg-white
                        ${className}
                    `}
                >
                    <div
                        className="absolute top-2 right-2"
                        onClick={handleInfoClick}
                        onMouseEnter={() => !isMobile && setShowTooltip(true)}
                        onMouseLeave={() => !isMobile && setShowTooltip(false)}
                    >
                        <Info className="h-5 w-5 text-gray-400 hover:text-gray-600" />

                        {!isMobile && showTooltip && (
                            <div className="absolute right-0 mt-2 w-64 p-2 bg-gray-900 text-white text-sm rounded-md shadow-lg z-10">
                                {formatText(infoText)}
                                <div className="absolute -top-1 right-2 w-2 h-2 bg-gray-900 rotate-45" />
                            </div>
                        )}
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{formatText(title)}</h3>
                    <p className="text-gray-600">{formatText(description)}</p>
                </div>
            </Link>

            {showModal && <Modal />}
        </>
    );
};

export default Card;