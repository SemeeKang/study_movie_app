import React from "react";
import PropTyes from "prop-types";
import "./Movie.css";

function Movie({id, year, title, summary, poster, genres}) {
    return (
    <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre, index) => <li key={index} className="genres__genre">{genre}</li>)}
            </ul>
            <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
    </div>
    );
}


Movie.protoTypes = {
    id: PropTyes.number.isRequired,
    year: PropTyes.number.isRequired,
    title: PropTyes.string.isRequired,
    summary: PropTyes.string.isRequired,
    poster: PropTyes.string.isRequired,
    genres: PropTyes.arrayOf(PropTyes.string).isRequired
}

export default Movie;