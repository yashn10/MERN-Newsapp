import React, { useState, useEffect } from 'react'


const Home = ({ category, country }) => {

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
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=ede8de3207db4d9b9a935e4b96ad22d9`);
                const data = await response.json();
                if (data.articles) {
                    setnews(data.articles);
                    console.log(data.articles);
                } else {
                    window.alert("News not available");
                }
            } catch (error) {
                console.error("Error fetching news:", error);
                window.alert("News not available");
            }
        };

        fetchNews();
    }, [category, country]);


    return (

        <section className="text-gray-600 body-font">
            <div className="container px-24 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">LATEST NEWS</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Stay updated with the latest news in various categories. Our news app brings you the top headlines from trusted sources, covering business, entertainment, sports, health, and science. Dive into the stories that matter to you and stay informed about the world around you.</p>
                </div>
                <div className="flex flex-wrap -m-4">

                    {news.map((data, index) => {
                        return (
                            <div className="p-4 lg:w-1/2" key={index}>
                                <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                                    <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={data.urlToImage ? data.urlToImage : '/news.jpg'} />
                                    <div className="flex-grow sm:pl-8">
                                        <h2 className="title-font font-medium text-lg text-gray-900">{data.title}</h2>
                                        <h3 className="text-gray-500 mb-3">{data.source.name}</h3>
                                        <p className="mb-4">{data.description}</p>
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