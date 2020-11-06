import React from 'react'
import './Nav.css'
import requests from './requests'

function Nav({setSelectedOp}) {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedOp(requests.fetchTrending)} >Trending</h2>
            <h2 onClick={() => setSelectedOp(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedOp(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={() => setSelectedOp(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={() => setSelectedOp(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={() => setSelectedOp(requests.fetchRomanceMovies)}>Rmance</h2>
            <h2 onClick={() => setSelectedOp(requests.fetchMystery)}>Mystery</h2>
            <h2 onClick={() => setSelectedOp(requests.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={() => setSelectedOp(requests.fetchWestern)}>Western</h2>
            <h2 onClick={() => setSelectedOp(requests.fetchAnimation)}>Animation</h2>
            <h2 onClick={() => setSelectedOp(requests.fetchTv)}>Movie</h2>
        </div>
    )
}

export default Nav
