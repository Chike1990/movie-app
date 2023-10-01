import React, { useEffect, useState } from 'react'
import { fetchMovies } from '../services/api'
import '../styles/FeaturedMovies.css'

const FeaturedMovies = ()=> {
    const [movies, setMovies] = useState([])

    useEffect(() =>{
        const fetchTopRatedMovies = async () =>{
             const data = await fetchMovies()
             setMovies(data)
        }
        fetchTopRatedMovies();
    }, [])

  return (
    <div className='carousel'>
      {movies.map(movie => (
        <div key={movie.id} className='movie-card'>
            <img src={movie.poster} alt={movie.title}/>
            <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default FeaturedMovies
