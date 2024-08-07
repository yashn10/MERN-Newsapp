import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Navbar = ({ setCategory, setCountry, Loggedin }) => {

    const [country, setCountryState] = useState('us');
    const [loggedin, setLoggedin] = useState(false);

    const category = (data) => {
        setCategory(data);
    }

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        setCountryState(selectedCountry);
        setCountry(selectedCountry);
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

        <header className="text-gray-400 bg-gray-900 fixed w-full z-10 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to={"/"} className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    <span className="ml-3 text-xl">QuickNews</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={"/"} className="mr-5 hover:text-white cursor-pointer" onClick={() => { category('general') }}>Home</Link>
                    <a className="mr-5 hover:text-white cursor-pointer" onClick={() => { category('business') }}>Business</a>
                    <a className="mr-5 hover:text-white cursor-pointer" onClick={() => { category('entertainment') }}>Entertainment</a>
                    <a className="mr-5 hover:text-white cursor-pointer" onClick={() => { category('sports') }}>Sports</a>
                    <a className="mr-5 hover:text-white cursor-pointer" onClick={() => { category('health') }}>Health</a>
                    <a className="mr-5 hover:text-white cursor-pointer" onClick={() => { category('science') }}>Science</a>
                    <div className="ml-5 relative">
                        <select
                            className="bg-gray-800 text-white border border-gray-700 p-2 rounded focus:outline-none"
                            value={country}
                            onChange={handleCountryChange}
                        >
                            <option value="us">United States</option>
                            <option value="ca">Canada</option>
                            <option value="gb">United Kingdom</option>
                            <option value="au">Australia</option>
                            <option value="in">India</option>
                            <option value="de">Germany</option>
                            <option value="fr">France</option>
                            <option value="jp">Japan</option>
                        </select>
                    </div>
                </nav>
                {loggedin ? (
                    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0" onClick={logout}>Logout
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                ) :
                    <>
                        <Link to={"/login"} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 mr-2 md:mt-0">Login
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                        <Link to={"/signup"} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Signup
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    </>
                }
            </div>
        </header>

    )
}

export default Navbar