import React from "react";
import {
  fetchPeopleDetails,
  fetchPeopleMovieList,
  fetchPeopleTvList,
  fetchPeopleExternalIds,
  fetchPeopleimgs,
} from "../../actions";
import { connect } from "react-redux";
import "./peopleinfo.scss";
import ListContainer from "../movies/Listcontainer";
import { Link } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
class PeopleInfo extends React.Component {
  componentDidMount() {
    const fetchapi = async () => {
      await this.props.fetchPeopleDetails(this.props.match.params.id);
      await this.props.fetchPeopleMovieList(this.props.match.params.id);
      await this.props.fetchPeopleTvList(this.props.match.params.id);
      await this.props.fetchPeopleExternalIds(this.props.match.params.id);
      await this.props.fetchPeopleimgs(this.props.match.params.id);
    };
    fetchapi();
  }
  renderimg() {
    if (!this.props.imgs) return <div>Loading...</div>;
    if (this.props.details.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.imgs = this.props.imgs.map((mv, i) => (
        <div className="cast-element" key={i}>
          <img src={mv.poster} className="cast-img" alt="sorry"></img>
        </div>
      ));
    }
  }
  rendermv() {
    if (!this.props.movies) return <div>Loading...</div>;
    if (this.props.details.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.movies = this.props.movies.map((mv) => (
        <Link
          className="infolink"
          to={`/movies/info/${mv.id}`}
          key={mv.credit_id}
        >
          <div className="cast-element">
            <img src={mv.poster} className="cast-img" alt={mv.title}></img>
            <div className="cast-char">
              <span className="cast-small"> charactor: </span>
              {mv.character}
            </div>
            <div className="cast-name">{mv.title}</div>
            <div className="cast-name">{mv.relese}</div>
          </div>
        </Link>
      ));
    }
  }
  rendertv() {
    if (!this.props.tv) return <div>Loading...</div>;
    if (this.props.details.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.tv = this.props.tv?.map((mv) => (
        <Link
          className="infolink"
          to={`/tvshows/info/${mv.id}`}
          key={mv.credit_id}
        >
          <div className="cast-element">
            <img src={mv.poster} className="cast-img" alt={mv.title}></img>
            <div className="cast-char">
              <span className="cast-small"> charactor: </span>
              {mv.character}
            </div>
            <div className="cast-name">{mv.title}</div>
            <div className="cast-name">{mv.relese}</div>
          </div>
        </Link>
      ));
    }
  }
  renderinfo() {
    if (!this.props.details) return <div>Loading...</div>;
    if (this.props.details.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      const mv = this.props.details;
      return (
        <div className="info-pheader">
          <div className="info-img-container">
            <img src={mv.profile} alt={mv.name} className="info-pheader-img" />
          </div>
          <div className="info-pheader-detail">
            <div className="info-pheader-extids">
              <a
                href={`https://www.instagram.com/${this.props.extids.instagram_id}`}
                className="info-pheader-extids-link"
              >
                <svg className="info-pheader-extids-link-logo info-pheader-extids-link-logo-inst">
                  <use xlinkHref={`${sprite}#icon-instagram`}></use>
                </svg>
              </a>
              <a
                href={`https://www.facebook.com/${this.props.extids.facebook_id}`}
                className="info-pheader-extids-link"
              >
                <svg className="info-pheader-extids-link-logo info-pheader-extids-link-logo-fb">
                  <use xlinkHref={`${sprite}#icon-facebook2`}></use>
                </svg>
              </a>
              <a
                href={`https://twitter.com/${this.props.extids.twitter_id}`}
                className="info-pheader-extids-link"
              >
                <svg className="info-pheader-extids-link-logo info-pheader-extids-link-logo-twitter">
                  <use xlinkHref={`${sprite}#icon-twitter`}></use>
                </svg>
              </a>
            </div>
            <div className="info-pheader-name">{mv.name}</div>
            <div className="info-pheader-birth-death">
              <div className="info-pheader-birth">BIRTH: {mv.birthday}</div>
              {mv.deathday ? (
                <div className="info-pheader-death">{mv.death}</div>
              ) : null}
            </div>
            <div className="info-pheader-placeofbirth">
              BIRTH PLACE: {mv.placeOfBirth}
            </div>
            <div className="info-pheader-bio">{mv.biography}</div>
          </div>
        </div>
      );
    }
  }
  render() {
    this.rendermv();
    this.rendertv();
    this.renderimg();
    return (
      <div>
        {this.renderinfo()}
        {this.props.movies.length ? (
          <ListContainer title={"Movies"} list={this.movies} />
        ) : null}
        {this.props.tv.length ? (
          <ListContainer title={"TVshows"} list={this.tv} />
        ) : null}

        <ListContainer title={"Gallery"} list={this.imgs} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    details: state.peopleDetail,
    movies: state.peoplemv,
    tv: state.peopletv,
    extids: state.peopleext,
    imgs: state.peopleimg,
  };
};
export default connect(mapStateToProps, {
  fetchPeopleDetails,
  fetchPeopleMovieList,
  fetchPeopleTvList,
  fetchPeopleExternalIds,
  fetchPeopleimgs,
})(PeopleInfo);
