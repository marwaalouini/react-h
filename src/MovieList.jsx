import React from 'react'
import MovieCard from './MovieCard'
import './App.css';

/* mapping our movie in the moviecard*/
const MovieList = ({movie}) => {
return (
    <div className="movie-list">
        {movie.map((movie)=>(<MovieCard movie={movie}/>)
        )}
    </div>
)
}

export default MovieList ;