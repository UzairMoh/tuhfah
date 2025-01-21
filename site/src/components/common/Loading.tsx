import {Loader2} from 'lucide-react';

interface LoadingProps {
    title?: string;
    message?: string;
}

export const Loading = ({
                            title = "Loading Lesson",
                            message = "Please wait while we prepare your content..."
                        }: LoadingProps) => (
    <div className="w-full min-h-[70vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full">
            <div className="flex flex-col items-center text-center space-y-6">
                <div className="relative">
                    <div className="rounded-full bg-indigo-50 p-6">
                        <Loader2 className="h-12 w-12 text-indigo-600 animate-spin"/>
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
            </div>
        </div>
    </div>
);