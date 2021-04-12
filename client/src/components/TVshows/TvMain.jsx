import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logoname.png";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import TvBody from "./TvBody";
import TvSearch from "./TvSearch";
import TvGenre from "./TvGenre";
import TvInfo from "./TvInfo";
const TvMain = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <div className="mvhdr">
        <Link to="/">
          <img src={logo} alt="logo" className="mvhdr-logo" />
        </Link>
        <div className="mvhdr-dispflex">
          <Link to="/tvshows/search" className="mvhdr-searchmv">
            Search for a TVshow
          </Link>
          <Link to="/tvshows/genre" className="mvhdr-genrelink">
            search by genre
          </Link>
        </div>
      </div>
      <Switch>
        <Route
          path={`${path}/info/:id`}
          render={(props) => <TvInfo key={props.match.params.id} {...props} />}
        />
        <Route path={`${path}/search`} component={TvSearch} />
        <Route path={`${path}/genre`} component={TvGenre} />
        <Route path={`${path}/`} component={TvBody} />
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

export default TvMain;
