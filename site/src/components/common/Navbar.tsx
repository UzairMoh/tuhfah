import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div>
                        <Link to="/" className="text-gray-800 hover:text-gray-600 font-bold">
                            Tuhfah
                        </Link>
                    </div>
                    <div>
                        <Link
                            to="/"
                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md font-bold"
                        >
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;