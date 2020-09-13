import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from '../../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'

// if you have a default export/import, you can rename the file/component
const baseUrl = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    // this runs based on a specific condition
    // re-renders useEffect when the fetchUrl is different
    // fetchUrl is outside of the block; therefore need to include it
    useEffect(() => {
        const fetchData = async () => {
            const req = await axios.get(fetchUrl);
            setMovies(req.data.results);
            return req;
        }

        fetchData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('')
        } else {
            // npm module -- we pass a name and it tries to find a trailer for it
            movieTrailer(movie.name || "")
            .then(url => {
                // we wanna only get everything after the ?
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));
            })
            .catch(error => console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
                <div className='row-poster'>
                    {movies.map((movie) => (
                        <img 
                        onClick={() => handleClick(movie)}
                        key={movie.id}
                        className={`poster-img ${isLargeRow && "poster-img-lg"}`}
                        src={`${baseUrl}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                    ))}
                </div>
                {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row;
