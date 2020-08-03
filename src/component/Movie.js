import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

function Movie({ id, poster, title, year, summary }) {
  return (
    <Link to={{ pathname: "/detail", state: { id } }}>
      <div className="movieContainer">
        <div className="posterContainer">
          <img src={poster} alt={title} />
        </div>
        <div className="elementContainer">
          <div className="titleContainer">
            <h3 className="title">{title}</h3>
            <h5 className="year">{year}</h5>
          </div>
          <p className="summary">{summary.slice(0, 150)}...</p>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
