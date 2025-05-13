import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/user', data);
            if (response.data && response.data.message) {
                setMessage(response.data.message);
                window.alert('You registered successfully');
                navigate('/login');
            } else {
                setMessage('An error occurred');
                console.log('Invalid response data structure:', response);
            }
        } catch (error) {
            setMessage('Failed to register. Please try again.');
            console.error('Signup error:', error);
        }
    };

    return (

        <section className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 pt-8">
            <div className="container mx-auto px-4 py-12">
                <form className="lg:w-1/3 md:w-1/2 mx-auto flex flex-col">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 mr-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                            </svg>
                            Sign Up
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">Create an account to access the latest news from around the world.</p>
                    </div>
                    {message && (
                        <p className="text-red-500 text-lg mb-6 text-center font-medium">{message}</p>
                    )}
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-300">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-gray-100 dark:bg-slate-700 rounded border border-gray-300 dark:border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-base outline-none text-gray-900 dark:text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={data.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-300">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-gray-100 dark:bg-slate-700 rounded border border-gray-300 dark:border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-base outline-none text-gray-900 dark:text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={data.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="mobile" className="leading-7 text-sm text-gray-600 dark:text-gray-300">
                            Mobile
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            className="w-full bg-gray-100 dark:bg-slate-700 rounded border border-gray-300 dark:border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-base outline-none text-gray-900 dark:text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={data.mobile}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="relative mb-6">
                        <label htmlFor="password" className="leading-7 text-sm text-gray-600 dark:text-gray-300">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full bg-gray-100 dark:bg-slate-700 rounded border border-gray-300 dark:border-slate-600 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-base outline-none text-gray-900 dark:text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={data.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        className="bg-teal-500 text-white border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg font-['Roboto',_sans-serif] transition-colors duration-300"
                        onClick={submit}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </section>

    );

};

export default Signup;