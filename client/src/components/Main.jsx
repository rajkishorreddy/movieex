import React from "react";
import Header from "./Header";
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
  render() {
    return (
      <div>
        <Header />
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
