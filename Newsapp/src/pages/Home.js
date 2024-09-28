import React, { useState, useEffect } from 'react'
import axios from "axios";


const Home = ({ category, country, language }) => {

    const [news, setnews] = useState([]);


    const visit = (url) => {
        const user = localStorage.getItem("username");
        if (user) {
            window.open(url, "_blank")
        } else {
            window.alert("Login required");
        }
    }


    useEffect(() => {
        const fetchNews = async () => {
            const apikey = process.env.REACT_APP_NEWSAPI_SECRETKEY;
            const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${country}&max=50&apikey=${apikey}`;

            try {
                const response = await axios.get(url);
                console.log(response);
                setnews(response.data.articles)
            } catch (error) {
                console.error("Error fetching news:", error);
                window.alert("Failed to fetch news. Please try again later.");
            }
        };

        fetchNews();
    }, [category, country, language]);


    return (

        <section className="text-gray-600 body-font">
            <div className="container px-24 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl title-font mb-4 text-gray-900 tracking-widest hover:text-purple-800 font-bold">LATEST NEWS</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base hover:text-purple-800">Stay updated with the latest news in various categories. Our news app brings you the top headlines from trusted sources, covering business, entertainment, sports, health, and science. Dive into the stories that matter to you and stay informed about the world around you.</p>
                </div>
                <div className="flex flex-wrap -m-4">

                    {news.map((data, index) => {
                        return (
                            <div className="p-4 lg:w-1/2" key={index}>
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 hover:scale-110 duration-500" src={data.image ? data.image : '/news.jpg'} />
                                    <div className="flex-grow sm:pl-8">
                                        <h2 className="title-font font-medium text-lg text-gray-900">{data.title}</h2>
                                        <h3 className="text-gray-500 mb-3">{data.source.name}</h3>
                                        <p className="mb-4">{data.description.slice(0, 200)}...</p>
                                        <div className="p-2 w-full">
                                            <button className="flex text-white bg-purple-500 border-0 py-1 px-6 focus:outline-none hover:bg-purple-600 rounded text-md" onClick={() => visit(data.url)}>Visit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </section>

    )
}

export default Home