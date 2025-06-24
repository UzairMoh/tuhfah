import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    return (
        <div className="flex items-center justify-center" style={{ minHeight: 'calc(100vh - 160px)' }}>
            <div className="flex flex-col items-center justify-center p-4 w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-3 sm:mb-4 text-gray-900">
                    Welcome to <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-teal via-cyan-400 to-teal bg-gradient-size animate-gradient">Tuhfah</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-center mb-8 sm:mb-12 text-gray-600">
                    Unwrapping knowledge. Inspiring growth.
                </p>

                <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-4">
                    <Link to="/duroos" className="w-full">
                        <div className="group relative p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer bg-white h-full">
                            <div className="pr-6 sm:pr-8">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                                    Study Duroos
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Explore our collection of comprehensive Islamic lessons
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/sarf" className="w-full">
                        <div className="group relative p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer bg-white h-full">
                            <div className="pr-6 sm:pr-8">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                                    Study Sarf
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Master Arabic morphology with our structured learning resources
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link to="/qisas" className="w-full">
                        <div className="group relative p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer bg-white h-full">
                            <div className="pr-6 sm:pr-8">
                                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                                    Study Qisas
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    Learn from the inspiring stories and lessons of the prophets
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;