import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./scss/main.scss";

import { connect } from "react-redux";
import {
  fetchNowPlayingMovies,
  fetchTrendingMovies,
  fetchGenre,
  fetchPopularTvShows,
  fetchTrendingPeople,
} from "../actions";
class Main extends React.Component {
  componentDidMount() {
    const fetchapi = async () => {
      await this.props.fetchGenre();
      await this.props.fetchNowPlayingMovies();
      await this.props.fetchTrendingMovies();
      await this.props.fetchPopularTvShows();
      await this.props.fetchTrendingPeople();
    };
    fetchapi();
  }
  renderNowPlayingMovies() {
    if (!this.props.nowPlayingMovies) {
      return <div>Loading...</div>;
    } else {
      return this.props.nowPlayingMovies.slice(0, 5).map((mv) => {
        return (
          <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div className="mvt-ocard" >
            {/* <div className="mvt-ocard-adult">{mv.adult ? "A" : "U/A"}</div> */}
            <div className="mvt-icard">
              <img src={mv.poster} alt="poster" className="mvt-icard-img"></img>
            </div>
            <div className="mvt-ocard-title">{mv.title}</div>
            {/* <div className="mvt-ocard-genre">
              <div className="mvt-ocard-genre-item">love</div>
              <div className="mvt-ocard-genre-item">action</div>
              <div className="mvt-ocard-genre-item">thriller</div>
            </div> */}
            <div className="mvt-ocard-rating">{mv.rating}</div>
            <div className="mvt-ocard-relese">{mv.release}</div>
          </div>
          </Link>
        );
      });
    }
  }
  fetchTrendingMovies() {
    if (!this.props.topRatedMovies) {
      return <div>Loading...</div>;
    } else {
      return this.props.topRatedMovies.slice(0, 5).map((mv) => {
        return (
          <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div className="mvt-ocard" >
            {/* <div className="mvt-ocard-adult">{mv.adult ? "A" : "U/A"}</div> */}
            <div className="mvt-icard">
              <img src={mv.poster} alt="poster" className="mvt-icard-img"></img>
            </div>
            <div className="mvt-ocard-title">{mv.title}</div>
            {/* <div className="mvt-ocard-genre">
              <div className="mvt-ocard-genre-item">love</div>
              <div className="mvt-ocard-genre-item">action</div>
              <div className="mvt-ocard-genre-item">thriller</div>
            </div> */}
            <div className="mvt-ocard-rating">{mv.rating}</div>
            <div className="mvt-ocard-relese">{mv.release}</div>
          </div></Link>
        );
      });
    }
  }
  renderTrendingPeople() {
    if (!this.props.trendingPeople) {
      return <div>Loading...</div>;
    } else {
      return this.props.trendingPeople.slice(0, 5).map((mv) => {
        return (
          <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div className="mvt-ocard" key={mv.id}>
            <div className="mvt-icard">
              <img src={mv.poster} alt="poster" className="mvt-icard-img"></img>
            </div>
            <div className="mvt-ocard-title">{mv.name}</div>
          </div>
          </Link>
        );
      });
    }
  }
  renderPopularTvShows() {
    if (!this.props.PopularTv) {
      return <div>Loading...</div>;
    } else {
      return this.props.PopularTv.slice(0, 5).map((mv) => {
        return (
          <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div className="mvt-ocard" key={mv.id}>
            {/* <div className="mvt-ocard-adult">{mv.adult ? "A" : "U/A"}</div> */}
            <div className="mvt-icard">
              <img src={mv.poster} alt="poster" className="mvt-icard-img"></img>
            </div>
            <div className="mvt-ocard-title">{mv.title}</div>
            {/* <div className="mvt-ocard-genre">
              <div className="mvt-ocard-genre-item">love</div>
              <div className="mvt-ocard-genre-item">action</div>
              <div className="mvt-ocard-genre-item">thriller</div>
            </div> */}
            <div className="mvt-ocard-rating">{mv.rating}</div>
            <div className="mvt-ocard-relese">{mv.release}</div>
          </div></Link>
        );
      });
    }
  }
  render() {
    return (
      <div>
        <Header />
        <div className="mvt">
          <div className="mvt-heading">Movies in theatres</div>
          <div className="mvt-container">{this.renderNowPlayingMovies()}</div>
          <Link to="/movies" className="mvt-footer">
            Explore more movies here !
          </Link>
        </div>
        <div className="mvt">
          <div className="mvt-heading">Trending Movies this week</div>
          <div className="mvt-container">{this.fetchTrendingMovies()}</div>
          <Link to="/movies" className="mvt-footer">
            Explore more movies here !
          </Link>
        </div>
        <div className="mvt">
          <div className="mvt-heading">Popular TV shows</div>
          <div className="mvt-container">{this.renderPopularTvShows()}</div>
          <Link to="/tvshows" className="mvt-footer">
            Explore more TV shows here !
          </Link>
        </div>
        <div className="mvt">
          <div className="mvt-heading">Trending People this week</div>
          <div className="mvt-container">{this.renderTrendingPeople()}</div>
          <Link to="/people" className="mvt-footer">
            Explore more People here !
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nowPlayingMovies: state.nowPlayingMovies,
    topRatedMovies: state.trendingMovie,
    genreList: state.genreList,
    PopularTv: state.PopularTv,
    trendingPeople: state.trendingPeople,
  };
};
export default connect(mapStateToProps, {
  fetchNowPlayingMovies,
  fetchTrendingMovies,
  fetchGenre,
  fetchPopularTvShows,
  fetchTrendingPeople,
})(Main);
