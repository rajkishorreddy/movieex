import React from "react";
import {
  fetchFullTvDetails,
  fetchTvExternalIds,
  fetchTvVideos,
  fetchTvCast,
  fetchTvCrew,
  fetchRecomendedTv,
  fetchSimilarTv,
  fetchTvFlatrate,
  fetchTvEpDetails,
  fetchEPVideos,
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
      isOpen2: false,
      seasonNo: 1,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  openModal2 = () => {
    this.setState({ isOpen2: true });
  };
  componentDidMount() {
    const fetchapi = async () => {
      await this.props.fetchFullTvDetails(this.props.match.params.id);
      await this.props.fetchTvExternalIds(this.props.match.params.id);
      await this.props.fetchTvFlatrate(this.props.match.params.id);
      await this.props.fetchTvVideos(this.props.match.params.id);
      await this.props.fetchTvCast(this.props.match.params.id);
      await this.props.fetchTvCrew(this.props.match.params.id);
      await this.props.fetchRecomendedTv(this.props.match.params.id);
      await this.props.fetchSimilarTv(this.props.match.params.id);
      await this.props.fetchTvFlatrate(this.props.match.params.id);
      await this.props.fetchTvEpDetails(this.props.match.params.id, 1);
    };
    fetchapi();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.epdetails.season_number !== this.state.seasonNo) {
      const fetchapi = async () => {
        await this.props.fetchTvEpDetails(
          this.props.match.params.id,
          this.state.seasonNo
        );
        await this.props.fetchEPVideos(
          this.props.match.params.id,
          this.state.seasonNo
        );
      };
      fetchapi();
    }
  }
  renderGenre() {
    if (!this.props.fullDetails) return null;
    return this.props.fullDetails.genres.map((g) => (
      <div className="info-genre-item" key={g.id}>
        {g.name}
      </div>
    ));
  }
  onSeasonClick = (id) => {
    this.setState({ seasonNo: id });
  };
  renderSeasons() {
    if (!this.props.fullDetails) {
      return <div>Loading...</div>;
    }
    if (this.props.fullDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.SeasonList = this.props.fullDetails.seasons.map((mv) => {
        return (
          // <Link className="infolink" to={`/movies/info/${mv.id}`} key={mv.id}>
          <div
            className="ses-element"
            onClick={() => this.setState({ seasonNo: mv.season_number })}
            key={mv.id}
          >
            <img
              src={"https://image.tmdb.org/t/p/original/" + mv.poster_path}
              className="ses-img"
              alt={mv.name}
            ></img>
            <div className="ses-rating">{mv.name}</div>
            <div className="ses-rating">EP : {mv.episode_count}</div>
            <div className="ses-rating">{mv.air_date}</div>
          </div>
          // </Link>
        );
      });
    }
  }
  renderCrew() {
    if (!this.props.crew) return <div>Loading...</div>;
    if (this.props.fullDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.crewList = this.props.crew.map((mv) => (
        <Link
          className="infolink"
          to={`/people/info/${mv.id}`}
          key={mv.credit_id}
        >
          <div key={mv.credit_id} className="cast-element">
            <img src={mv.profileimg} className="cast-img" alt={mv.title}></img>
            <div className="cast-char">{mv.name}</div>
            <div className="cast-char">{mv.job}</div>
            <div className="cast-name">
              {/* <span className="cast-small">department: </span> */}
              {mv.department}
            </div>
          </div>
        </Link>
      ));
    }
  }
  renderCast() {
    if (!this.props.cast) return <div>Loading...</div>;
    if (this.props.fullDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.castList = this.props.cast.map((mv) => (
        <Link
          className="infolink"
          to={`/people/info/${mv.id}`}
          key={mv.credit_id}
        >
          <div key={mv.credit_id} className="cast-element">
            <img src={mv.profileimg} className="cast-img" alt={mv.title}></img>
            <div className="cast-char">
              <span className="cast-small"> charactor: </span>
              {mv.character}
            </div>
            <div className="cast-name">
              <span className="cast-small">Original: </span>
              {mv.name}
            </div>
            <div className="cast-name">
              <span className="cast-small">Total EP: </span>
              {mv.total_ep}
            </div>
          </div>
        </Link>
      ));
    }
  }
  renderRecomendedTv() {
    if (!this.props.recomended) {
      return <div>Loading...</div>;
    }
    if (this.props.fullDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.recomended = this.props.recomended.map((mv) => {
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
  }
  renderSimilarTv() {
    if (!this.props.similar) {
      return <div>Loading...</div>;
    }
    if (this.props.fullDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.similar = this.props.similar.map((mv) => {
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
  }
  renderStreamon() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    if (this.props.fullDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      return (
        <div className="ov-stream">
          <div className="ov-streamon">Stream on</div>
          <div className="ov-item">
            <img
              className="ov-item-logo"
              src={this.props.stream[0]?.logo}
              alt={this.props.stream[0]?.name}
            ></img>
            <div className="ov-item-name">{this.props.stream[0]?.name}</div>
          </div>
        </div>
      );
    }
  }
  renderEPdetails() {
    if (!this.props.epdetails) {
      return <div>Loading...</div>;
    }
    if (this.props.fullDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      const mv = this.props.epdetails;
      return (
        <div>
          <div className="ep-title">
            <span>
              {" "}
              season {mv.season_number} || {mv.title}
            </span>{" "}
            <button className="btn-trailer" onClick={this.openModal2}>
              <div className="ep-trailer">
                <span>
                  <svg className="ep-trailer-icon">
                    <use xlinkHref={`${sprite}#icon-play2`}></use>
                  </svg>
                </span>
                Watch Trailer
              </div>
            </button>
          </div>

          <div className="ep-relese">Relesed on | {mv.relese}</div>
          <div className="ep-overview">{mv.overview}</div>
          <div className="ep-epcontainer">
            {mv.episodes?.map((el) => {
              return (
                <div className="ep-element">
                  <div className="ep-element-count">{el.episode_number}</div>
                  <img
                    className="ep-element-img"
                    src={mv.posterURL + el?.still_path}
                    alt="still img"
                  />
                  <div className="ep-element-details">
                    <div className="ep-element-details-name">{el?.name}</div>
                    <div className="ep-element-details-relese">
                      {el?.air_date}
                    </div>
                    <div className="ep-element-details-overview">
                      {el?.overview}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
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
            <button className="btn-trailer" onClick={this.openModal}>
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
              <div className="info-visite-msg">visit official series pages</div>
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
              VISIT HOME PAGE OF THIS TVshow
            </a>
            <div className="info-rating">Rating : {mv.rating}</div>
          </div>
          <div className="ov">
            <div className="ov-title">Overview</div>
            <div className="ov-data">
              {this.renderStreamon()}
              <br />
              {mv.overview}
            </div>
          </div>
          <div className="info-createdby-container">
            <div className="info-createdby-title">Created by</div>
            <div className="info-createdby">
              {mv.created_by.map((el) => (
                <Link to={`/people/info/${el.id}`} className="infolink">
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
                </Link>
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
          <div className="ep-container">{this.renderEPdetails()}</div>
          <ListContainer title={"CAST"} list={this.castList} />
          <ListContainer title={"CREW"} list={this.crewList} />
          {this.props.recomended.length ? (
            <ListContainer
              title={"Recomended TVshows"}
              list={this.recomended}
            />
          ) : null}
          {this.props.similar.length ? (
            <ListContainer title={"Similar TVshows"} list={this.similar} />
          ) : null}
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={this.state.isOpen}
            videoId={this.props.videos[0]?.key}
            onClose={() => this.setState({ isOpen: false })}
          />

          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={this.state.isOpen2}
            videoId={this.props.epvideo[0]?.key}
            onClose={() => this.setState({ isOpen2: false })}
          />
        </div>
      );
    }
  }

  render() {
    this.renderSeasons();
    this.renderCast();
    this.renderCrew();
    this.renderRecomendedTv();
    this.renderSimilarTv();
    return (
      <React.Fragment>
        {this.renderBody()}
        <div className="quote quote-smallsize">
          “I would rather entertain and hope that people learned something than
          educate people and hope they were entertained.”{" "}
          <span className="quote-small">– Walt Disney</span>
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
    cast: state.tvCast,
    crew: state.tvCrew,
    recomended: state.recomendedTv,
    similar: state.similarTv,
    stream: state.tvstream,
    epdetails: state.epdetails,
    epvideo: state.epvideo,
  };
};
export default connect(mapStateToProps, {
  fetchFullTvDetails,
  fetchTvExternalIds,
  fetchTvVideos,
  fetchTvCast,
  fetchTvCrew,
  fetchRecomendedTv,
  fetchSimilarTv,
  fetchTvFlatrate,
  fetchTvEpDetails,
  fetchEPVideos,
})(TvInfo);
