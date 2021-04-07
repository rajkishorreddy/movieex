import React from "react";
import logo from "../../assets/logoname.png";
import { Link } from "react-router-dom";
import "../scss/moviehdr.scss";

const MovieHeader = () => {
  return (
    <div className="mvhdr">
      <Link to="/">
        <img src={logo} alt="logo" className="mvhdr-logo" />
      </Link>
      <div className="mvhdr-dispflex">
        <Link to="/movies/genre" className="mvhdr-genrelink">
          search by genre
        </Link>
        <form className="mvhdr-form">
          <input
            className="mvhdr-input"
            type="text"
            placeholder="search for a movie ..."
          />
        </form>
      </div>
    </div>
  );
};
export default MovieHeader;
