import React from "react";
import { connect } from "react-redux";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../scss/tv/tvbody.scss";
import { Link } from "react-router-dom";
import ListContainer from "../movies/Listcontainer";
import {
  fetchHboTvShows,
  fetchHotstarTvShows,
  fetchAmazonTvShows,
  fetchNetflixTvShows,
  fetchPopularTvShows,
  fetchTvShowsMostVoted,
  fetchTrendingTvshows,
} from "../../actions";
class TvBody extends React.Component {
  constructor(props) {
    super(props);
    this.carouselbox = React.createRef();
  }
  componentDidMount() {
    const fetchapi = async () => {
      await this.props.fetchTvShowsMostVoted();
      await this.props.fetchHboTvShows();
      await this.props.fetchHotstarTvShows();
      await this.props.fetchAmazonTvShows();
      await this.props.fetchNetflixTvShows();
      await this.props.fetchPopularTvShows();
      await this.props.fetchTrendingTvshows();
    };
    fetchapi();
  }
  renderSlider() {
    if (!this.props.mostvoted) {
      return <div>Loading...</div>;
    }
    return this.props.mostvoted.slice(0, 10).map((mv, i) => {
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

          {i === 0 ? (
            <div className="slide-alert">Click me once to start slide show</div>
          ) : null}
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
  rendertrending() {
    if (!this.props.trending) {
      return <div>Loading...</div>;
    }
    this.trending = this.props.trending.reverse().map((mv) => {
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
    this.renderhotstar();
    this.renderamazon();
    this.rendernetflix();
    this.rendermostvoted();
    this.renderpopular();
    this.rendertrending();
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
        <ListContainer title={"Popular on NETFLIX"} list={this.netflix} />
        <ListContainer title={"Popular on PRIME VIDEO"} list={this.amazon} />
        <ListContainer title={"Popular on HOTSTAR"} list={this.hotstar} />
        <ListContainer title={"Popular on HBO"} list={this.hbo} />
        <ListContainer title={"Most voted"} list={this.mostvoted} />
        <ListContainer title={"Popular on movieex"} list={this.popular} />
        <ListContainer title={"Trending this week"} list={this.trending} />
        <div className="quote">
          “I'm not in the meth business. I'm in the empire business.”{" "}
          <span className="quote-small">– WALTER WHITE</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hbo: state.hbotv,

    hotstar: state.hotstartv,
    amazon: state.amazontv,
    netflix: state.netflixtv,
    topRated: state.topRatedTv,
    popular: state.PopularTv,
    mostvoted: state.mostvotedtv,
    trending: state.trendingTv,
  };
};

export default connect(mapStateToProps, {
  fetchHboTvShows,

  fetchHotstarTvShows,
  fetchAmazonTvShows,
  fetchNetflixTvShows,
  fetchPopularTvShows,
  fetchTvShowsMostVoted,
  fetchTrendingTvshows,
})(TvBody);
