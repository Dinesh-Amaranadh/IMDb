import Movie from "./Movie.jsx";
import React from "react";
const MovieList =({movies}) => {
    return (
        <div className="movie-list">
        {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
        ))}

        </div>
    )
}

export default MovieList;