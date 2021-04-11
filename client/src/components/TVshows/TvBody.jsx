import React from "react";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../scss/tv/tvbody.scss";
import { Link } from "react-router-dom";
import {
  fetchHboTvShows,
  fetchHboMaxTvShows,
  fetchHotstarTvShows,
  fetchAmazonTvShows,
  fetchNetflixTvShows,
  fetchTopRatedtvShows,
  fetchPopularTvShows,
  fetchTvShowsMostVoted,
} from "../../actions";
class TvBody extends React.Component {
  componentDidMount() {
    const fetchapi = async () => {
      await this.props.fetchHboTvShows();
      await this.props.fetchHboMaxTvShows();
      await this.props.fetchHotstarTvShows();
      await this.props.fetchAmazonTvShows();
      await this.props.fetchNetflixTvShows();
      await this.props.fetchTopRatedtvShows();
      await this.props.fetchPopularTvShows();
      await this.props.fetchTvShowsMostVoted();
    };
    fetchapi();
  }
  renderSlider() {
    if (!this.props.mostvoted) {
      return <div>Loading...</div>;
    }
    return this.props.mostvoted.slice(0, 10).map((mv) => {
      return (
        <div
          key={mv.id}
          style={{
            background: `url('${mv.backimg}')`,
            backgroundSize: "cover",
          }}
          className="slide"
        >
          <div className="slide-title ">{mv.title}</div>
          <div className="slide-rating ">{mv.rating}</div>
          <div className="slide-inTheater make-white">Most Watched!</div>
          <div className="slide-release make-white">
            Release Date: {mv.release}
          </div>
          {/* {mv.rating >= 7.5 ? (
            <div className="slide-reco">movieex recommended</div>
          ) : null} */}
        </div>
      );
    });
  }
  renderHbo() {
    if (!this.props.hbo) {
      return <div>Loading...</div>;
    }
    this.hbo = this.props.hbo.map((mv) => {
      return (
        <Link className="infolink" to={`/tvshows/info/${mv.id}`} key={mv.id}>
          <div className="tprated-element">
            <img src={mv.poster} className="tprated-img" alt={mv.title}></img>
            <div className="tprated-rating">{mv.rating}</div>
          </div>
        </Link>
      );
    });
  }
  render() {
    return (
      <div>
        {" "}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hbo: state.hbotv,
    hbomax: state.hbomaxtv,
    hotstar: state.hotstartv,
    amazon: state.amazontv,
    netflix: state.netflixtv,
    topRated: state.topRatedTv,
    popular: state.PopularTv,
    mostvoted: state.mostvotedtv,
  };
};

export default connect(mapStateToProps, {
  fetchHboTvShows,
  fetchHboMaxTvShows,
  fetchHotstarTvShows,
  fetchAmazonTvShows,
  fetchNetflixTvShows,
  fetchTopRatedtvShows,
  fetchPopularTvShows,
  fetchTvShowsMostVoted,
})(TvBody);
