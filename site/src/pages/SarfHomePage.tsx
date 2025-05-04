import React from 'react';
import { Link } from 'react-router-dom';
import { sarfTables } from '../data/sarf';

const SarfHomePage: React.FC = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Arabic Sarf Practice</h1>
            <p className="text-lg mb-8 text-center text-gray-600">
                Practice Arabic verb conjugations with these interactive exercises.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {sarfTables.map((table) => (
                    <Link
                        key={table.id}
                        to={`/sarf/${table.id}`}
                        className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow p-6"
                    >
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">{table.title}</h2>
                        <p className="text-gray-600">{table.description}</p>
                        <div className="mt-4 flex justify-end">
                            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                {table.verbForms.length} forms
                            </span>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h2 className="text-xl font-bold mb-4 text-gray-800">About Sarf Practice</h2>
                <p className="text-gray-700 mb-4">
                    Sarf (صرف) refers to Arabic morphology, which deals with the internal structure of words.
                    This practice tool helps you master verb conjugations by recognising patterns and memorising
                    different forms.
                </p>
                <p className="text-gray-700">
                    Choose a verb pattern above to begin practicing. In each exercise, you'll need to provide
                    the correct ending for the given verb form.
                </p>
            </div>
        </div>
    );
};

export default SarfHomePage;