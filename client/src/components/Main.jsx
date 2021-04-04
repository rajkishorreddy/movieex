import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./scss/main.scss";
import { connect } from "react-redux";
import {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchGenre,
  fetchPopularTv,
  fetchTopRatedTv,
} from "../actions";
class Main extends React.Component {
  componentDidMount() {
    const fetchapi = async () => {
      await this.props.fetchNowPlayingMovies();
      await this.props.fetchTopRatedMovies();
      await this.props.fetchGenre();
      await this.props.fetchPopularTv();
      await this.props.fetchTopRatedTv();
    };
    fetchapi();
  }
  renderNowPlayingMovies() {
    if (!this.props.nowPlayingMovies) {
      return <div>Loading...</div>;
    } else {
      return this.props.nowPlayingMovies.slice(0, 5).map((mv) => {
        return (
          <div className="mvt-ocard" key={mv.id}>
            <div className="mvt-ocard-adult">{mv.adult ? "A" : "U/A"}</div>
            <div className="mvt-icard">
              <img src={mv.poster} alt="poster" className="mvt-icard-img"></img>
            </div>
            <div className="mvt-ocard-title">{mv.title}</div>
            <div className="mvt-ocard-genre">
              <div className="mvt-ocard-genre-item">love</div>
              <div className="mvt-ocard-genre-item">action</div>
              <div className="mvt-ocard-genre-item">thriller</div>
            </div>
            <div className="mvt-ocard-rating">{mv.rating}</div>
            <div className="mvt-ocard-relese">{mv.release}</div>
          </div>
        );
      });
    }
  }
  renderTopRatedMovies() {
    if (!this.props.topRatedMovies) {
      return <div>Loading...</div>;
    } else {
      return this.props.topRatedMovies.slice(0, 5).map((mv) => {
        return (
          <div className="mvt-ocard" key={mv.id}>
            <div className="mvt-ocard-adult">{mv.adult ? "A" : "U/A"}</div>
            <div className="mvt-icard">
              <img src={mv.poster} alt="poster" className="mvt-icard-img"></img>
            </div>
            <div className="mvt-ocard-title">{mv.title}</div>
            <div className="mvt-ocard-genre">
              <div className="mvt-ocard-genre-item">love</div>
              <div className="mvt-ocard-genre-item">action</div>
              <div className="mvt-ocard-genre-item">thriller</div>
            </div>
            <div className="mvt-ocard-rating">{mv.rating}</div>
            <div className="mvt-ocard-relese">{mv.release}</div>
          </div>
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
          <div className="mvt-ocard" key={mv.id}>
            {/* <div className="mvt-ocard-adult">{mv.adult ? "A" : "U/A"}</div> */}
            <div className="mvt-icard">
              <img src={mv.poster} alt="poster" className="mvt-icard-img"></img>
            </div>
            <div className="mvt-ocard-title">{mv.title}</div>
            <div className="mvt-ocard-genre">
              <div className="mvt-ocard-genre-item">love</div>
              <div className="mvt-ocard-genre-item">action</div>
              <div className="mvt-ocard-genre-item">thriller</div>
            </div>
            <div className="mvt-ocard-rating">{mv.rating}</div>
            <div className="mvt-ocard-relese">{mv.release}</div>
          </div>
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
          <a href="/movies" className="mvt-footer">
            Explore more movies here !
          </a>
        </div>
        <div className="mvt">
          <div className="mvt-heading">Top Rated Movies</div>
          <div className="mvt-container">{this.renderTopRatedMovies()}</div>
          <a href="/movies" className="mvt-footer">
            Explore more movies here !
          </a>
        </div>
        <div className="mvt">
          <div className="mvt-heading">Popular TV shows</div>
          <div className="mvt-container">{this.renderPopularTvShows()}</div>
          <a href="/movies" className="mvt-footer">
            Explore more TV shows here !
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nowPlayingMovies: state.nowPlayingMovies,
    topRatedMovies: state.TopRatedMovies,
    genreList: state.genreList,
    PopularTv: state.PopularTv,
    topRated: state.topRated,
  };
};
export default connect(mapStateToProps, {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchGenre,
  fetchPopularTv,
  fetchTopRatedTv,
})(Main);