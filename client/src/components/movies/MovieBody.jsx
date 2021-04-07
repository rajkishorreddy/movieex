import React from "react";
import { connect } from "react-redux";
import "../scss/movieBody.scss";
import {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchUpcommingMovies,
} from "../../actions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ListContainer from "./Listcontainer";
class MovieBody extends React.Component {
  constructor(props) {
    super(props);
    this.carouselbox = React.createRef();
  }
  componentDidMount() {
    const fetchapi = async () => {
      // await this.props.fetchGenre();
      await this.props.fetchNowPlayingMovies();
      await this.props.fetchTopRatedMovies();
      await this.props.fetchPopularMovies();
      await this.props.fetchUpcommingMovies();
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
        <div className="tprated-element" key={mv.id}>
          <img src={mv.poster} className="tprated-img" alt={mv.title}></img>
          <div className="tprated-rating">{mv.rating}</div>
        </div>
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
        <div className="tprated-element" key={mv.id}>
          <img src={mv.poster} className="tprated-img" alt={mv.title}></img>
          <div className="tprated-rating">{mv.rating}</div>
        </div>
      );
    });
    // return this.listtocheck;
  }

  render() {
    this.renderPopularMovies();
    this.renderTopRatedMovies();
    return (
      <div>
        <div className="slider">
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showThumbs={false}
            interval={2000}
            autoFocus={true}
            showStatus={false}
            stopOnHover={false}
          >
            {this.renderSlider()}
          </Carousel>
        </div>
        <ListContainer title={"Popular on movieex"} list={this.popularMovies} />
        <ListContainer title={"Top rated movies"} list={this.topRatedmovies} />

        <section className="test"></section>
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
  };
};
export default connect(mapStateToProps, {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchUpcommingMovies,
})(MovieBody);
