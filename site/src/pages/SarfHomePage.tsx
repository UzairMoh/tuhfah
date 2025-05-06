import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { sarfTables, VerbTense } from '../data/sarf';

const SarfHomePage: React.FC = () => {
    const [selectedTense, setSelectedTense] = useState<VerbTense | 'all'>('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Filter tables based on selected tense and search term (title and id only)
    const filteredTables = sarfTables.filter(table => {
        const matchesTense = selectedTense === 'all' || table.tense === selectedTense;
        const matchesSearch = table.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            table.id.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesTense && matchesSearch;
    });

    // Group tables by tense for the counter display
    const tenseCounts = sarfTables.reduce((acc, table) => {
        acc[table.tense] = (acc[table.tense] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <div className="p-3 sm:p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-6 text-center text-gray-800">Arabic Sarf Practice</h1>
            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-center text-gray-600">
                Practice Arabic verb conjugations with these interactive exercises.
            </p>

            {/* Filter controls */}
            <div className="mb-6 bg-gray-50 p-3 sm:p-4 rounded-lg border border-gray-200">
                <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-4">
                    <div className="order-2 md:order-1">
                        <label htmlFor="tense-filter" className="block text-sm font-medium text-gray-700 mb-1">Filter by Tense</label>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedTense('all')}
                                className={`px-3 py-1 rounded-full text-sm font-medium ${selectedTense === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                            >
                                All ({sarfTables.length})
                            </button>
                            {Object.entries(VerbTense).map(([, value]) => (
                                <button
                                    key={value}
                                    onClick={() => setSelectedTense(value as VerbTense)}
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${selectedTense === value ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                >
                                    {value.charAt(0).toUpperCase() + value.slice(1)} ({tenseCounts[value] || 0})
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 md:order-2">
                        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search</label>
                        <input
                            type="text"
                            id="search"
                            placeholder="Search by title or pattern..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
                        />
                    </div>
                </div>
            </div>

            {/* Results count */}
            <p className="text-gray-600 mb-3 text-sm sm:text-base">
                Showing {filteredTables.length} of {sarfTables.length} verb tables
            </p>

            {/* Tense sections */}
            {(selectedTense === 'all' ? Object.values(VerbTense) : [selectedTense]).map(tense => {
                const tablesForTense = filteredTables.filter(t => t.tense === tense);
                if (tablesForTense.length === 0) return null;

                return (
                    <div key={tense} className="mb-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800 border-b border-gray-200 pb-2">
                            {tense.charAt(0).toUpperCase() + tense.slice(1)} Tense
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                            {tablesForTense.map((table) => (
                                <Link
                                    key={table.id}
                                    to={`/sarf/${table.id}`}
                                    className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-4 sm:p-6"
                                >
                                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-800 flex items-center">
                                        <span>{table.title}</span>
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600">{table.description}</p>
                                    <div className="mt-3 sm:mt-4 flex justify-between items-center flex-wrap gap-2">
                                        <span className="text-xs sm:text-sm text-gray-500">
                                            Pattern: {table.id}
                                        </span>
                                        <span className="inline-block bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                                            {table.verbForms.length} forms
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                );
            })}

            {filteredTables.length === 0 && (
                <div className="text-center py-8">
                    <p className="text-base sm:text-lg text-gray-600">No tables match your current filters.</p>
                    <button
                        onClick={() => {setSelectedTense('all'); setSearchTerm('');}}
                        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Reset Filters
                    </button>
                </div>
            )}

            <div className="mt-8 sm:mt-12 bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">About Sarf Practice</h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                    Sarf (صرف) refers to Arabic morphology, which deals with the internal structure of words.
                    This practice tool helps you master verb conjugations by recognising patterns and memorising
                    different forms.
                </p>
                <p className="text-sm sm:text-base text-gray-700">
                    Choose a verb pattern above to begin practicing. In each exercise, you'll need to provide
                    the correct ending for the given verb form.
                </p>
            </div>
        </div>
    );
};

export default SarfHomePage;