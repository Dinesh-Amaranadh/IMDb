import { BrowserRouter, Route, Routes } from "react-router";
import MovieDetailPage from './pages/MovieDetailPage.jsx';
import MovieListPage from './pages/MovieListPage.jsx';
import WatchListPage from './pages/WatchListPage.jsx';
import Header from './components/Header.jsx';
import { useState } from "react";
import { StrictMode } from 'react';
import  WatchListProvider  from "./assets/contexts/WatchListContext.jsx";
import './App.css';



function App() {

    return (
        <div>
            <BrowserRouter>
                <WatchListProvider>
                    <StrictMode>
                        <Header />
                        <Routes>
                            <Route path="/" element={<MovieListPage />} />
                            <Route path="/details" element={<MovieDetailPage />} />
                            <Route path="/watchlist" element={<WatchListPage />} />
                            <Route path='*' element={<h2>Page Not Found</h2>} />
                        </Routes>
                    </StrictMode>
                </WatchListProvider>
            </BrowserRouter>

        </div >
    )
}
export default App;