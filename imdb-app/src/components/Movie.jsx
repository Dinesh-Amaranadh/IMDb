import React, { useContext } from 'react';
import  { WatchListContext } from '../assets/contexts/WatchListContext';

const Movie = ({movie}) => {
    const watchListContextData = useContext(WatchListContext);
    const { watchList, setWatchList } = watchListContextData;
    const handleWatchListClick = () => {
        if(watchList[movie.id]) {
            const newWatchList = {...watchList};
            delete newWatchList[movie.id];
            setWatchList(newWatchList);
        }
        else{
            setWatchList({...watchList, [movie.id]: movie});
        }
        
    }
    return (
        <div className="movie">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <button onClick={handleWatchListClick}>{watchList[movie.id] ?'-' : '+'}     watchlist</button>
                
            </div>
        </div>
    )
}
export default Movie;