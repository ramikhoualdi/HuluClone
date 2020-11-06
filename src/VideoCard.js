import React, { forwardRef } from 'react'
import './VideoCard.css'
import TextTruncate from 'react-text-truncate'


const  VideoCard = forwardRef(({ movie }, ref) => {

    const base_url = 'https://image.tmdb.org/t/p/original'

    return (
        <div ref={ref} className="videoCard">
            <img 
            src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
            alt="Movie Poster"
            /> 
            
            <TextTruncate 
            line={2}
            element="p"
            truncateText="..."
            text={movie.overview}
            
            />
            <h2>{movie.title || movie.original_title}</h2>
            <p className="videoCard__stats">{movie.release_date || movie.first_air_date}</p>       
        </div>
    )
})

export default VideoCard
