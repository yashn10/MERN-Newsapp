import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ Logged }) => {

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const logged = (data) => {
        Logged(data);
    };

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', data);
            if (response.data && response.data.message) {
                setMessage(response.data.message);
                if (response.data.user && response.data.user.email) {
                    localStorage.setItem('username', response.data.user.email);
                    console.log('Email saved in localStorage:', response.data.user.email);
                    logged(true);
                    navigate('/');
                } else {
                    console.log('Email not found in response data');
                }
            } else {
                setMessage('An error occurred');
                console.log('Invalid response data structure:', response);
            }
        } catch (error) {
            setMessage('Failed to login. Email and password required.');
            console.error('Login error:', error);
        }
    };

    return (

        <section className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300 pt-16 min-h-[90vh]">
            <div className="container mx-auto px-4 py-12">
                <form className="lg:w-1/3 md:w-1/2 mx-auto flex flex-col">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold font-['Roboto',_sans-serif] flex items-center justify-center mb-4">
                            <svg className="w-8 h-8 mr-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                            </svg>
                            Login
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300">Sign in to access the latest news from around the world.</p>
                    </div>
                    {message && (
                        <p className="text-red-500 text-lg mb-6 text-center font-medium font-['Roboto',_sans-serif]">{message}</p>
                    )}
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
                        Login
                    </button>
                </form>
            </div>
        </section>

    );
};

export default Login;