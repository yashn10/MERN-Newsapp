import { useState, useEffect, useContext } from 'react'
import { Link } from "react-router-dom";
import { ThemeContext } from '../context/themeContext';

const Navbar = ({ setCategory, setCountry, setLanguage, Loggedin }) => {

    const { theme, toggleTheme } = useContext(ThemeContext);
    const [country, setCountryState] = useState('us');
    const [language, setLangState] = useState('en');
    const [loggedin, setLoggedin] = useState(false);

    const category = (data) => {
        setCategory(data);
    }

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountryState(selectedCountry);
        setCountry(selectedCountry);
    }

    const handleLangChange = (e) => {
        const selectedlanguage = e.target.value;
        setLangState(selectedlanguage);
        setLanguage(selectedlanguage);
    }

    const logout = () => {
        localStorage.removeItem("username");
        window.alert("User logout successfully");
        setLoggedin(false);
    }

    useEffect(() => {
        const user = localStorage.getItem("username");
        if (user) {
            setLoggedin(true);
        } else {
            setLoggedin(false);
        }
    }, [Loggedin])


    return (

        <header className="w-full bg-white dark:bg-slate-900 shadow-md">

            <div className="container mx-auto flex items-center justify-between p-3 gap-2 md:gap-4">
                <Link to="/" className="flex items-center text-gray-900 dark:text-white">
                    <svg className="w-10 h-6 mr-1 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m6 12a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2z"></path>
                    </svg>
                    <span className="text-xl">GlobeGlow</span>
                </Link>

                <nav className="flex items-center gap-2 md:gap-3 flex-wrap md:flex-nowrap">
                    <Link
                        to="/"
                        className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer flex items-center text-sm"
                        onClick={() => category('general')}
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        Home
                    </Link>
                    <a
                        className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer flex items-center text-sm"
                        onClick={() => category('business')}
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.5V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-4.5M9 12l3-3m0 0l3 3m-3-3v9"></path>
                        </svg>
                        Business
                    </a>
                    <a
                        className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer flex items-center text-sm"
                        onClick={() => category('technology')}
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v6m0 0l-3-3m3 3l3-3m0 6v6"></path>
                        </svg>
                        Tech
                    </a>
                    <a
                        className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer flex items-center text-sm"
                        onClick={() => category('entertainment')}
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16l5-8 5 8V4"></path>
                        </svg>
                        Entertainment
                    </a>
                    <a
                        className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer flex items-center text-sm"
                        onClick={() => category('sports')}
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V8m10 8V8M3 12h18M10 20h4"></path>
                        </svg>
                        Sports
                    </a>
                    <a
                        className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer flex items-center text-sm"
                        onClick={() => category('health')}
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        Health
                    </a>
                    <a
                        className="text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 cursor-pointer flex items-center text-sm"
                        onClick={() => category('science')}
                    >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4"></path>
                        </svg>
                        Science
                    </a>
                    <select
                        className="bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-slate-600 p-1.5 w-[60px] rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={country}
                        onChange={handleCountryChange}
                    >
                        <option value="us">US</option>
                        <option value="ca">CA</option>
                        <option value="gb">UK</option>
                        <option value="au">AU</option>
                        <option value="in">IN</option>
                        <option value="de">DE</option>
                        <option value="fr">FR</option>
                        <option value="jp">JP</option>
                    </select>
                    <select
                        className="bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-slate-600 p-1.5 w-[60px] rounded text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                        value={language}
                        onChange={handleLangChange}
                    >
                        <option value="hi">HI</option>
                        <option value="en">EN</option>
                        <option value="fr">FR</option>
                        <option value="zh">ZH</option>
                        <option value="ar">AR</option>
                        <option value="de">DE</option>
                        <option value="he">HE</option>
                        <option value="ja">JA</option>
                    </select>
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300"
                        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={theme === 'light' ? 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z' : 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'}
                            ></path>
                        </svg>
                    </button>
                    <div className="relative group">
                        <button
                            className="p-2 rounded-full bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors duration-300"
                            aria-label="Profile menu"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-lg rounded-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out z-10">
                            {loggedin ? (
                                <button
                                    className="w-full text-left px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 transition-colors duration-300 rounded-lg"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            ) : (
                                <>
                                    <Link
                                        to="/login"
                                        className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 transition-colors duration-300 rounded-t-lg"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="block px-4 py-2 text-gray-900 dark:text-gray-100 hover:bg-teal-500 hover:text-white dark:hover:bg-teal-600 transition-colors duration-300 rounded-b-lg"
                                    >
                                        Signup
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </header>

    )
}

export default Navbar