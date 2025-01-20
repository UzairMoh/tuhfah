import {Component, useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, X} from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            name: 'Home',
            path: '/',
            disabled: false
        },
        {
            name: 'Practice',
            path: '/practice',
            disabled: true
        },
    ];

    class NavLink extends Component<{ item: any }> {
        render() {
            let {item} = this.props;
            if (item.disabled) {
                return (
                    <div className="relative group">
                    <span className="text-gray-400 cursor-not-allowed px-3 py-2 rounded-md text-sm font-medium">
                        {item.name}
                    </span>
                        <div
                            className="absolute left-1/2 -translate-x-1/2 -bottom-12 hidden group-hover:block bg-gray-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                            Coming Soon
                            <div
                                className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                        </div>
                    </div>
                );
            }

            return (
                <Link
                    to={item.path}
                    className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                    {item.name}
                </Link>
            );
        }
    }

    class MobileNavLink extends Component<{ item: any, onClick: any }> {
        render() {
            let {item, onClick} = this.props;
            if (item.disabled) {
                return (
                    <div className="relative group">
                    <span className="block text-gray-400 cursor-not-allowed px-3 py-2 rounded-md text-base font-medium">
                        {item.name}
                        <span className="ml-2 text-xs text-gray-400">(Coming Soon)</span>
                    </span>
                    </div>
                );
            }

            return (
                <Link
                    to={item.path}
                    onClick={onClick}
                    className="block text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                    {item.name}
                </Link>
            );
        }
    }

    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link
                            to="/"
                            className="text-xl font-bold text-gray-800 hover:text-gray-600 transition-colors duration-200"
                        >
                            Tuhfah
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {navItems.map((item) => (
                            <NavLink key={item.name} item={item}/>
                        ))}
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6"/>
                            ) : (
                                <Menu className="block h-6 w-6"/>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                    {navItems.map((item) => (
                        <MobileNavLink
                            key={item.name}
                            item={item}
                            onClick={() => setIsOpen(false)}
                        />
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;