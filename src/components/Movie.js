import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres }) {
  const url = "/movie/" + id;
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={url} state={{ id: "id" }}>
          {title}
        </Link>
      </h2>
      <p>{summary}</p>
      {genres ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
Movie.propTypes = {
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
  id: propTypes.number.isRequired,
};
export default Movie;
