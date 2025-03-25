import React, { useEffect, useState } from "react"
import MovieList from "../components/MovieList.jsx";
import Pagination from "../components/Pagination.jsx";


const MovieListPage = () => {
    const [movies, setMovies] = useState([]);
    const fetchMovies = (pageNo) => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${pageNo}`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }
    useEffect(() => {
        fetchMovies(6);
    }, []);
    return (
        <div className="movie-list-page">

            <h1>Movie List Page</h1>
            <MovieList movies={movies} />
            <div className="pagination-section">
                <Pagination onPageChange={fetchMovies} />
            </div>

        </div>
    )
}

export default MovieListPage;
// {
//     "page": 1,
//     "results":
//     "total_pages": 500,
//     "total_results": 10000
// }