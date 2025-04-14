// State is something where once it's updated, the component will change and re-render itself to show the new state.
// When a state change occurs, the entire components is re-ran or re-rendered.
// When we refresh the page, then even the state will reset.

import MovieCard from "../components/MovieCard";
import { useState } from "react";
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState();

    const movies = [
        { id: 1, title: "John Cooper", release_date: "2020" },
        { id: 2, title: "Terminator", release_date: "1999" },
        { id: 3, title: "The Matrix", release_date: "2014" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..." className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) =>
                    movie.title.toLowerCase().startsWith(searchQuery) &&
                    (<MovieCard movie={movie} key={movie.id} />)
                )}
            </div>
        </div>
    );
}

export default Home;