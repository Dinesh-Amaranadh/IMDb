import React from "react";
import '/src/App.css'; //import './../App.css';
import { Link } from "react-router";
const Header = () => {
    return (
        <div className="header">
            <h1>IMDb</h1>
            <ul>
                <li>
                    <Link to="/">Movies</Link>
                </li>
                <li>
                    <Link to="/details">Details</Link>
                </li>
                <li>
                    <Link to="/watchlist">Watch List</Link>
                </li>
                
            </ul>
        </div>

    )
}

export default Header;