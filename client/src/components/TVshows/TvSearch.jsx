import React, { useState } from "react";
// import "../scss/movieSearch.scss";
import { fetchSearchedTvshows } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const MovieSearch = (props) => {
  const [term, setTerm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchSearchedTvshows(term);
  };

  const renderMovies = () => {
    if (!props.searchedTv) {
      return <div>Loading...</div>;
    }
    return props.searchedTv.map((mv) => {
      return (
        <Link className="infolink" to={`/tvshows/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img
              src={mv.poster}
              className="tprated-img invalidImageSrc"
              alt={mv.title}
            ></img>
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
            placeholder="Search for a TVshow..."
          ></input>
        </form>
      </div>
      {props.searchedTv.length > 0 ? (
        <div className="genre-container incHeight">{renderMovies()}</div>
      ) : (
        <div className="genre-test incHeight">
          <div className="genre-test-quote">
            “It’s easy to confuse ‘what is’ with ‘what ought to be,’ especially
            when ‘what is’ has worked out in your favor.”
            <span className="genre-test-quote-small">- Tyrion Lannister</span>
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
  return { searchedTv: state.searchedTv };
};
export default connect(mapStateToProps, { fetchSearchedTvshows })(MovieSearch);
