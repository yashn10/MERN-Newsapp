import { useState, useEffect } from 'react'
import axios from "axios";

const Home = ({ category, country, language }) => {

    const [news, setnews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


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
            setLoading(true);
            setError(null);
            const apikey = process.env.REACT_APP_NEWSAPI_SECRETKEY;
            const url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=${language}&country=${country}&max=50&apikey=${apikey}`;

            try {
                const response = await axios.get(url);
                // console.log(response);
                setnews(response.data.articles)
            } catch (error) {
                console.error("Error fetching news:", error);
                window.alert("Failed to fetch news. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category, country, language]);


    return (

        <main className="bg-white dark:bg-slate-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">

            <header className="bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 py-12 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold font-['Roboto',_sans-serif] flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 mr-3 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m6 12a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2z"></path>
                        </svg>
                        Latest News
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Discover the latest headlines from around the world, curated from trusted sources to keep you informed and engaged.
                    </p>
                </div>
            </header>

            <section className="container mx-auto px-4 py-8">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-teal-500"></div>
                    </div>
                ) : error ? (
                    <div className="text-center text-red-400 p-8 text-lg">{error}</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {news.map((data, index) => (
                            <article
                                key={index}
                                className="bg-gray-100 dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                            >
                                <div className="relative">
                                    <img
                                        className="w-full h-48 object-cover"
                                        src={data.image || '/news.jpg'}
                                        alt={`News image for ${data.title}`}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 dark:from-slate-900/70 to-transparent"></div>
                                    <div className="absolute bottom-2 left-2 flex items-center text-gray-200 text-sm">
                                        <svg className="w-4 h-4 mr-1 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m6 12a2 2 0 01-2-2V9a2 2 0 012-2h2a2 2 0 012 2v8a2 2 0 01-2 2z"></path>
                                        </svg>
                                        {data.source.name}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">{data.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm">{data.description}</p>
                                    <button
                                        className="bg-teal-500 text-white py-2 px-4 rounded flex items-center hover:bg-teal-600 transition-colors duration-300 w-full justify-center"
                                        onClick={() => visit(data.url)}
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                                        </svg>
                                        Read More
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </section>

        </main>

    )
}

export default Home