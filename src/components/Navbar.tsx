import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleAboutClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
            // Optional: scroll to top after navigation, though usually automatic
            setTimeout(() => window.scrollTo(0, 0), 100);
        }
        setIsOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <Link to="/" className="hover:opacity-80 transition-opacity">
                            <img src={logo} alt="SAMHUNG GRAPHICS Logo" className="w-28 h-28" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <button onClick={handleAboutClick} className="text-sm text-gray-700 hover:text-black transition-colors focus:outline-none">關於</button>
                        <a href="https://samhung000.notion.site/HUNG-S-CREATIONS-275b915b17d48027a243dc1d7ee7895a" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-black transition-colors">作品</a>
                        <Link to="/maintenance" className="text-sm text-gray-700 hover:text-black transition-colors">業務</Link>
                        <a href="#Contact-Section-3" className="text-sm bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">聯絡</a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-600 hover:text-black focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <button onClick={handleAboutClick} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg focus:outline-none">關於</button>
                        <a href="https://samhung000.notion.site/HUNG-S-CREATIONS-275b915b17d48027a243dc1d7ee7895a" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg">作品</a>
                        <Link to="/maintenance" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>業務</Link>
                        <a href="#Contact-Section-3" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-lg" onClick={() => setIsOpen(false)}>聯絡</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
