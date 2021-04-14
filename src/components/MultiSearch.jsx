import React, { useEffect, useState } from "react";
import { fetchMultiSearch } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logoname.png";
import sprite from "../assets/sprite.svg";
import history from "../history";
import "./scss/multisearch.scss";
function MultiSearch(props) {
  const [term, setTerm] = useState("");
  const [dispmv, setDispmv] = useState(true);
  const [disptv, setDispTv] = useState(false);
  const [disppeople, setDispPeople] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/multi/${term}`);
  };
  useEffect(() => {
    const fetchapi = async () => {
      await props.fetchMultiSearch(props.match.params.id);
    };
    fetchapi();
  }, []);

  const renderMovies = () => {
    if (!props.res) return <div>!loading </div>;
    else {
      return props.res.map((mv) => {
        if (mv.media_type === "movie") {
          return (
            <Link to={`/movies/info/${mv.id}`} className="infolink" key={mv.id}>
              <div className="multi-movie-item">
                <img
                  src={mv.poster}
                  alt={mv.title}
                  className="multi-movie-item-img"
                />
                <div className="multi-movie-item-title">{mv.title}</div>
                <div className="multi-movie-item-release">{mv.release}</div>
              </div>
            </Link>
          );
        }
      });
    }
  };
  const renderTvshows = () => {
    if (!props.res) return <div>!loading </div>;
    else {
      return props.res.map((mv) => {
        if (mv.media_type === "tv") {
          return (
            <Link
              to={`/tvshows/info/${mv.id}`}
              className="infolink"
              key={mv.id}
            >
              <div className="multi-movie-item">
                <img
                  src={mv.poster}
                  alt={mv.name}
                  className="multi-movie-item-img"
                />
                <div className="multi-movie-item-title">{mv.name}</div>
                <div className="multi-movie-item-release">{mv.firstAir}</div>
              </div>
            </Link>
          );
        }
      });
    }
  };
  const renderpeople = () => {
    if (!props.res) return <div>!loading </div>;
    else {
      return props.res.map((mv) => {
        if (mv.media_type === "person") {
          return (
            <Link to={`/people/info/${mv.id}`} className="infolink" key={mv.id}>
              <div className="multi-movie-item">
                <img
                  src={mv.profile}
                  alt={mv.name}
                  className="multi-movie-item-img"
                />
                <div className="multi-movie-item-title">{mv.name}</div>
              </div>
            </Link>
          );
        }
      });
    }
  };
  const mvbtnclick = () => {
    setDispmv(true);
    setDispTv(false);
    setDispPeople(false);
  };
  const tvbtnclick = () => {
    setDispmv(false);
    setDispTv(true);
    setDispPeople(false);
  };
  const peoplebtnclick = () => {
    setDispmv(false);
    setDispTv(false);
    setDispPeople(true);
  };
  return (
    <div>
      <div className="mvhdr">
        <Link to="/">
          <img src={logo} alt="logo" className="mvhdr-logo" />
        </Link>
      <div className="errmgg">if searched and not found plz check the spelling !</div>
        <form onSubmit={onSubmit} className="mvhdr-form">
          <input
            className="mvhdr-input"
            type="text"
            placeholder="search here ..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </form>
      </div>
      <div className="set-container">
        <button className="btn-mv" onClick={mvbtnclick}>
          Movies
        </button>
        <button className="btn-mv" onClick={tvbtnclick}>
          TVshows
        </button>
        <button className="btn-mv" onClick={peoplebtnclick}>
          people
        </button>
      </div>
      {dispmv ? (
        <>
          <div className="multimv-title">Top searched movies </div>
          <div className="multi-movie">{renderMovies()}</div>

          {/* <div className="multi-movie">
            {renderMovies()[0] === undefined ? (
              <div className="nores">No results found</div>
            ) : (
              renderMovies()
            )}
          </div> */}
        </>
      ) : null}

      {disptv ? (
        <>
          <div className="multimv-title">Top searched TVshows</div>
          <div className="multi-movie">{renderTvshows()}</div>
          {/* <div className="multi-movie">
            {renderTvshows()[0] === undefined ? (
              <div className="nores">No results found</div>
            ) : (
              renderTvshows()
            )}
          </div>*/}
        </>
      ) : null}
      {disppeople ? (
        <>
          <div className="multimv-title">Top searched People</div>
          <div className="multi-movie">{renderpeople()}</div>

          {/* <div className="multi-movie">
            {renderpeople()[0] === undefined ? (
              <div className="nores">No results found</div>
            ) : (
              renderpeople()
            )}
          </div> */}
        </>
      ) : null}
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
}
const mapstateToProps = (state) => {
  return { res: state.multiRes };
};
export default connect(mapstateToProps, { fetchMultiSearch })(MultiSearch);
