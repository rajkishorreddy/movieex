import React from "react";
import "./scss/header.scss";
import { Link } from "react-router-dom";
// import history from "../history";
import bgheader from "../assets/bgheader.mp4";
import logoName from "../assets/logoname.png";
import jokerTitle from "../assets/jokerTitle.png";
import primeVideo from "../assets/primeVideo.png";
const Header = () => {
  return (
    <div className="main-header">
      <div className="header">
        <img className="header-logo" src={logoName} alt="company logo" />
        <nav className="header-nav">
          <Link to="/movies" className="header-nav-item header-nav-item-1 ">
            Movies
          </Link>
          <Link to="/tvshows" className="header-nav-item header-nav-item-2 ">
            TV shows
          </Link>
          <Link to="/people" className="header-nav-item header-nav-item-3">
            People
          </Link>
          <Link to="/login" className="header-nav-item header-nav-item-4">
            Login
          </Link>
          <Link to="/signup" className="header-nav-item header-nav-item-5 ">
            Signup
          </Link>
        </nav>
      </div>
      <h2 className="welcome">welcome to</h2>
      <h1 className="movieex">movieex.</h1>
      <p className="confused">confused what to watch next?</p>
      <p className="millions">
        millions of movies, TVshows and people to discover.
      </p>
      <div className="explore">
        <span className="explore-now">explore now</span>
        <span className="explore-arrow">&rarr;</span>

        <Link to="/movies" className=" explore-btn explore-movies">
          MOVIES
        </Link>
        <Link to="/tvshows" className="explore-btn explore-tvshows">
          TVSHOWS
        </Link>
      </div>
      <div className="joker">
        <span className="joker-dir">JOAQUIN PHOENIX</span>
        <img className="joker-title" src={jokerTitle} alt="joker title" />
        <span className="joker-tagline">PUT ON A HAPPY FACE</span>
        <span className="joker-watchnow">Watch now on</span>
        <img className="joker-img" src={primeVideo} alt="prime video" />
      </div>
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src={bgheader} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Header;
