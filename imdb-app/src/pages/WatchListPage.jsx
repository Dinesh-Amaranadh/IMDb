import React, { useEffect, useState } from "react"
import './../App.css';


let genreids = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV",
    53: "Thriller",
    10752: "War",
    37: "Western",
};
const WatchListPage = ({ watchList, setWatchList }) => {
    const [list, setList] = useState([]);
    const handleMovieSearch = (e) => {
        // console.log(e.target.value.toLowerCase());
        const newList = Object.values(watchList).filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setList(newList);
    }

    useEffect(() => {
        setList(Object.values(watchList));
    }, [watchList])
    const handleToReomve = (id) => {
        const newWatchList = { ...watchList };
        delete newWatchList[id];
        setWatchList(newWatchList);
    }
    const handleSorting = (type) => {
        const newList = Object.values(watchList).sort((a, b) => type === 'DESC' ? a.popularity - b.popularity : b.popularity - a.popularity);
        setList(newList);
    }
    const selectedGenres = () => {
        let genreList = [];
        Object.values(watchList).forEach(movie => {
            genreList = genreList.concat(movie.genre_ids);
        })
        return [...new Set(genreList)];
    }
    const handleGenreSelection = (genreId) => {
        const newList = Object.values(watchList).filter(movie => genreId ? movie.genre_ids.includes(genreId) : true);
        setList(newList);
    }
    return (
        <div>
            <h1>Watch List Page</h1>
            <div className="container">
                <div className="left-side">
                    <div className="genre-list">
                        <div className="genre" onClick={() => { handleGenreSelection('') }}>All</div>
                        {selectedGenres().map(genreId => (
                            <div className="genre" onClick={() => handleGenreSelection(genreId)}>{genreids[genreId]}</div>
                        ))}

                    </div>
                </div>
                <div className="right-side">
                    <input type='text' placeholder="Search" className="search" onChange={handleMovieSearch} />
                    <table border={1} className="watchListTable">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Poster</th>
                                <th>Genres</th>
                                <th className="sorting">Rating<span onClick={() => handleSorting('DESC')}>^</span><span onClick={() => handleSorting('ASC')}>V</span></th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {

                                list.map((movie, index) => (
                                    <tr key={index}>
                                        <td>{movie.id}</td>
                                        <td>{movie.title}</td>
                                        <td><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /></td>
                                        <td>{movie.genre_ids.map(id => genreids[id]).join(', ')}</td>
                                        <td>{movie.popularity}</td>
                                        <td><button onClick={() => { handleToReomve(movie.id) }}>Remove</button></td>
                                    </tr>
                                ))
                            }
                            {/* Map through the watchlist and display the movies */}
                            {/* {Object.values(watchList).map(movie => (
                        <tr key={movie.id}>
                            <td>{movie.title}</td>
                            <td>{movie.release_date}</td>
                            <td>{movie.vote_average}</td>
                            
                        </tr>
                    ))} */}
                        </tbody>
                    </table>
                </div>



            </div>
        </div>



    )
}

export default WatchListPage;