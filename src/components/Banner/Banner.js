import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from '../../axios.js'
import requests from '../../requests.js'

function Banner() {
    // responsible for whatever random movie is being selected
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(requests.fetchNetflexOriginals);
            setMovie(
            req.data.results[Math.floor(Math.random() * req.data.results.length -1)]);
            return req;
        }

        fetchData();
    }, []);

    console.table(movie);
    const truncate = (str, n) => {
        if(str && str.length > n) {
            return (str.substr(0, n-1) + "...")
        } else {
            return str;
        }
    }
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie? movie.backdrop_path:null}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="content">
                <h1>{movie.title || movie.original_name || movie.name}</h1>
                <div className="banner-btns">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">My List</button>
                </div>
                <h1 className="description">{truncate(movie.overview, 150)}</h1>
            </div>

            <div className="fade-bottom" />
        </header>
    )
}

export default Banner
