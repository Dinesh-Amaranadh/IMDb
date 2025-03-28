import React from "react"

const WatchListPage = ({watchList, setWatchList}) =>{
    return(
        <div>
            <h1>Watch List Page</h1>
            <table border={1} className="watchListTable"></table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Poster</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.values(watchList).map((movie, index) => (
                        <tr key={index}>
                            <td>{movie.id}</td>
                            <td>{movie.title}</td>
                            <td><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /></td>
                            <td>{movie.vote_average}</td>
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
    
        </div>
        )
}

export default WatchListPage;