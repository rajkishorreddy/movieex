import React from "react";
import MovieHeader from "./MovieHeader";
import MovieSearch from "./MovieSearch";
import MovieGenre from "./MovieGenre";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MovieBody from "./MovieBody";
import sprite from "../../assets/sprite.svg";
const MovieMain = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <MovieHeader />
      <Switch>
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
