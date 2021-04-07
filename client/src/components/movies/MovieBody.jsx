import React from "react";
import { connect } from "react-redux";
import "../scss/movieBody.scss";
import { fetchNowPlayingMovies, fetchTopRatedMovies } from "../../actions";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
      // await this.props.fetchPopularTv();
      // await this.props.fetchTopRatedTv();
      // await this.props.fetchTrendingPeople();
    };
    fetchapi();
  }
  scrollAmount = 0;
  sliderScrollRight() {
    if (
      this.scrollAmount <=
      this.carouselbox.current.scrollWidth -
        this.carouselbox.current.clientWidth
    ) {
      this.carouselbox.current.scrollTo({
        top: 0,
        left: (this.scrollAmount += 500),
        behavior: "smooth",
      });
    }
  }
  sliderScrollLeft() {
    this.carouselbox.current.scrollTo({
      top: 0,
      left: (this.scrollAmount -= 500),
      behavior: "smooth",
    });

    if (this.scrollAmount < 0) {
      this.scrollAmount = 0;
    }
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
    return this.props.topRatedMovies.map((mv) => {
      return (
        <div className="tprated-element" key={mv.id}>
          <img src={mv.poster} className="tprated-img" alt={mv.title}></img>
          <div className="tprated-rating">{mv.rating}</div>
        </div>
      );
    });
  }
  render() {
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
        <div className="tprated">
          <div className="tprated-title">Top rated movies</div>
          <div className="tprated-carousel">
            <div ref={this.carouselbox} className="tprated-carouselbox">
              {this.renderTopRatedMovies()}
            </div>

            <button
              className="tprated-switchLeft tprated-sliderButton"
              onClick={() => this.sliderScrollLeft()}
            >
              l
            </button>
            <button
              className="tprated-switchRight tprated-sliderButton"
              onClick={() => this.sliderScrollRight()}
            >
              r
            </button>
          </div>
        </div>
        <section className="test"></section>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    nowPlayingMovies: state.nowPlayingMovies,
    topRatedMovies: state.TopRatedMovies,
  };
};
export default connect(mapStateToProps, {
  fetchNowPlayingMovies,
  fetchTopRatedMovies,
})(MovieBody);
