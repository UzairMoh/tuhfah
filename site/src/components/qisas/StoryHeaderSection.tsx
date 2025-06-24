import { ProphetStory } from "../../data/qisas";
import { formatText } from "../../utils/FormatArabic";

export interface StoryHeaderSectionProps {
    story: ProphetStory;
}

export const StoryHeaderSection = ({ story }: StoryHeaderSectionProps) => (
    <div className="space-y-6">
        <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 sm:p-6 md:p-8 transition-all duration-200 hover:bg-gray-50">
            <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
                    {story.prophetName}
                </h1>
                <div className="font-arabic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-600 mb-3 sm:mb-4">
                    {formatText(story.prophetNameArabic)}
                </div>
                <div className="h-1 w-16 sm:w-20 md:w-24 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
            </div>

            <div className="text-center space-y-3 sm:space-y-4">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-tight">
                    {story.storyTitle}
                </h2>
                <div className="font-arabic text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                    {formatText(story.storyTitleArabic)}
                </div>
            </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-md p-4 sm:p-6 md:p-8 transition-all duration-200 hover:bg-gray-50">
            <div className="mb-4 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 pb-2 sm:pb-3 border-b border-gray-200">
                    Story Overview
                </h3>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                    {formatText(story.description)}
                </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-xl border border-blue-100">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
                    <div>
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                            Interactive Learning Experience
                        </h4>
                        <p className="text-xs sm:text-sm text-gray-600">
                            Engage with Arabic text through word-by-word translations
                        </p>
                    </div>
                    <div className="text-left sm:text-right">
                        <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                            {story.sentences.length}
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide">
                            Sentences
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);