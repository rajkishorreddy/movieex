import React from "react";
import { fetchGenre, fetchMoviesByGenre } from "../../actions";
import { connect } from "react-redux";
import "../scss/movieGenre.scss";
import { Link } from "react-router-dom";
class MovieGenre extends React.Component {
  state = { selected: null };
  componentDidMount() {
    this.props.fetchGenre();
  }
  handleGenreClick = async (id, name) => {
    await this.props.fetchMoviesByGenre(id);
    this.setState({ selected: name });
  };
  rendreGenreButtons() {
    if (!this.props.genreList) return <div>Loading...</div>;
    return this.props.genreList.map((genre) => {
      return (
        <button
          key={genre.id}
          className="genre-list-item"
          onClick={() => this.handleGenreClick(genre.id, genre.name)}
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
          <div className="genre-container">{this.renderMoviesByGenre()}</div>
        ) : (
          <div className="genre-test"></div>
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
