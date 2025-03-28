import { BrowserRouter, Route, Routes } from "react-router";
import MovieDetailPage from './pages/MovieDetailPage.jsx';
import MovieListPage from './pages/MovieListPage.jsx';
import WatchListPage from './pages/WatchListPage.jsx';
import Header from './components/Header.jsx';
import { useState } from "react";
import { StrictMode } from 'react';
import './App.css';



function App() {
    const [watchList, setWatchList] = useState({});
    return (
        <div>
            <BrowserRouter>

                <StrictMode>
                    <Header />
                    <Routes>
                        <Route path="/" element={<MovieListPage watchList={watchList} setWatchList={setWatchList} />} />
                        <Route path="/details" element={<MovieDetailPage />} />
                        <Route path="/watchlist" element={<WatchListPage watchList={watchList} setWatchList={setWatchList} />} />
                        <Route path='*' element={<h2>Page Not Found</h2>} />
                    </Routes>
                </StrictMode>

            </BrowserRouter>

        </div>
    )
}
export default App;