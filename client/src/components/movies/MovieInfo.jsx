import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import {
  fetchFullMovieDetails,
  fetchMovieExternalIds,
  fetchMovieCast,
  fetchMovieCrew,
  fetchMovieReviews,
  fetchMovieBuy,
  fetchMovieFlatrate,
  fetchMovieRent,
  fetchSimilarMovies,
  fetchRecomendedMovies,
} from "../../actions";
import { connect } from "react-redux";
import "../scss/movieInfo.scss";
import sprite from "../../assets/sprite.svg";
import ListContainer from "./Listcontainer";
// import repimg from "../../assets/repimg.png";
import { Link } from "react-router-dom";
class MovieInfo extends React.Component {
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
      await this.props.fetchFullMovieDetails(this.props.match.params.id);
      await this.props.fetchMovieExternalIds(this.props.match.params.id);
      await this.props.fetchMovieCast(this.props.match.params.id);
      await this.props.fetchMovieCrew(this.props.match.params.id);
      await this.props.fetchMovieReviews(this.props.match.params.id);
      await this.props.fetchMovieBuy(this.props.match.params.id);
      await this.props.fetchMovieFlatrate(this.props.match.params.id);
      await this.props.fetchMovieRent(this.props.match.params.id);
      await this.props.fetchRecomendedMovies(this.props.match.params.id);
      await this.props.fetchSimilarMovies(this.props.match.params.id);
    };
    fetchapi();

    console.log(this.props.match.params.id);
  }
  renderGenre() {
    if (!this.props.movieDetails) return null;
    return this.props.movieDetails.genres.map((g) => (
      <div className="info-genre-item" key={g.id}>
        {g.name}
      </div>
    ));
  }
  renderProduction() {
    if (!this.props.movieDetails) return null;
    return this.props.movieDetails.productionCompanies.map((el) => {
      return (
        <div className="info-production-item" key={el.id}>
          <img
            className="info-production-item-logo"
            src={`https://image.tmdb.org/t/p/original/${el.logo_path}`}
            alt="logo"
          />
          <div className="info-production-item-name">{el.name}</div>
        </div>
      );
    });
  }
  renderCast() {
    if (!this.props.cast) return <div>Loading...</div>;
    if (this.props.movieDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.castList = this.props.cast.map((mv) => (
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
        </div>
      ));
    }
  }
  renderReviews() {
    if (!this.props.reviews) return <div>Loading...</div>;
    if (this.props.reviews.length === 0)
      this.reviewList = [<div className="review-author">NO REVIEWS</div>];
    if (this.props.movieDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.reviewList = this.props.reviews.map((mv) => (
        <div key={mv.id} className="review-element">
          <div className="review-author">{mv.name}</div>
          <p className="review-content">{mv.content}</p>
        </div>
      ));
    }
  }
  renderCrew() {
    if (!this.props.crew) return <div>Loading...</div>;
    if (this.props.movieDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.crewList = this.props.crew.map((mv) => (
        <div key={mv.credit_id} className="cast-element">
          <img src={mv.profileimg} className="cast-img" alt={mv.title}></img>
          <div className="cast-char">{mv.name}</div>
          <div className="cast-char">{mv.job}</div>
          <div className="cast-name">
            {/* <span className="cast-small">department: </span> */}
            {mv.department}
          </div>
        </div>
      ));
    }
  }
  renderbuy() {
    if (!this.props.buyat) return <div>Loading...</div>;
    if (this.props.movieDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    if (this.props.buyat.length === 0)
      return <div className="wp-none">NO SERVICES AVAILABLE</div>;
    else {
      return this.props.buyat.map((el) => {
        return (
          <div key={el.id} className="wp-buy-item">
            <img className="wp-buy-item-img" src={el.logo} alt={el.name} />
            <div className="wp-buy-item-name">{el.name}</div>
          </div>
        );
      });
    }
  }
  renderrent() {
    if (!this.props.rentat) return <div>Loading...</div>;
    if (this.props.movieDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    if (this.props.rentat.length === 0)
      return <div className="wp-none">NO SERVICES AVAILABLE</div>;
    else {
      return this.props.rentat.map((el) => {
        return (
          <div key={el.id} className="wp-buy-item">
            <img className="wp-buy-item-img" src={el.logo} alt={el.name} />
            <div className="wp-buy-item-name">{el.name}</div>
          </div>
        );
      });
    }
  }
  renderflat() {
    if (!this.props.flatat) return <div>Loading...</div>;
    if (this.props.movieDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    if (this.props.flatat.length === 0)
      return <div className="wp-none">NO SERVICES AVAILABLE</div>;
    else {
      return this.props.flatat.map((el) => {
        return (
          <div key={el.id} className="wp-buy-item">
            <img className="wp-buy-item-img" src={el.logo} alt={el.name} />
            <div className="wp-buy-item-name">{el.name}</div>
          </div>
        );
      });
    }
  }
  renderRecomendedMovies() {
    if (!this.props.recomendedMovies) {
      return <div>Loading...</div>;
    }
    if (this.props.movieDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.recomendedMovies = this.props.recomendedMovies.map((mv) => {
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
  }
  renderSimilarMovies() {
    if (!this.props.similarMovie) {
      return <div>Loading...</div>;
    }
    if (this.props.movieDetails.id !== Number(this.props.match.params.id))
      return <div>fetching</div>;
    else {
      this.similarMovie = this.props.similarMovie.map((mv) => {
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
  }

  renderBody() {
    if (!this.props.movieDetails) return <div>Loading...</div>;
    if (this.props.movieDetails.id !== Number(this.props.match.params.id)) {
      console.log("int the body", this.props.match.params.id);
      return <div>fetching</div>;
    } else {
      const mv = this.props.movieDetails;
      return (
        <div>
          <div className="info-header">
            <img className="info-back" src={mv.backimg} alt={mv.title} />
            <div className="info-blur"></div>
            <div className="info-title">{mv.title}</div>
            <div className="info-tagline">{mv.tagline}</div>
            <div className="info-visite-msg">visit official movie pages</div>
            <div className="info-runtime">
              <span>
                <svg className="info-runtime-icon">
                  <use xlinkHref={`${sprite}#icon-clock`}></use>
                </svg>
              </span>
              {mv.runtime} min
            </div>
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
            </div>
            <div className="info-genre">{this.renderGenre()}</div>
            <div className="info-money">
              <div className="info-money-budget">
                Budget : {mv.budget === 0 ? `no info` : `${mv.budget}$`}
              </div>
              <div className="info-money-revenue">
                {" "}
                Revenue : {mv.revenue === 0 ? `no info` : `${mv.revenue}$`}
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
              <span className="ov-relese">Released : {mv.relese}</span>
              <br />
              {mv.overview}
            </p>
          </div>
          <div className="info-production-title">Production</div>
          <div className="info-production">{this.renderProduction()}</div>
          <div className="wp">
            <div className="wp-title">WatchProviders</div>
            <div className="wp-buy">
              <h5 className="wp-buy-title">Rent</h5>
              {this.renderrent()}
            </div>
            <div className="wp-buy">
              <h5 className="wp-buy-title">Streaming</h5>
              {this.renderflat()}
            </div>
            <div className="wp-buy">
              <h5 className="wp-buy-title">Buy</h5>
              {this.renderbuy()}
            </div>
          </div>
          <ListContainer title={"CAST"} list={this.castList} />
          <ListContainer title={"CREW"} list={this.crewList} />
          <ListContainer title={"Reviews"} list={this.reviewList} />
          <ListContainer title={"Similar Movies"} list={this.similarMovie} />
          <ListContainer
            title={"Recomended Movies"}
            list={this.recomendedMovies}
          />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={this.state.isOpen}
            videoId="OT2b5KzMoC0"
            onClose={() => this.setState({ isOpen: false })}
          />
        </div>
      );
    }
  }

  render() {
    this.renderCast();
    this.renderCrew();
    this.renderReviews();
    this.renderRecomendedMovies();
    this.renderSimilarMovies();
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
    movieDetails: state.fullMovieDetails,
    extIds: state.movieExtIds,
    cast: state.movieCast,
    crew: state.movieCrew,
    reviews: state.movieReview,
    buyat: state.movieBuy,
    flatat: state.movieFlat,
    rentat: state.movieRent,
    similarMovie: state.similarMovie,
    recomendedMovies: state.recomendedMovies,
  };
};
export default connect(mapStateToProps, {
  fetchFullMovieDetails,
  fetchMovieExternalIds,
  fetchMovieCast,
  fetchMovieCrew,
  fetchMovieReviews,
  fetchMovieBuy,
  fetchMovieRent,
  fetchMovieFlatrate,
  fetchSimilarMovies,
  fetchRecomendedMovies,
})(MovieInfo);
