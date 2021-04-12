import React from "react";
import {
  fetchFullTvDetails,
  fetchTvExternalIds,
  fetchTvVideos,
} from "../../actions";
import { connect } from "react-redux";
import sprite from "../../assets/sprite.svg";
import "../scss/tv/tvinfo.scss";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Link } from "react-router-dom";
import ListContainer from "../movies/Listcontainer";
class TvInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  componentDidMount() {
    const fetchapi = async () => {
      await this.props.fetchFullTvDetails(this.props.match.params.id);
      await this.props.fetchTvExternalIds(this.props.match.params.id);
      await this.props.fetchTvVideos(this.props.match.params.id);
    };
    fetchapi();
  }
  renderGenre() {
    if (!this.props.fullDetails) return null;
    return this.props.fullDetails.genres.map((g) => (
      <div className="info-genre-item" key={g.id}>
        {g.name}
      </div>
    ));
  }
  renderSeasons() {
    if (!this.props.fullDetails) {
      return <div>Loading...</div>;
    }
    if (this.props.fullDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.SeasonList = this.props.fullDetails.seasons.map((mv) => {
        return (
          <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
            <div className="ses-element">
              <img
                src={"https://image.tmdb.org/t/p/original/" + mv.poster_path}
                className="ses-img"
                alt={mv.name}
              ></img>
              <div className="ses-rating">{mv.name}</div>
              <div className="ses-rating">EP : {mv.episode_count}</div>
              <div className="ses-rating">{mv.air_date}</div>
            </div>
          </Link>
        );
      });
    }
  }
  renderBody() {
    if (!this.props.fullDetails) return <div>Loading...</div>;
    if (this.props.fullDetails.id !== Number(this.props.match.params.id)) {
      return <div>fetching</div>;
    } else {
      const mv = this.props.fullDetails;
      return (
        <div>
          <div className="info-header">
            <img className="info-back" src={mv.backimg} alt={mv.title} />
            <div className="info-blur"></div>
            <div className="info-title">
              {mv.name}
              <br />
              <span className="info-tagline">{mv.tagline}</span>
            </div>

            <div className="info-prod">
              {mv.in_prod
                ? "series currently in production"
                : "series not in production"}
            </div>
            <div className="info-status">
              {/* <span>status:</span> */}
              {mv.status}
            </div>
            <img
              src={
                "https://image.tmdb.org/t/p/original/" +
                mv.networks[0].logo_path
              }
              className="info-stream-logo"
              alt={mv.networks[0].name}
            />
            <button onClick={this.openModal}>
              <div className="info-trailer">
                <span>
                  <svg className="info-trailer-icon">
                    <use xlinkHref={`${sprite}#icon-play2`}></use>
                  </svg>
                </span>
                Watch Trailer
              </div>
            </button>
            <div className="info-extids">
              <a
                href={`https://www.instagram.com/${this.props.extIds.instagram_id}`}
                className="info-extids-link"
              >
                <svg className="info-extids-link-logo info-extids-link-logo-inst">
                  <use xlinkHref={`${sprite}#icon-instagram`}></use>
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/${this.props.extIds.facebook_id}`}
                className="info-extids-link"
              >
                <svg className="info-extids-link-logo info-extids-link-logo-fb">
                  <use xlinkHref={`${sprite}#icon-facebook2`}></use>
                </svg>
              </a>
              <a
                href={`https://twitter.com/${this.props.extIds.twitter_id}`}
                className="info-extids-link"
              >
                <svg className="info-extids-link-logo info-extids-link-logo-twitter">
                  <use xlinkHref={`${sprite}#icon-twitter`}></use>
                </svg>
              </a>
              <div className="info-visite-msg">visit official movie pages</div>
            </div>
            <div className="info-genre">{this.renderGenre()}</div>
            <div className="info-money">
              <div className="info-money-budget">
                Seasons | {mv.no_of_seasons}
              </div>
              <div className="info-money-revenue">Episodes | {mv.no_of_ep}</div>
              <div className="info-money-revenue">
                avg.Runtime | {mv.runtime[0]} min
              </div>
            </div>
            <div className="info-date info-money">
              <div className="info-money-budget">
                First EP | {mv.first_air_date}
              </div>
              <div className="info-money-revenue">
                Last EP | {mv.last_air_date}
              </div>
            </div>
            <a href={mv.homepage} className="info-link">
              VISIT HOME PAGE OF THIS MOVIE
            </a>
            <div className="info-rating">Rating : {mv.rating}</div>
          </div>
          <div className="ov">
            <div className="ov-title">Overview</div>
            <p className="ov-data">
              {/* <span className="ov-relese">Released : {mv.relese}</span> */}
              {/* <br /> */}
              {mv.overview}
            </p>
          </div>
          <div className="info-createdby-container">
            <div className="info-createdby-title">Created by</div>
            <div className="info-createdby">
              {mv.created_by.map((el) => (
                <div className="info-createdby-el" key={el.credit_id}>
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original/" + el.profile_path
                    }
                    alt={el.name}
                    className="info-createdby-img"
                  />
                  <div className="info-createdby-name">{el.name} </div>
                </div>
              ))}
            </div>
          </div>
          <div className="info-createdby-container">
            <div className="info-createdby-title">Produced by</div>
            <div className="info-createdby">
              {mv.productionCompanies.map((el) => (
                <div className="info-createdby-el" key={el.id}>
                  <img
                    src={"https://image.tmdb.org/t/p/original/" + el.logo_path}
                    alt={el.name}
                    className="info-createdby-logo"
                  />
                  <div className="info-createdby-name">{el.name} </div>
                </div>
              ))}
            </div>
          </div>
          <ListContainer title={"Season List "} list={this.SeasonList} />

          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={this.state.isOpen}
            videoId={this.props.videos[0]?.key}
            onClose={() => this.setState({ isOpen: false })}
          />
        </div>
      );
    }
  }
  render() {
    this.renderSeasons();
    return (
      <React.Fragment>
        {this.renderBody()}
        <div className="quote">
          “It's not what a movie is about, it's how it is about it.”{" "}
          <span className="quote-small">― Roger Ebert</span>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    fullDetails: state.fullTvDetails,
    extIds: state.tvExtIds,
    videos: state.tvVideos,
  };
};
export default connect(mapStateToProps, {
  fetchFullTvDetails,
  fetchTvExternalIds,
  fetchTvVideos,
})(TvInfo);
