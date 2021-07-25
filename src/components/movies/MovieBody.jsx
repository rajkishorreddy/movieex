import React from "react";
import { connect } from "react-redux";
import "../scss/movieBody.scss";
import {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchUpcommingMovies,
  fetchBoxOfficeMovies,
  fetchTrendingMovies,
} from "../../actions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ListContainer from "./Listcontainer";
import { Link } from "react-router-dom";
class MovieBody extends React.Component {
  componentDidMount() {
    const fetchapi = async () => {
      // await this.props.fetchGenre();
      await this.props.fetchNowPlayingMovies();
      await this.props.fetchTopRatedMovies();
      await this.props.fetchPopularMovies();
      await this.props.fetchUpcommingMovies();
      await this.props.fetchBoxOfficeMovies();
      await this.props.fetchTrendingMovies();
      // await this.props.fetchTrendingPeople();
    };
    fetchapi();
  }   
  renderSlider() {
    if (!this.props.nowPlayingMovies) {
      return <div>Loading...</div>;
    }
    return this.props.nowPlayingMovies.slice(0, 10).map((mv) => {
      return (
        <div
          key={mv.id}
          style={{
            background: `url('${mv.backimg}')`,
            backgroundSize: "cover",
          }}
          className="slide"
        >
          <div className="slide-title">{mv.title}</div>
          <div className="slide-rating">{mv.rating}</div>
          <div className="slide-inTheater">
            Never miss to watch movie in theater !!
          </div>
          <div className="slide-release">Release Date: {mv.release}</div>
          {mv.rating >= 7.5 ? (
            <div className="slide-reco">movieex recommended</div>
          ) : null}
        </div>
      );
    });
  }
  renderTopRatedMovies() {
    if (!this.props.topRatedMovies) {
      return <div>Loading...</div>;
    }
    this.topRatedmovies = this.props.topRatedMovies.map((mv) => {
      return (
        <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img src={mv.poster} className="tprated-img" alt={mv.title}></img>
            <div className="tprated-rating">{mv.rating}</div>
          </div>
        </Link>
      );
    });
    // return this.popularMovies;
  }
  renderTrendingMovies() {
    if (!this.props.trendingMovies) {
      return <div>Loading...</div>;
    }
    this.trendingMovies = this.props.trendingMovies.map((mv) => {
      return (
        <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img src={mv.poster} className="tprated-img" alt={mv.title}></img>
            <div className="tprated-rating">{mv.rating}</div>
          </div>
        </Link>
      );
    });
    // return this.popularMovies;
  }
  renderPopularMovies() {
    if (!this.props.popularMovies) {
      return <div>Loading...</div>;
    }
    this.popularMovies = this.props.popularMovies.map((mv) => {
      return (
        <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img src={mv.poster} className="tprated-img" alt={mv.title}></img>
            <div className="tprated-rating">{mv.rating}</div>
          </div>
        </Link>
      );
    });
    // return this.listtocheck;
  }

  renderBoxOfficeMovies() {
    if (!this.props.boxOfficeMovies) {
      return <div>Loading...</div>;
    }
    this.boxOfficeMovies = this.props.boxOfficeMovies.map((mv) => {
      return (
        <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img src={mv.poster} className="tprated-img" alt={mv.title}></img>
            <div className="tprated-rating">{mv.rating}</div>
          </div>
        </Link>
      );
    });
  }
  renderUpCommingMovies() {
    if (!this.props.upCommingMovies) {
      return <div>Loading...</div>;
    }
    this.upCommingMovies = this.props.upCommingMovies.reverse().map((mv) => {
      return (
        <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img src={mv.poster} className="tprated-img" alt={mv.title}></img>
            <div className="tprated-rating">{mv.rating}</div>
          </div>
        </Link>
      );
    });
  }
  render() {
    this.renderPopularMovies();
    this.renderTopRatedMovies();
    this.renderBoxOfficeMovies();
    this.renderUpCommingMovies();
    this.renderTrendingMovies();
    return (
      <div>
        <div className="slider">
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            interval={5000}
            showStatus={false}
            stopOnHover={false}
          >
            {this.renderSlider()}
          </Carousel>
        </div>
        <ListContainer title={"Popular on movieex"} list={this.popularMovies} />
        <ListContainer
          title={"All-Time Box-Office Hits"}
          list={this.boxOfficeMovies}
        />
        <ListContainer title={"Top rated movies"} list={this.topRatedmovies} />
        <ListContainer title={"Upcoming films "} list={this.upCommingMovies} />
        <ListContainer
          title={"Trending this week "}
          list={this.trendingMovies}
        />
        <div className="quote">
          “The more successful the villain, the more successful the film.”{" "}
          <span className="quote-small">– Alfred Hitchcock</span>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nowPlayingMovies: state.nowPlayingMovies,
    topRatedMovies: state.TopRatedMovies,
    popularMovies: state.popularMovies,
    upCommingMovies: state.upCommingMovie,
    boxOfficeMovies: state.boxOfficeMovie,
    trendingMovies: state.trendingMovie,
  };
};
export default connect(mapStateToProps, {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchUpcommingMovies,
  fetchBoxOfficeMovies,
  fetchTrendingMovies,
})(MovieBody);
