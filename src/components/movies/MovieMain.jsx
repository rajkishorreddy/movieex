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
        <Route
          path={`${path}/info/:id`}
          render={(props) => (
            <MovieInfo key={props.match.params.id} {...props} />
          )}
        />
        <Route path={`${path}/search`} component={MovieSearch} />
        <Route path={`${path}/genre`} component={MovieGenre} />
        <Route path={`${path}/`} component={MovieBody} />
      </Switch>
      <div className="movie-footer">
        <div className="movie-footer-nav">
          <a
            href="mailto:rajakishorbeeravalli@gmail.com"
            className="movie-footer-nav-link"
          >
            <svg className="movie-footer-nav-item">
              <use xlinkHref={`${sprite}#icon-mail4`}></use>
            </svg>
          </a>
          <a
            href="mailto:rajakishorbeeravalli@gmail.com"
            className="movie-footer-nav-link"
          >
            <svg className="movie-footer-nav-item">
              <use xlinkHref={`${sprite}#icon-facebook2`}></use>
            </svg>
          </a>
          <a
            className="movie-footer-nav-link"
            href=" https://www.instagram.com/rajkishorreddy/"
          >
            <svg className="movie-footer-nav-item">
              <use xlinkHref={`${sprite}#icon-instagram`}></use>
            </svg>
          </a>
          <a
            className="movie-footer-nav-link"
            href=" https://twitter.com/kishor1523"
          >
            <svg className="movie-footer-nav-item">
              <use xlinkHref={`${sprite}#icon-twitter`}></use>
            </svg>
          </a>

          <a
            className="movie-footer-nav-link"
            href="https://github.com/rajkishorreddy"
          >
            <svg className="movie-footer-nav-item">
              <use xlinkHref={`${sprite}#icon-github`}></use>
            </svg>
          </a>
        </div>
        <div className="movie-footer-by">
          <span>&copy;</span>Raja Kishor Reddy
        </div>
      </div>
    </div>
  );
};

export default MovieMain;
