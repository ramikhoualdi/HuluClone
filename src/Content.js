import React, { useEffect, useState} from 'react'
import './Content.css'
import VideoCard from './VideoCard.js'
import axios from './axios'
import FlipMove from 'react-flip-move'

function Content({selectedOp}) {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(selectedOp)            
            setMovies(request.data.results)
            return request ;
        }
        fetchData()
        
    }, [selectedOp])
    return (
        <div className="content">
            <FlipMove>
            {movies.map((movie) => (
                <VideoCard key={movie.id} movie={movie} />
            ))}
            </FlipMove>
        </div>
    )
}

export default Content
