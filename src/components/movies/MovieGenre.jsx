import React from "react";
import { fetchGenre, fetchMoviesByGenre } from "../../actions";
import { connect } from "react-redux";
import "../scss/movieGenre.scss";
import { Link } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
class MovieGenre extends React.Component {
  state = { selected: null, page: 1, id: null };
  componentDidMount() {
    this.props.fetchGenre();
  }
  handleGenreClick = async (id, page, name) => {
    this.setState({ selected: name, id: id, page: 1 });
    await this.props.fetchMoviesByGenre(id, page);
  };
  genreNextPage = async (id, page) => {
    await this.props.fetchMoviesByGenre(id, page);
  };
  handleRightClick() {
    this.genreNextPage(this.state.id, this.state.page + 1);
    this.setState({ page: this.state.page + 1, selected: this.state.selected });
  }
  handleLeftClick() {
    if (this.state.page > 1) {
      this.genreNextPage(this.state.id, this.state.page - 1);
      this.setState({
        page: this.state.page - 1,
        selected: this.state.selected,
      });
    }
  }
  rendreGenreButtons() {
    if (!this.props.genreList) return <div>Loading...</div>;
    return this.props.genreList.map((genre) => {
      return (
        <button
          key={genre.id}
          className="genre-list-item"
          onClick={() => this.handleGenreClick(genre.id, 1, genre.name)}
        >
          {genre.name}
        </button>
      );
    });
  }
  renderMoviesByGenre() {
    if (!this.props.genreMovies) return <div>Loading...</div>;
    return this.props.genreMovies.map((mv) => {
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
    return (
      <div>
        <div className="genre">
          <div className="genre-title">Select a genre</div>
          <div className="genre-list">{this.rendreGenreButtons()}</div>
          <div className="genre-menu">
            <div className="genre-selected">{this.state.selected}</div>
            <Link className="genre-link" to="/movies">
              All Movies
            </Link>
          </div>
        </div>
        {this.props.genreMovies.length > 0 ? (
          <div className="genre-container">
            {this.renderMoviesByGenre()}
            <div
              onClick={() => this.handleRightClick()}
              className="genre-container-right"
            >
              click for more!
              <svg className="genre-container-right-item">
                <use xlinkHref={`${sprite}#icon-arrow-right`}></use>
              </svg>
            </div>
            <div
              onClick={() => this.handleLeftClick()}
              className="genre-container-left"
            >
              <svg className="genre-container-left-item">
                <use xlinkHref={`${sprite}#icon-arrow-left`}></use>
              </svg>
            </div>
          </div>
        ) : (
          <div className="genre-test">
            <div className="genre-test-quote">
              “People want to see something that shows them you can do what you
              say. That’s the trick.“{" "}
              <span className="genre-test-quote-small">
                – Christopher Nolan
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { genreList: state.genreList, genreMovies: state.genreMovies };
};
export default connect(mapStateToProps, { fetchGenre, fetchMoviesByGenre })(
  MovieGenre
);
