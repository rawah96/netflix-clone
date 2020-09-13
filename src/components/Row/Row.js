import React, { useState, useEffect } from 'react'
import './Row.css'
import axios from '../../axios';
// if you have a default export/import, you can rename the file/component
const baseUrl = "https://image.tmdb.org/t/p/original/"
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

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

    return (
        <div className="row">
            <h2>{title}</h2>
                <div className='row-poster'>
                    {movies.map((movie) => (
                        <img 
                        key={movie.id}
                        className={`poster-img ${isLargeRow && "poster-img-lg"}`}
                        src={`${baseUrl}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                    ))}
                </div>
        </div>
    )
}

export default Row;
