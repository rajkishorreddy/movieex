import React, { useState } from "react";
import "../scss/movieSearch.scss";
import sprite from "../../assets/sprite.svg";
import { fetchSearchedMovies } from "../../actions";
import { connect } from "react-redux";
const MovieSearch = () => {
  const [term, setTerm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(term);
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
      {-1 > 0 ? (
        <div className="genre-container">
          {this.renderMoviesByGenre()}
          <div
            onClick={() => this.handleRightClick()}
            className="genre-container-right"
          >
            click for more!
            <svg className="genre-container-right-item">
              <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
            </svg>
          </div>
          <div
            onClick={() => this.handleLeftClick()}
            className="genre-container-left"
          >
            <svg className="genre-container-left-item">
              <use xlinkHref={`${sprite}#icon-arrow-left`}></use>
            </svg>
          </div>
        </div>
      ) : (
        <div className="genre-test">
          <div className="genre-test-quote">
            “People want to see something that shows them you can do what you
            say. That’s the trick.“{" "}
            <span className="genre-test-quote-small">– Christopher Nolan</span>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {};
export default MovieSearch;
