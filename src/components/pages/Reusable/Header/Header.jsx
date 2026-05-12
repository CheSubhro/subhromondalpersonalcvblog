"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const Header = () => {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        document.body.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]);

    return (
        <>
            <header className={`p-4 flex justify-between items-center ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
                <div className="flex items-center">
                <Link href="/" legacyBehavior>
                    <a className={`font-bold text-xl ${isDarkMode ? 'text-white' : 'text-sky-700'}`}>Subhra Mondal</a>
                </Link>
                </div>
                <div className="flex items-center">
                <nav className="flex space-x-4">
                    <Link href="/" legacyBehavior>
                    <a className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-sky-700'}`}>Home</a>
                    </Link>
                    <Link href="/about" legacyBehavior>
                    <a className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-sky-700'}`}>About</a>
                    </Link>
                    <Link href="/blog" legacyBehavior>
                    <a className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-sky-700'}`}>Blog</a>
                    </Link>
                    <Link href="/projects" legacyBehavior>
                    <a className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-sky-700'}`}>Projects</a>
                    </Link>
                    <Link href="/contacts" legacyBehavior>
                    <a className={`hover:text-gray-300 ${isDarkMode ? 'text-white' : 'text-sky-700'}`}>Contact</a>
                    </Link>
                </nav>
                <div className="flex items-center ml-4">
                    <button onClick={toggleMode} className="flex items-center">
                    {isDarkMode ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5 text-white"
                        >
                        {/* Dark Mode SVG */}
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5 text-sky-700"
                        >
                        {/* Light Mode SVG */}
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                        </svg>
                    )}
                    </button>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header