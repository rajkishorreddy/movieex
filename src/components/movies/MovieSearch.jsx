import React, { useState } from "react";
import "../scss/movieSearch.scss";
import { fetchSearchedMovies } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const MovieSearch = (props) => {
  const [term, setTerm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchSearchedMovies(term);
  };

  const renderMovies = () => {
    if (!props.searchedMovies) {
      return <div>Loading...</div>;
    }
    return props.searchedMovies.map((mv) => {
      return (
        <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img
              src={mv.poster}
              className="tprated-img invalidImageSrc"
              alt={mv.title}
            />

            <div className="tprated-rating">{mv.rating}</div>
          </div>
        </Link>
      );
    });
  };

  return (
    <div>
      <div className="search-form-container">
        <form onSubmit={onSubmit} className="search-form">
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            className="search-form-input"
            placeholder="Search for a movie..."
          ></input>
        </form>
      </div>
      {props.searchedMovies.length > 0 ? (
        <div className="genre-container incHeight">{renderMovies()}</div>
      ) : (
        <div className="genre-test incHeight">
          <div className="genre-test-quote">
            “We don't make movies to make more money . We make money to make
            more movies.”
            <span className="genre-test-quote-small">- Walt Disney</span>
          </div>
          <div className="errmsg">
            if searched and not found! please check the spelling
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return { searchedMovies: state.searchedMovies };
};
export default connect(mapStateToProps, { fetchSearchedMovies })(MovieSearch);
