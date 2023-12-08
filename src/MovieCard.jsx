import React from 'react'
import './MovieCard.css';
import './App.css';
import StarRating from './StarRating';
import {Link} from 'react-router-dom'


const MovieCard = ({movie})=> {
  return (
    <div>

       <div className="movie-card" data-movie="Blade Runner">
    <div className="movie-card__overlay" />
    <div className="movie-card__share">
      <button className="movie-card__icon">
        <i className="material-icons"></i>
      </button>
      <button className="movie-card__icon">
        <i className="material-icons"></i>
      </button>
      <button className="movie-card__icon">
        <i className="material-icons"></i>
      </button>
    </div>
    <div className="movie-card__content">
      <div className="movie-card__header">
        <img src={movie.posterURL} alt='pic'/>
        <h1 className="movie-card__title">{movie.title}</h1>
        <StarRating value={movie.rate} filterRate={() =>{}}/>

      </div>
      <p className="movie-card__desc">
        {movie.description}
      </p>

      <Link to={`/details/${movie.id}`} className='link'> SHOW MOVIE</Link>
    </div>


  </div>

    </div>
  )
}

export default MovieCard
