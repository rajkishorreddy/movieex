import React from "react";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../scss/tv/tvbody.scss";
import { Link } from "react-router-dom";
import ListContainer from "../movies/Listcontainer";
import {
  fetchHboTvShows,
  fetchHboMaxTvShows,
  fetchHotstarTvShows,
  fetchAmazonTvShows,
  fetchNetflixTvShows,
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
  renderhbomax() {
    if (!this.props.hbomax) {
      return <div>Loading...</div>;
    }
    this.hbomax = this.props.hbomax.map((mv) => {
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
  renderhotstar() {
    if (!this.props.hotstar) {
      return <div>Loading...</div>;
    }
    this.hotstar = this.props.hotstar.map((mv) => {
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
  renderamazon() {
    if (!this.props.amazon) {
      return <div>Loading...</div>;
    }
    this.amazon = this.props.amazon.map((mv) => {
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
  rendernetflix() {
    if (!this.props.netflix) {
      return <div>Loading...</div>;
    }
    this.netflix = this.props.netflix.map((mv) => {
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
  rendermostvoted() {
    if (!this.props.mostvoted) {
      return <div>Loading...</div>;
    }
    this.mostvoted = this.props.mostvoted.map((mv) => {
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
  renderpopular() {
    if (!this.props.popular) {
      return <div>Loading...</div>;
    }
    this.popular = this.props.popular.reverse().map((mv) => {
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
    this.renderHbo();
    this.renderhbomax();
    this.renderhotstar();
    this.renderamazon();
    this.rendernetflix();
    this.rendermostvoted();
    this.renderpopular();
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
        <ListContainer title={"Popular on NETFLIX"} list={this.netflix} />
        <ListContainer title={"Popular on PRIME VIDEO"} list={this.amazon} />
        <ListContainer title={"Popular on HOTSTAR"} list={this.hotstar} />
        <ListContainer title={"Popular on HBO"} list={this.hbo} />
        <ListContainer title={"Popular on HBOMAX"} list={this.hbomax} />
        <ListContainer title={"Most voted"} list={this.mostvoted} />
        <ListContainer title={"Popular on movieex"} list={this.popular} />
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
  fetchPopularTvShows,
  fetchTvShowsMostVoted,
})(TvBody);
