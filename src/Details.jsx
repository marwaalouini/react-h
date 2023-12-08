import React from 'react'
import{useParams,useNavigate} from 'react-router-dom'
import './MovieCard.css';


const Details = ({movie}) => {
    const navigate = useNavigate();
    const {id} = useParams();
    const selectedMovie = movie.find((m) => m.id.toString() === id);
    if (!selectedMovie) {
        return <div>Movie not found</div>;
    }

        return (
    <div>
        <h2 className='titledetails' style={{color:'red', fontWeight:'bolder', fontStyle:'italic'}}>{selectedMovie.title}</h2>
    <p className='descriptiondetails' style={{fontSize:'17px'}}>{selectedMovie.description}</p>
    <iframe
        title="trailer"
        width="590"
        height="415"
        src={`https://www.youtube.com/embed/${selectedMovie.trailer.split('v=')[1]}`}
        allowFullScreen
    ></iframe>
        <h3 class="d-2 buttonback" onClick={() =>navigate('/')}>BACK </h3>
    </div>
    )
}

export default Details