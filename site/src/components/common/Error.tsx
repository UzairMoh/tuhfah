import {AlertCircle} from 'lucide-react';

interface ErrorProps {
    title?: string;
    message?: string;
    showBackButton?: boolean;
    onBackClick?: () => void;
    buttonText?: string;
}

export const Error = ({
                          title = "Lesson Not Found",
                          message = "We couldn't find the lesson you're looking for. Please check the lesson number and try again.",
                          showBackButton = true,
                          onBackClick = () => window.location.href = '/',
                          buttonText = "Return to Lessons"
                      }: ErrorProps) => (
    <div className="w-full min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                    <div className="rounded-full bg-red-50 p-6">
                        <AlertCircle className="h-12 w-12 text-red-500"/>
                    </div>
                </div>

                <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-base">
                        {message}
                    </p>
                </div>

                {showBackButton && (
                    <button
                        onClick={onBackClick}
                        className="mt-2 px-6 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                    >
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    </div>
);