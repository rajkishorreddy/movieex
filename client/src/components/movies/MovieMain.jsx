import React from "react";
import MovieSearch from "./MovieSearch";
import MovieGenre from "./MovieGenre";
import MovieInfo from "./MovieInfo";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MovieBody from "./MovieBody";
import sprite from "../../assets/sprite.svg";
import logo from "../../assets/logoname.png";
import { Link } from "react-router-dom";
import "../scss/moviehdr.scss";
const MovieMain = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <div className="mvhdr">
        <Link to="/">
          <img src={logo} alt="logo" className="mvhdr-logo" />
        </Link>
        <div className="mvhdr-dispflex">
          <Link to="/movies/search" className="mvhdr-searchmv">
            Search for a movie
          </Link>
          <Link to="/movies/genre" className="mvhdr-genrelink">
            search by genre
          </Link>
          {/* <form onSubmit={onSubmit} className="mvhdr-form">
            <input
              className="mvhdr-input"
              type="text"
              placeholder="search for a movie ..."
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </form> */}
        </div>
      </div>
      <Switch>
        <Route path={`${path}/info/:id`} component={MovieInfo} />
        <Route path={`${path}/search`} component={MovieSearch} />
        <Route path={`${path}/genre`} component={MovieGenre} />
        <Route path={`${path}/`} component={MovieBody} />
      </Switch>
      <div className="movie-footer">
        <div className="movie-footer-nav">
          <svg className="movie-footer-nav-item">
            <use xlinkHref={`${sprite}#icon-mail4`}></use>
          </svg>
          <svg className="movie-footer-nav-item">
            <use xlinkHref={`${sprite}#icon-facebook2`}></use>
          </svg>
          <svg className="movie-footer-nav-item">
            <use xlinkHref={`${sprite}#icon-instagram`}></use>
          </svg>
          <svg className="movie-footer-nav-item">
            <use xlinkHref={`${sprite}#icon-telegram`}></use>
          </svg>
          <svg className="movie-footer-nav-item">
            <use xlinkHref={`${sprite}#icon-twitter`}></use>
          </svg>
          <svg className="movie-footer-nav-item">
            <use xlinkHref={`${sprite}#icon-github`}></use>
          </svg>
        </div>
        <div className="movie-footer-by">
          <span>&copy;</span>Raja Kishor Reddy
        </div>
      </div>
    </div>
  );
};

export default MovieMain;
