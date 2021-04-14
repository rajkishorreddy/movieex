import React, { useState, useEffect } from "react";
import {
  fetchSearchedPeople,
  fetchPopularPeople,
  fetchTrendingPeople,
} from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ListContainer from "../movies/Listcontainer";
const PeopleSearch = (props) => {
  const [term, setTerm] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    props.fetchSearchedPeople(term);
  };
  useEffect(() => {
    props.fetchPopularPeople();
    props.fetchTrendingPeople();
  }, []);
  const renderMovies = () => {
    if (!props.searchedMovies) {
      return <div>Loading...</div>;
    }
    return props.searchedMovies.map((mv) => {
      return (
        <Link className="infolink" to={`/people/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img
              src={mv.profile}
              className="tprated-img invalidImageSrc"
              alt={mv.name}
            ></img>
            <div className="tprated-rating">{mv.name}</div>
          </div>
        </Link>
      );
    });
  };
  let trending;
  const rendertrendingPeople = () => {
    if (!props.trending) {
      return <div>Loading...</div>;
    }
    trending = props.trending.map((mv) => {
      return (
        <Link className="infolink" to={`/people/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img src={mv.poster} className="tprated-img" alt={mv.name}></img>
            <div className="tprated-rating">{mv.name}</div>
          </div>
        </Link>
      );
    });
  };
  let Popular;
  const renderPopularPeople = () => {
    if (!props.popular) {
      return <div>Loading...</div>;
    }
    Popular = props.popular.map((mv) => {
      return (
        <Link className="infolink" to={`/people/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img src={mv.poster} className="tprated-img" alt={mv.name}></img>
            <div className="tprated-rating">{mv.name}</div>
          </div>
        </Link>
      );
    });
  };
  return (
    <div>
      {rendertrendingPeople()}
      {renderPopularPeople()}
      <div className="search-form-container">
        <form onSubmit={onSubmit} className="search-form">
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            className="search-form-input"
            placeholder="Search for people"
          ></input>
        </form>
        <div className="perr">
          if searched and not found please check the spelling !
        </div>
      </div>
      {props.searchedMovies.length > 0 ? (
        <div className="genre-container incHeight">{renderMovies()}</div>
      ) : (
        <div>
          <ListContainer title={"Popular People on movieex "} list={Popular} />
          <ListContainer title={"Trending People "} list={trending} />
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    searchedMovies: state.searchedPeople,
    trending: state.trendingPeople,
    popular: state.popularPeople,
  };
};
export default connect(mapStateToProps, {
  fetchSearchedPeople,
  fetchTrendingPeople,
  fetchPopularPeople,
})(PeopleSearch);
