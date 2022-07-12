import { useState } from "react"
import { movies } from "../../fakeAPI"
import MovieCard from "../MovieCard/MovieCard"

const MoviesList = () => {

    const [moviesList, setMoviesList] = useState(movies)
    const [showMovies, setShowMovies] = useState(true)

    const removeMovie = movieID => {
        const filteredMovies = moviesList.filter(elm => elm._id != movieID)
        setMoviesList(filteredMovies)
    }

    const toggleMovies = () => {
        setShowMovies(!showMovies)
    }

    return (

        <>
            <h2>Películas</h2>

            <button onClick={toggleMovies}>{showMovies ? 'Ocultar películas' : 'Mostrar películas'}</button>

            {
                showMovies && moviesList.map(movie => {
                    return <MovieCard {...movie} key={movie._id} removeMovie={removeMovie} />
                })
            }
        </>
    )
}


export default MoviesList