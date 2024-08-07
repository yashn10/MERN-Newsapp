import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = ({ Logged }) => {

    const navigate = useNavigate();

    const [data, setdata] = useState({
        email: "", password: ""
    })
    const [message, setMessage] = useState("");

    const handlechange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    }

    const logged = (data) => {
        Logged(data);
    }

    const submit = async (e) => {
        e.preventDefault();

        const response = await axios.post("http://localhost:5000/login", data);

        if (response.data && response.data.message) {
            setMessage(response.data.message);
            if (response.data.user && response.data.user.email) {
                localStorage.setItem("username", response.data.user.email);
                console.log("Email saved in localStorage:", response.data.user.email);
                logged(true);
                navigate("/");
            } else {
                console.log("Email not found in response data");
            }
        } else {
            setMessage("An error occurred");
            console.log("Invalid response data structure:", response);
        }
    }

    return (

        <section className="text-gray-400 bg-gray-900 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

                <form className="lg:w-1/3 md:w-1/2 flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0">
                    {message && <p className="text-red-500 text-lg mb-5 text-center font-medium title-font mt-4" >{message}</p>}
                    <h2 className="text-white text-lg mb-1 font-medium title-font">Login</h2>
                    <p className="leading-relaxed mb-5">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-gray-400">Email</label>
                        <input type="email" id="name" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={data.email} onChange={handlechange} />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-gray-400">Password</label>
                        <input type="password" id="email" name="password" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={data.password} onChange={handlechange} />
                    </div>
                    <button className="text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg" onClick={submit}>Login</button>
                    <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                </form>

            </div>
        </section>

    )
}

export default Login