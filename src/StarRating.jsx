import React from 'react'
import ReactStars from "react-rating-stars-component";

/* function for filter movie with rate*/
const StarRating = ({value,filterRate}) => {
        const ratingChanged = (newRating) => {
            filterRate(newRating);
    };

        return (
    <div>
        <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            value={value}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"  
        />
    </div>
    )
}

export default StarRating