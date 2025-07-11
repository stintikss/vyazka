import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { HeaderText } from '../../shared/ui/Text';
import { motion } from 'framer-motion';
import { headerVariants } from '../../shared/animations/Animations';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <motion.header
                key={location.pathname}
                className="w-full min-h-24 bg-[#23236e] relative border-b-1 border-b-white"
                variants={headerVariants}
                initial='hidden'
                animate='visible'
            >
                <div className="flex items-center justify-between w-full py-4 px-4 md:px-0">
                    <div className="ml-4 md:ml-8">
                        <HeaderText />
                    </div>

                    {isMobile ? (
                        <div className="mr-4">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-white text-2xl focus:outline-none"
                            >
                                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                            </button>
                        </div>
                    ) : (
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            <ul className="flex gap-6">
                                <Link
                                    to='/home'
                                    className={`text-lg font-semibold hover:bg-white/10 px-4 py-2 rounded transition ${location.pathname === '/home' ? 'text-[red]' : 'text-white'}`}
                                >
                                    Главная
                                </Link>
                                <Link
                                    to='/calculation'
                                    className={`text-lg font-semibold hover:bg-white/10 px-4 py-2 rounded transition ${location.pathname === '/calculation' ? 'text-[red]' : 'text-white'}`}
                                >
                                    Рассчеты
                                </Link>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Mobile Menu */}
                {isMobile && isMobileMenuOpen && (
                    <motion.div
                        className="bg-[#23236e] w-full pb-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ul className="flex flex-col items-center gap-4">
                            <Link
                                to='/home'
                                className={`text-lg font-semibold hover:bg-white/10 w-full text-center py-2 rounded transition ${location.pathname === '/home' ? 'text-[red]' : 'text-white'}`}
                                onClick={toggleMobileMenu}
                            >
                                Главная
                            </Link>
                            <Link
                                to='/calculation'
                                className={`text-lg font-semibold hover:bg-white/10 w-full text-center py-2 rounded transition ${location.pathname === '/calculation' ? 'text-[red]' : 'text-white'}`}
                                onClick={toggleMobileMenu}
                            >
                                Рассчеты
                            </Link>
                        </ul>
                    </motion.div>
                )}
            </motion.header>
        </>
    );
};

export default Header;