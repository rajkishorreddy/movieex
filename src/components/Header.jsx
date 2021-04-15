import React, { useState, useEffect, useRef } from "react";
import "./scss/header.scss";
import { Link } from "react-router-dom";
import history from "../history";

import logoName from "../assets/logoname.png";
import jokerTitle from "../assets/jokerTitle.png";
import primeVideo from "../assets/primeVideo.png";
import { GoogleLogin } from "react-google-login";
import { setuseraction, logoutUserAction } from "../actions";
import { connect } from "react-redux";
import googleIcon from "../assets/googleIcon.png";
import axios from "axios";
const Header = (props) => {
  const [term, setTerm] = useState("");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const btnref = useRef(null);

  const closebtnclick = () => {
    btnref.current.classList.add("dispnone");
  };
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/multi/${term}`);
  };
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [props.uuu]);
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    await props.setuseraction({ result, token });
    axios({
      method: "post",
      url: "https://movieex.herokuapp.com/api/users/signup",
      data: {
        name: result.name,
        email: result.email,
      },
    });
  };
  const googleFailure = (err) => {
    console.log(err);
  };
  const logoutclick = () => {
    props.logoutUserAction();
    setUser(null);
  };
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
        </nav>
        {!user ? (
          <div className="header-login">
            <GoogleLogin
              clientId="587037560217-tmcfd3alkf2in9ea376edaansgbqco6c.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  className="login-btn"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <img className="login-btn-icon" src={googleIcon} alt="g" />
                  Login
                </button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              // buttonText="login"
              cookiePolicy="single_host_origin"
            />
          </div>
        ) : (
          <div className="header-right">
            <div className="header-name">
              <div>{user.result.givenName}</div>
            </div>
            <Link to="/" className="header-logout" onClick={logoutclick}>
              Logout
            </Link>
            <div className="header-img">{user.result.givenName.charAt(0)}</div>
          </div>
        )}
      </div>
      <h2 className="welcome">welcome to</h2>
      <h1 className="movieex">movieex.</h1>
      <form onSubmit={onSubmit} className="header-form">
        <input
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
          className="header-form-input"
          type="text"
          placeholder="search for a movie,TVshow or people..."
        ></input>
      </form>
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
        <Link to="/people" className="explore-btn explore-tvshows">
          PEOPLE
        </Link>
      </div>
      <div className="joker">
        <span className="joker-dir">JOAQUIN PHOENIX</span>
        <img className="joker-title" src={jokerTitle} alt="joker title" />
        <span className="joker-tagline">PUT ON A HAPPY FACE</span>
        <span className="joker-watchnow">Watch now on</span>
        <img className="joker-img" src={primeVideo} alt="prime video" />
      </div>
      {!user ? (
        <div ref={btnref} className="login-msg">
          Please login !it takes just few seconds .
          <span>
            <button onClick={closebtnclick} className="login-msg-btn">
              X
            </button>
          </span>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { uuu: state.login };
};
export default connect(mapStateToProps, { setuseraction, logoutUserAction })(
  Header
);
